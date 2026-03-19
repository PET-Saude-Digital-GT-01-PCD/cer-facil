export interface CerType {
  id: string;
  desc: string;
}

export const cerTypesData: CerType[] = [
  {
    id: "II",
    desc: "Atende dois tipos de deficiências.",
  },
  {
    id: "III",
    desc: "Atende três tipos de deficiências.",
  },
  {
    id: "IV",
    desc: "Maior complexidade: Auditiva, Física, Intelectual e Visual.",
  },
];

export const cerImageCover =
  "https://conclinica.com.br/wp-content/uploads/2025/09/atendimento-humanizado-na-saude.png";
