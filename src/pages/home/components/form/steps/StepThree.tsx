import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Search, Loader2 } from "lucide-react";
import { useState, useCallback } from "react";
import "@/lib/leaflet-config";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StepThreeProps {
  selectedDeficiencies?: string[];
  ageGroup?: string;
  onBack: () => void;
  onNext: (location: string) => void;
}

interface LocationState {
  lat: number;
  lng: number;
}

export default function StepThree({
  selectedDeficiencies = [],
  ageGroup = "",
  onBack,
  onNext,
}: StepThreeProps) {
  const [cep, setCep] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [location, setLocation] = useState<LocationState | null>(null);
  const [loading, setLoading] = useState(false);

  const formatCep = useCallback((value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 5) return numbers;
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
  }, []);

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLocation({ lat, lng });
          setShowMap(true);

          // Buscar CEP a partir das coordenadas
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
            );
            const data = await response.json();

            if (data.address && data.address.postcode) {
              setCep(data.address.postcode.replace(/\D/g, ""));
            }
          } catch (error) {
            console.error("Erro ao buscar CEP:", error);
          }
          setLoading(false);
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
          alert("Não foi possível obter sua localização");
          setLoading(false);
        }
      );
    } else {
      alert("Geolocalização não é suportada pelo seu navegador");
    }
  };

  const handleCepSearch = async () => {
    if (cep.length < 8) {
      alert("Digite um CEP válido");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?postalcode=${cep.replace(
          /\D/g,
          ""
        )}&country=Brazil&format=json`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lng = parseFloat(data[0].lon);
        setLocation({ lat, lng });
        setShowMap(true);
      } else {
        alert("Não foi possível encontrar o CEP");
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      alert("Erro ao buscar CEP");
    }
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && cep.length >= 8) {
      handleCepSearch();
    }
  };

  return (
    <div className="w-full">
      <Card className="border-2 border-[var(--cor-bg-1)] shadow-2xl max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl text-[var(--cor-bg-1)] font-bold">Localização</CardTitle>
          <CardDescription className="text-base">
            Precisamos da sua localização para encontrar o CER mais apropriado
            para você.
          </CardDescription>
          {selectedDeficiencies.length > 0 && (
            <CardDescription className="text-xs">
              Deficiências: {selectedDeficiencies.join(", ")} | Idade:{" "}
              {ageGroup}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-col items-center gap-3">
            <Button
              onClick={handleGeolocation}
              className="w-full max-w-sm bg-[var(--cor-bg-1)] hover:brightness-110 transition-all"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <MapPin className="mr-2 h-4 w-4" />
              )}
              Permitir Localização
            </Button>

            <div className="text-muted-foreground text-sm">Ou</div>

            <div className="w-full max-w-sm space-y-2">
              <Label htmlFor="cep">Digite seu CEP:</Label>
              <div className="flex gap-2">
                <Input
                  id="cep"
                  type="text"
                  placeholder="00000-000"
                  maxLength={9}
                  value={formatCep(cep)}
                  onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
                  onKeyPress={handleKeyPress}
                />
                <Button
                  onClick={handleCepSearch}
                  variant="outline"
                  disabled={cep.length < 8 || loading}
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Search className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {showMap && (
            <div className="w-full space-y-2">
              <div className="text-sm text-green-600 text-center">
                ✓ Localização definida
              </div>

              <div className="w-full h-[250px] rounded-lg overflow-hidden border">
                <MapContainer
                  center={
                    location ? [location.lat, location.lng] : [51.505, -0.09]
                  }
                  zoom={15}
                  scrollWheelZoom={true}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {location && (
                    <Marker position={[location.lat, location.lng]}>
                      <Popup>Sua localização</Popup>
                    </Marker>
                  )}
                </MapContainer>
              </div>
            </div>
          )}
        </CardContent>

        <CardContent className="flex justify-between p-4">
          <Button
            variant="outline"
            onClick={onBack}
            size="lg"
            className="px-8 py-5 text-base border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)] hover:text-white"
          >
            Voltar
          </Button>
          <Button
            onClick={() => {
              if (location && !isNaN(location.lat) && !isNaN(location.lng)) {
                onNext(`${location.lat},${location.lng}`);
              }
            }}
            disabled={!location}
            size="lg"
            className="px-8 py-5 text-base min-w-[160px] border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)]"
          >
            Próximo
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
