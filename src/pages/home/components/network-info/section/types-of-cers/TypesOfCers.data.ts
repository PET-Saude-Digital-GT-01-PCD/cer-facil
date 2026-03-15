export interface CerType {
  id: string;
  desc: string;
}

export const cerTypesData: CerType[] = [
  {
    id: "II",
    desc: "Atendimento a duas modalidades de reabilitação.",
  },
  {
    id: "III",
    desc: "Organizado para oferecer três modalidades de reabilitação.",
  },
  {
    id: "IV",
    desc: "Maior complexidade: Auditiva, Física, Intelectual e Visual.",
  },
];

// Deixar a imagem aqui facilita a troca no futuro sem precisar mexer no componente
export const cerImageCover =
  "https://conclinica.com.br/wp-content/uploads/2025/09/atendimento-humanizado-na-saude.png";
