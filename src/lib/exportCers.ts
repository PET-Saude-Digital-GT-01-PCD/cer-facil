import cersJson from "@/data/cers.json";

interface Cer {
  nome: string;
  especialidades: string[];
  cidade: string;
  telefone: string | null;
  email: string | null;
  site: string | null;
  instagram: string | null;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cep: string;
  };
  horario: {
    texto: string;
  };
  localizacao: {
    googleMapsUrl?: string;
    cnes: number;
  };
}

const escape = (value: string | null | undefined): string => {
  if (value == null) return "";
  const str = String(value);
  return str.includes(",") || str.includes('"') || str.includes("\n")
    ? `"${str.replace(/"/g, '""')}"`
    : str;
};

export function exportCersToCSV(): void {
  const cers = cersJson as Cer[];

  const headers = [
    "ID",
    "Nome",
    "Cidade",
    "Especialidades",
    "Endereço",
    "Bairro",
    "CEP",
    "Horário de Funcionamento",
    "Telefone",
    "E-mail",
    "Site",
    "Instagram",
    "Latitude",
    "Longitude",
    "Google Maps",
    "CNES",
  ];

  const rows = cers.map((cer) => [
    escape(String(cer.id)),
    escape(cer.nome),
    escape(cer.cidade),
    escape(cer.especialidades.join("; ")),
    escape(`${cer.endereco.rua}, ${cer.endereco.numero}`),
    escape(cer.endereco.bairro),
    escape(cer.endereco.cep),
    escape(cer.horario.texto),
    escape(cer.telefone),
    escape(cer.email),
    escape(cer.site),
    escape(cer.instagram),
    escape(String(cer.localizacao.latitude)),
    escape(String(cer.localizacao.longitude)),
    escape(cer.localizacao.googleMapsUrl ?? ""),
    escape(String(cer.localizacao.cnes)),
  ]);

  const csv =
    "\uFEFF" + // BOM para Excel reconhecer UTF-8
    [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "rede-estadual-reabilitacao-pb.csv";
  link.click();
  URL.revokeObjectURL(url);
}
