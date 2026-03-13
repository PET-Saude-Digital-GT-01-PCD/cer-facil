import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import cersData from "@/data/cers.json";
import macrosData from "@/data/macro.json";
import microsData from "@/data/micro.json";
import Flow from "../../user-flow/Flow";
import { ArrowRight } from "lucide-react";

interface StepFourProps {
  deficiencies?: string[];
  ageGroup?: string;
  location?: string;
  userCoordinates?: { lat: number; lng: number } | null;
  onBack: () => void;
  onFinish: () => void; 
}

interface MatchingResult {
  cer: (typeof cersData)[0];
  score: number;
  distancia: number;
  compatibilidade: number;
  macroRegiao?: number | null;
}

export default function StepFour({
  deficiencies = [],
  ageGroup = "",
  location = "",
  userCoordinates,
  onBack,
  onFinish, 
}: StepFourProps) {
  const [results, setResults] = useState<MatchingResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFlow, setShowFlow] = useState<[boolean, number | null]>([false, null]);

  function calcularDistanciaReal(
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number,
  ): number {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  function determinarMacroRegiao(userLocation: string): number | null {
    const locationLower = userLocation.toLowerCase().trim();
    
    const microRegiao = microsData.find((micro: any) =>
      micro.municipios.some((municipio: string) =>
        municipio.toLowerCase() === locationLower
      )
    );
    
    if (!microRegiao) return null;
    
    const macroRegiao = macrosData.find((macro: any) =>
      macro.regiao.includes(microRegiao.regiao)
    );
    
    return macroRegiao ? macroRegiao.id : null;
  }

  function getMacroRegiaoFromCidade(cidade: string): number | null {
    const cidadeLower = cidade.toLowerCase().trim();
    
    const microRegiao = microsData.find((micro: any) =>
      micro.municipios.some((municipio: string) =>
        municipio.toLowerCase() === cidadeLower
      )
    );
    
    if (!microRegiao) return null;
    
    const macroRegiao = macrosData.find((macro: any) =>
      macro.regiao.includes(microRegiao.regiao)
    );
    
    return macroRegiao ? macroRegiao.id : null;
  }

  useEffect(() => {
    if (!userCoordinates || !userCoordinates.lat || !userCoordinates.lng) {
      setLoading(false);
      return;
    }

    const userMacroRegiao = determinarMacroRegiao(location);

    const matchedCERs = cersData
      .map((cer) => {
        let compatibilidade = 0;
        
        if (deficiencies.length === 0) {
          compatibilidade = 1;
        } else {
          const matchingDeficiencies = deficiencies.filter((def) => {
            const defLower = def.toLowerCase();
            const hasMatch = cer.especialidades.some((esp) => {
              const espLower = esp.toLowerCase();
              const match = (
                espLower.includes(defLower) ||
                defLower.includes(espLower) ||
                (defLower.includes('fisica') && espLower.includes('física')) ||
                (defLower.includes('física') && espLower.includes('física')) ||
                (defLower.includes('visual') && espLower.includes('visual')) ||
                (defLower.includes('auditiva') && espLower.includes('auditiva')) ||
                (defLower.includes('intelectual') && espLower.includes('intelectual')) ||
                (defLower.includes('ortopedica') && espLower.includes('ortopédica')) ||
                (defLower.includes('ortopédica') && espLower.includes('ortopédica')) ||
                ((defLower.includes('autista') || defLower.includes('autismo') || defLower.includes('espectro') || defLower.includes('tea')) && espLower.includes('intelectual'))
              );
              return match;
            });
            return hasMatch;
          });
          
          compatibilidade = matchingDeficiencies.length / deficiencies.length;
        }

        const distancia = calcularDistanciaReal(
          userCoordinates.lat,
          userCoordinates.lng,
          cer.localizacao.latitude,
          cer.localizacao.longitude,
        );

        const cerMacroRegiao = getMacroRegiaoFromCidade(cer.cidade);
        
        const bonusMacroRegiao = userMacroRegiao && cerMacroRegiao === userMacroRegiao ? 0.2 : 0;
        
        const scoreDistancia = Math.max(0, 1 - distancia / 200);
        const score = compatibilidade * 0.6 + scoreDistancia * 0.25 + bonusMacroRegiao;
        
        return {
          cer,
          score,
          distancia: Math.round(distancia * 10) / 10,
          compatibilidade,
          macroRegiao: cerMacroRegiao ?? undefined,
        };
      })
      .filter((result) => {
        const shouldShow = result.compatibilidade > 0 || deficiencies.length === 0;
        return shouldShow;
      })
      .sort((a, b) => {
        if (userMacroRegiao) {
          const aSameMacro = a.macroRegiao === userMacroRegiao;
          const bSameMacro = b.macroRegiao === userMacroRegiao;
          if (aSameMacro && !bSameMacro) return -1;
          if (!aSameMacro && bSameMacro) return 1;
        }
        return b.score - a.score;
      });

    setResults(matchedCERs);
    setLoading(false);
  }, [deficiencies, userCoordinates, location]);

  if (showFlow[0] && showFlow[1]) {
    return <Flow setShowFlow={setShowFlow} cerId={showFlow[1]} />;
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Calculando distâncias e compatibilidade...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full">
      <Card className="border-2 border-[var(--cor-bg-1)] shadow-2xl max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-[var(--cor-bg-1)] font-bold">
            Resultados da Busca
          </CardTitle>
          <CardDescription className="text-2xl">
            CERs ordenados por compatibilidade e proximidade
          </CardDescription>

          <div className="mt-3 p-3 bg-[var(--cor-bg-1)]/10 rounded-lg border border-[var(--cor-bg-1)]/30">
            <p className="text-xl text-muted-foreground">
              <span className="font-semibold text-[var(--cor-bg-1)]">Busca:</span> {deficiencies.join(", ")} | {ageGroup}
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-2xl mb-3 text-[var(--cor-bg-1)]">
              CER{results.length !== 1 ? "s" : ""} Recomendado{results.length !== 1 ? "s:" : ":"}
            </h3>

            {results.length === 0 ? (
              <div className="text-center p-6 text-muted-foreground border-2 border-dashed border-[var(--cor-bg-1)]/50 rounded-lg">
                <p>Nenhum CER encontrado para as deficiências selecionadas.</p>
                <p className="text-sm mt-2">
                  Tente ajustar os filtros ou entre em contato conosco.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {results.slice(0, 5).map((result, index) => (
                  <Card
                    key={result.cer.id}
                    className="border-2 border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)] hover:shadow-lg transition-all"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="bg-[var(--cor-bg-1)] text-white px-3 py-1 rounded-full text-lg font-bold">
                            #{index + 1}
                          </span>
                          <h4 className="font-bold text-2xl text-[var(--cor-bg-1)]">
                            {result.cer.nome}
                          </h4>
                        </div>
                        <span className="px-3 py-1 rounded-full text-lg bg-blue-100 text-blue-800 font-medium">
                          {result.distancia} km
                        </span>
                      </div>

                      <p className="text-xl text-muted-foreground mb-3 pl-11">
                        {result.cer.endereco.rua}, {result.cer.endereco.numero} – {result.cer.endereco.bairro}, {result.cer.cidade}
                      </p>

                      <div className="pl-11 flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {result.cer.especialidades.map((esp, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-[var(--cor-bg-1)]/20 text-[var(--cor-bg-1)] rounded-lg text-lg font-bold"
                            >
                              {esp}
                            </span>
                          ))}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[var(--cor-bg-1)] hover:text-white hover:bg-[var(--cor-bg-1)] transition-all text-xl"
                          onClick={() => setShowFlow([true, result.cer.id])}
                        >
                          Saiba mais
                          <ArrowRight className="w-8 h-8 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </CardContent>

        <CardContent className="flex justify-between border-t pt-4 p-4">
          <Button
            variant="outline"
            onClick={onBack}
            size="lg"
            className="px-8 py-5 text-2xl border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)] hover:text-white"
          >
            Voltar
          </Button>
          <Button
            onClick={onFinish}
            size="lg"
            className="px-8 py-5 text-2xl min-w-[160px] border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)]"
          >
            Finalizar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
