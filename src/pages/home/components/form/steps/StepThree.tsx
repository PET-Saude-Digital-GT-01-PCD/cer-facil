import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Search, Loader2 } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import "@/lib/leaflet-config";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 18);
  }, [center, map]);
  return null;
}

interface StepThreeProps {
  selectedDeficiencies?: string[];
  ageGroup?: string;
  onBack: () => void;
  onNext: (location: string, coordinates: { lat: number; lng: number }) => void;
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
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(false);
  const [locationPermission, setLocationPermission] = useState(false);

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

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
            );
            const data = await response.json();

            const city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.municipality;
            if (city) setCityName(city);

            if (data.address && data.address.postcode) {
              setCep(data.address.postcode.replace(/\D/g, ""));
            }
          } catch (error) {
            console.error("Erro ao buscar detalhes da localização:", error);
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
    const cleanCep = cep.replace(/\D/g, "");
    if (cleanCep.length < 8) {
      alert("Digite um CEP válido");
      return;
    }

    setLoading(true);
    try {
      const viaCepResponse = await fetch(
        `https://viacep.com.br/ws/${cleanCep}/json/`
      );
      const viaCepData = await viaCepResponse.json();

      if (viaCepData.erro) {
        alert("CEP não encontrado.");
        setLoading(false);
        return;
      }

      const { localidade, uf } = viaCepData;
      setCityName(localidade);

      const cityQuery = `city=${encodeURIComponent(localidade)}&state=${encodeURIComponent(uf)}&country=Brazil&format=json`;
      const nominatimResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?${cityQuery}`
      );
      const data = await nominatimResponse.json();

      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lng = parseFloat(data[0].lon);
        setLocation({ lat, lng });
        setShowMap(true);
      } else {
        alert(
          "Não foi possível encontrar as coordenadas para este CEP no mapa."
        );
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      alert("Erro de conexão ao buscar o mapa.");
    }
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && cep.replace(/\D/g, "").length >= 8) {
      handleCepSearch();
    }
  };

  return (
    <div className="w-full">
      <Card className="border-2 border-[var(--cor-bg-1)] shadow-2xl max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-[var(--cor-bg-1)] font-bold">
            <h2>
              Localização
            </h2>
          </CardTitle>
          <CardDescription className="text-2xl">
            Precisamos da sua localização para encontrar o CER mais apropriado
            para você.
          </CardDescription>
          {selectedDeficiencies.length > 0 && (
            <CardDescription aria-hidden="true" className="text-xl">
              Deficiência(s): {selectedDeficiencies.join(", ")} | Idade:{" "}
              {ageGroup}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-col items-center gap-3">
            <Button
              onClick={() => {
                handleGeolocation();
                setLocationPermission(true);
              }}
              className="w-full max-w-sm bg-[var(--cor-bg-1)] hover:brightness-110 transition-all text-2xl py-8
                        focus-visible:ring-[10px] focus-visible:ring-[var(--cor-destaque)] focus-visible:ring-offset-2 outline-none"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="mr-2 h-12 w-12 animate-spin" />
              ) : (
                <MapPin className="mr-2 h-16 w-16" />
              )}
              Permitir Localização
            </Button>
            
            <div className="text-muted-foreground text-2xl">Ou</div>

            <div className="w-full max-w-sm space-y-2">
              <Label htmlFor="cep" className="text-2xl font-semibold">
                Digite seu CEP:
              </Label>
              <div className="flex gap-2">
                <Input
                  id="cep"
                  type="text"
                  placeholder="00000-000"
                  maxLength={9}
                  value={formatCep(cep)}
                  onChange={(e) => {
                    setCep(e.target.value.replace(/\D/g, ""));
                    setCityName("");
                  }}
                  onKeyPress={handleKeyPress}
                  className="text-2xl h-16 placeholder:text-xl focus-visible:ring-[10px] focus-visible:ring-[var(--cor-destaque)] focus-visible:ring-offset-2 outline-none"
                />
                <Button
                  aria-label="realizar busca por cep"
                  onClick={handleCepSearch}
                  variant="outline"
                  disabled={cep.replace(/\D/g, "").length < 8 || loading}
                  className="h-16 px-4 focus-visible:ring-[10px] focus-visible:ring-[var(--cor-destaque)] focus-visible:ring-offset-2 outline-none"
                >
                  {loading ? (
                    <Loader2 className="h-12 w-12 animate-spin" />
                  ) : (
                    <Search className="h-12 w-12" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {showMap && location && (
            <div className="w-full space-y-2">
              <div className="text-xl text-green-600 text-center font-semibold">
                ✓ Localização definida: {cityName}
              </div>

              <div aria-hidden="true" inert className="w-full h-[250px] rounded-lg overflow-hidden border">
                <MapContainer
                  center={[location.lat, location.lng] as [number, number]}
                  zoom={16}
                  scrollWheelZoom={true}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <MapUpdater
                    center={[location.lat, location.lng] as [number, number]}
                  />
                  <Marker
                    position={[location.lat, location.lng] as [number, number]}
                  >
                    <Popup>Localização encontrada</Popup>
                  </Marker>
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
            className="px-8 py-5 text-2xl border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)] hover:text-white 
             focus-visible:ring-[10px] focus-visible:ring-[var(--cor-destaque)] focus-visible:ring-offset-2 outline-none"
          >
            Voltar
          </Button>
          <Button
            onClick={() => {
              if (location) {
                onNext(cityName || "Localização definida", location);
              } else {
                alert(
                  "Por favor, valide sua localização antes de prosseguir."
                );
              }
            }}
            disabled={!location}
            size="lg"
            className="px-8 py-5 text-2xl border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)] hover:text-white 
             focus-visible:ring-[10px] focus-visible:ring-[var(--cor-destaque)] focus-visible:ring-offset-2 outline-none"
          >
            Próximo
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}