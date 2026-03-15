import { Accessibility, Ear, Eye, Brain, LucideIcon } from "lucide-react";
import cersJson from "@/data/cers.json";

export interface DadosCers {
  id: number;
  nome: string;
  especialidades: string[];
  cidade: string;
}

export interface FilterOption {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const filterOptionsData: FilterOption[] = [
  { id: "Física", label: "Física", icon: Accessibility },
  { id: "Auditiva", label: "Auditiva", icon: Ear },
  { id: "Visual", label: "Visual", icon: Eye },
  { id: "Intelectual", label: "Intelectual", icon: Brain },
];

export const cersData: DadosCers[] = cersJson as DadosCers[];

// --- FUNÇÕES UTILITÁRIAS ---
export function toTitleCase(text: string): string {
  if (!text) return "";

  const romanNumerals = ["II", "III", "IV"];

  return text
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (romanNumerals.includes(word.toUpperCase())) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const normalizeText = (text: string): string =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export const getFilterFromSpecialty = (specialty: string): string | null => {
  const normalized = normalizeText(specialty);

  if (normalized.includes("audit")) return "Auditiva";
  if (normalized.includes("visual")) return "Visual";
  if (normalized.includes("intelect")) return "Intelectual";
  if (/f.*sica/.test(normalized) || normalized.includes("fisica")) {
    return "Física";
  }

  return null;
};
