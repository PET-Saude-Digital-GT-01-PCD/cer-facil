import {
  Accessibility,
  Ear,
  Eye,
  Brain,
  Puzzle,
  LucideIcon,
} from "lucide-react";

export interface DeficiencyType {
  id: string; // Adicionado um ID único para evitar o uso de index (idx) como key
  title: string;
  text: string;
  icon: LucideIcon;
}

export const deficienciesData: DeficiencyType[] = [
  {
    id: "fisica",
    title: "Deficiência Física",
    icon: Accessibility,
    text: "Alterações no corpo que podem comprometer a mobilidade ou a coordenação.",
  },
  {
    id: "auditiva",
    title: "Deficiência Auditiva",
    icon: Ear,
    text: "Perda parcial ou total da audição, podendo exigir aparelhos auditivos.",
  },
  {
    id: "visual",
    title: "Deficiência Visual",
    icon: Eye,
    text: "Desde a baixa visão até a cegueira total, envolvendo apoios como Braille.",
  },
  {
    id: "intelectual",
    title: "Deficiência Intelectual",
    icon: Brain,
    text: "Dificuldades no aprendizado e na compreensão de tarefas do dia a dia.",
  },
  {
    id: "tea",
    title: "TEA (Autismo)",
    icon: Puzzle,
    text: "Forma diferente de o cérebro lidar com informações, afetando interação e percepção.",
  },
];
