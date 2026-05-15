import cersData from "@/data/cers.json";
import macrosData from "@/data/macro.json";
import microsData from "@/data/micro.json";
import servicosData from "@/data/servicos.json";

interface MicroRegiao {
  id: number;
  regiao: string;
  municipios: string[];
}

interface MacroRegiao {
  id: number;
  nome: string;
  cerReferenciaId: number;
  regiao: string[];
}

interface Servico {
  id: number;
  nome: string;
  municipios: string[];
}

export interface MatchingResult {
  cer: (typeof cersData)[0];
  compatibilidade: number;
  nivelPrioridade: number;
}

export function normalizeString(str: string): string {
  if (!str) return "";
  return str
    .split(",")[0]
    ?.split("-")[0]
    ?.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim() ?? "";
}

export function obterRegioesDaCidade(nomeCidade: string): {
  micro: MicroRegiao | null;
  macro: MacroRegiao | null;
} {
  const cidadeNormal = normalizeString(nomeCidade);

  const micro = (microsData as MicroRegiao[]).find((m) =>
    m.municipios.some((mun) => normalizeString(mun) === cidadeNormal)
  ) ?? null;

  if (!micro) return { micro: null, macro: null };

  const macro = (macrosData as MacroRegiao[]).find((m) =>
    m.regiao.includes(micro.regiao)
  ) ?? null;

  return { micro, macro };
}

export function matchCers(
  deficiencies: string[],
  location: string
): MatchingResult[] {
  const userLocationNormal = normalizeString(location);
  const { micro: userMicro, macro: userMacro } = obterRegioesDaCidade(location);

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
            const isTEA =
              defLower.includes("autista") ||
              defLower.includes("autismo") ||
              defLower.includes("espectro") ||
              defLower.includes("tea");
            return (
              espLower.includes(defLower) ||
              defLower.includes(espLower) ||
              (isTEA && espLower.includes("intelectual"))
            );
          });
        });
        compatibilidade = matchingDeficiencies.length / deficiencies.length;
      }

      let nivelPrioridade = 4;

      const cerServico = (servicosData as Servico[]).find(
        (s) => Number(s.id) === Number(cer.id)
      );
      const atendeMunicipio = cerServico?.municipios.some(
        (m) => normalizeString(m) === userLocationNormal
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
    .filter(
      (r) =>
        (r.compatibilidade > 0 || deficiencies.length === 0) &&
        r.nivelPrioridade !== 4
    );

  if (matchedCERs.length === 0) return [];

  const melhorNivel = Math.min(...matchedCERs.map((c) => c.nivelPrioridade));

  if (melhorNivel === 3 && userMacro) {
    const cerReferencia = cersData.find((c) => c.id === userMacro.cerReferenciaId);
    return cerReferencia
      ? [{ cer: cerReferencia, compatibilidade: 1, nivelPrioridade: 3 }]
      : [];
  }

  return matchedCERs.filter((c) => c.nivelPrioridade === melhorNivel);
}
