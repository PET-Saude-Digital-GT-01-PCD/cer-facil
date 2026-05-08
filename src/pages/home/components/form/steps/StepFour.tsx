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
import servicosData from "@/data/servicos.json";
import Flow from "@/components/user-flow/Flow";

interface StepFourProps {
  deficiencies?: string[];
  ageGroup?: string;
  location?: string;
  onBack: () => void;
  onFinish: () => void;
}

interface MatchingResult {
  cer: (typeof cersData)[0];
  compatibilidade: number;
  nivelPrioridade: number;
}

export default function StepFour({
  deficiencies = [],
  ageGroup = "",
  location = "",
  onBack,
  onFinish,
}: StepFourProps) {
  const [results, setResults] = useState<MatchingResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFlow, setShowFlow] = useState<[boolean, number | null]>([
    false,
    null,
  ]);

  const normalizeString = (str: string) => {
    if (!str) return "";
    return str
      .split(",")[0]?.split("-")[0]
      ?.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  };

  const handleKeyDown = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setShowFlow([true, id]);
    }
  };

  function obterRegioesDaCidade(nomeCidade: string) {
    const cidadeNormal = normalizeString(nomeCidade);

    const micro = microsData.find((m: any) =>
      m.municipios.some((mun: string) => normalizeString(mun) === cidadeNormal)
    );

    if (!micro) return { micro: null, macro: null };

    const macro = macrosData.find((m: any) =>
      m.regiao?.includes(micro.regiao)
    );

    return { micro, macro };
  }

  useEffect(() => {
    if (!location) {
      setLoading(false);
      return;
    }

    const userLocationNormal = normalizeString(location ?? "");
    const { micro: userMicro, macro: userMacro } = obterRegioesDaCidade(location ?? "");

    const matchedCERs = cersData
      .map((cer) => {
        let compatibilidade = 0;
        if (deficiencies.length === 0) {
          compatibilidade = 1;
        } else {
          const matchingDeficiencies = deficiencies.filter((def) => {
            const defLower = normalizeString(def);
            return cer.especialidades.some((esp) => {
              const espLower = normalizeString(esp);
              return (
                (espLower && defLower && espLower.includes(defLower)) ||
                (defLower && espLower && defLower.includes(espLower)) ||
                (
                  defLower &&
                  (
                    defLower.includes("autista") ||
                    defLower.includes("autismo") ||
                    defLower.includes("espectro") ||
                    defLower.includes("tea")
                  ) &&
                  espLower &&
                  espLower.includes("intelectual")
                )
              );
            });
          });
          compatibilidade = matchingDeficiencies.length / deficiencies.length;
        }

        let nivelPrioridade = 4;

        const cerServico = servicosData.find(
          (s: any) => Number(s.id) === Number(cer.id)
        );
        const atendeMunicipio = cerServico?.municipios?.some(
          (m: string) => normalizeString(m) === userLocationNormal
        );

        if (atendeMunicipio) {
          nivelPrioridade = 1;
        } else {
          const { micro: cerMicro, macro: cerMacro } = obterRegioesDaCidade(cer.cidade ?? "");

          if (cerMicro && userMicro && cerMicro.regiao === userMicro.regiao) {
            nivelPrioridade = 2;
          } else if (cerMacro && userMacro && cerMacro.id === userMacro.id) {
            nivelPrioridade = 3;
          }
        }

        return { cer, compatibilidade, nivelPrioridade };
      })
      .filter((result) => {
        const atendeDeficiencia = result.compatibilidade > 0 || deficiencies.length === 0;
        const dentroDaMacro = result.nivelPrioridade !== 4;
        return atendeDeficiencia && dentroDaMacro;
      });

    if (matchedCERs.length > 0) {
      const melhorNivel = Math.min(...matchedCERs.map(c => c.nivelPrioridade));

      if (melhorNivel === 3 && userMacro) {
        const cerReferenciaId = (userMacro as any)["cerReferenciaId"];
        const cerReferencia = cersData.find((c) => c.id === cerReferenciaId);

        if (cerReferencia) {
          setResults([{ cer: cerReferencia, compatibilidade: 1, nivelPrioridade: 3 }]);
        } else {
          setResults([]);
        }
      } else {
        setResults(matchedCERs.filter(c => c.nivelPrioridade === melhorNivel));
      }
    } else {
      setResults([]);
    }

    setLoading(false);
  }, [deficiencies, location]);

  if (showFlow[0] && showFlow[1]) {
    return <Flow setShowFlow={setShowFlow} cerId={showFlow[1]} />;
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Localizando os melhores CERs para sua região...</p>
        </CardContent>
      </Card>
    );
  }

  const getBadgeCobertura = (nivel: number) => {
    switch (nivel) {
      case 1: return { text: "Pertence a sua região", color: "bg-[var(--cor-bg-1)]/10 text-[var(--cor-bg-1)] border border-[var(--cor-bg-1)]/30" };
      case 2: return { text: "Pertence a Micro-região", color: "bg-[var(--cor-bg-1)]/10 text-[var(--cor-bg-1)] border border-[var(--cor-bg-1)]/30" };
      case 3: return { text: "CER de Referência", color: "bg-[var(--cor-bg-1)]/10 text-[var(--cor-bg-1)] border border-[var(--cor-bg-1)]/30" };
      default: return { text: "", color: "" };
    }
  };

  return (
    <div className="w-full">
      <Card className="border-2 border-[var(--cor-bg-1)] shadow-2xl max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-[var(--cor-bg-1)] font-bold">
            <h2>
              Resultados
            </h2>
          </CardTitle>
          <CardDescription className="text-2xl">
            Exibindo CERs na sua área de abrangência geográfica
          </CardDescription>
          <div aria-hidden="true" className="mt-3 flex flex-wrap gap-2">
            {deficiencies.length > 0 && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--cor-bg-1)]/10 border border-[var(--cor-bg-1)]/30 text-sm font-medium text-[var(--cor-bg-1)]">
                <span className="text-xs text-muted-foreground font-normal">Deficiência:</span>
                {deficiencies.join(", ")}
              </span>
            )}
            {ageGroup && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--cor-bg-1)]/10 border border-[var(--cor-bg-1)]/30 text-sm font-medium text-[var(--cor-bg-1)]">
                <span className="text-xs text-muted-foreground font-normal">Faixa etária:</span>
                {ageGroup.charAt(0).toUpperCase() + ageGroup.slice(1)}
              </span>
            )}
            {location && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--cor-bg-1)]/10 border border-[var(--cor-bg-1)]/30 text-sm font-medium text-[var(--cor-bg-1)]">
                <span className="text-xs text-muted-foreground font-normal">Localidade:</span>
                {location}
              </span>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {results.length === 0 ? (
            <div className="text-center p-10 border-2 border-dashed rounded-lg">
              <p className="text-xl">Nenhum CER encontrado para sua deficiência na sua Macro-região.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {results.map((result, index) => {
                const badge = getBadgeCobertura(result.nivelPrioridade);
                return (
                  <Card
                    aria-label={`Resultado ${index + 1}: ${result.cer.nome}, localizado na ${result.cer.endereco.rua}, número ${result.cer.endereco.numero}, cidade ${result.cer.cidade}. especializado em reabilitação ${result.cer.especialidades.join(", ")}. Clique para ver como conseguir atendimento.`}
                    tabIndex={0}
                    role="button"
                    onClick={() => setShowFlow([true, result.cer.id])}
                    onKeyDown={(e) => handleKeyDown(e, result.cer.id)}
                    key={result.cer.id}
                    className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] border-2 border-[var(--cor-bg-1)]/30 transition-all duration-200 hover:border-[var(--cor-bg-1)] hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                    <CardContent aria-hidden="true" className="p-5">
                      <div className="flex gap-3 items-center mb-2">
                        <span aria-label={`Resultado ${index + 1}`} className="bg-[var(--cor-bg-1)] text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                          {index + 1}
                        </span>
                        <h3 className="font-bold text-2xl text-[var(--cor-bg-1)]">{result.cer.nome}</h3>
                      </div>
                      <div className="pl-11 flex items-center gap-3 text-lg text-muted-foreground mb-4">
                        <p>{result.cer.endereco.rua}, {result.cer.endereco.numero} - {result.cer.cidade}</p>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${badge.color}`}>
                          {badge.text}
                        </span>
                      </div>
                      <div className="pl-11 flex justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                          {result.cer.especialidades.map((esp, i) => (
                            <span key={i} className="bg-gray-100 px-2 py-1 rounded text-xl font-medium">
                              {esp}
                            </span>
                          ))}
                        </div>
                        <Button
                          onClick={(e) => { e.stopPropagation(); setShowFlow([true, result.cer.id]); }}
                          size="lg"
                          className="ml-4 shrink-0 text-xl border-2 border-[var(--cor-bg-1)] bg-transparent text-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)] hover:text-white focus-visible:ring-[10px] focus-visible:ring-[var(--cor-destaque)] focus-visible:ring-offset-2 outline-none"
                        >
                          Saiba mais
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </CardContent>

        <CardContent className="flex justify-between border-t p-4">
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
            onClick={onFinish}
            size="lg"
            className="px-8 py-5 text-2xl border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)] hover:text-white 
             focus-visible:ring-[10px] focus-visible:ring-[var(--cor-destaque)] focus-visible:ring-offset-2 outline-none"
          >
            Finalizar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}