import { useMemo, useState } from "react";
import { MapPin, Filter, X, LayoutGrid, List, ArrowRight, Download } from "lucide-react";

import Flow from "@/components/user-flow/Flow.tsx";
import cersJson from "@/data/cers.json";

const escapeCSV = (value: string | null | undefined): string => {
  if (value == null) return "";
  const str = String(value);
  return str.includes(",") || str.includes('"') || str.includes("\n")
    ? `"${str.replace(/"/g, '""')}"`
    : str;
};

function exportCersToCSV(): void {
  const headers = [
    "ID", "Nome", "Cidade", "Especialidades", "Endereço", "Bairro", "CEP",
    "Horário", "Telefone", "E-mail", "Site", "Instagram",
    "Latitude", "Longitude", "Google Maps", "CNES",
  ];

  const rows = (cersJson as any[]).map((cer) => [
    escapeCSV(String(cer.id)),
    escapeCSV(cer.nome),
    escapeCSV(cer.cidade),
    escapeCSV(cer.especialidades.join("; ")),
    escapeCSV(`${cer.endereco.rua}, ${cer.endereco.numero}`),
    escapeCSV(cer.endereco.bairro),
    escapeCSV(cer.endereco.cep),
    escapeCSV(cer.horario.texto),
    escapeCSV(cer.telefone),
    escapeCSV(cer.email),
    escapeCSV(cer.site),
    escapeCSV(cer.instagram),
    escapeCSV(String(cer.localizacao.latitude)),
    escapeCSV(String(cer.localizacao.longitude)),
    escapeCSV(cer.localizacao.googleMapsUrl ?? ""),
    escapeCSV(String(cer.localizacao.cnes)),
  ]);

  const csv = "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "rede-estadual-reabilitacao-pb.csv";
  link.click();
  URL.revokeObjectURL(url);
}

import defAuditiva from "@/assets/images/disabillity-images/deficiencia_auditiva.png";
import defFisica from "@/assets/images/disabillity-images/deficiencia_fisica.png";
import defIntelectual from "@/assets/images/disabillity-images/deficiencia_intelectual.png";
import defVisual from "@/assets/images/disabillity-images/deficiencia_visual.png";
import simAutismo from "@/assets/images/disabillity-images/simbolo_autismo.png";

interface DadosCers {
  id: number;
  nome: string;
  especialidades: string[];
  cidade: string;
}

const filterOptionsData = [
  { id: "Física", label: "Física", icon: defFisica },
  { id: "Auditiva", label: "Auditiva", icon: defAuditiva },
  { id: "Visual", label: "Visual", icon: defVisual },
  { id: "Intelectual", label: "Intelectual", icon: defIntelectual },
  { id: "TEA", label: "TEA", icon: simAutismo },
];

const cersData: DadosCers[] = cersJson as DadosCers[];

const normalizeText = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const getFilterFromSpecialty = (specialty: string): string | null => {
  const n = normalizeText(specialty);
  if (n.includes("audit")) return "Auditiva";
  if (n.includes("visual")) return "Visual";
  if (n.includes("intelect")) return "Intelectual";
  if (n.includes("tea")) return "TEA";
  if (/f.*sica/.test(n) || n.includes("fisica")) return "Física";
  return null;
};

interface CersCardsProps {
  showFlow: [boolean, number | null];
  setShowFlow: (val: [boolean, number | null]) => void;
}

export default function CersCards({ showFlow, setShowFlow }: CersCardsProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleCardClick = (id: number) => {
    setShowFlow([true, id]);
    setTimeout(() => {
      document.getElementById("flow")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const toggleFilter = (filterId: string) =>
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId],
    );

  const filteredCers = useMemo(() => {
    if (activeFilters.length === 0) return cersData;
    return cersData.filter((cer) => {
      const cerFilters = new Set(
        cer.especialidades.map(getFilterFromSpecialty).filter(Boolean),
      );
      // TEA equivale a Intelectual para fins de filtro
      if (cerFilters.has("Intelectual")) cerFilters.add("TEA");
      return activeFilters.every((f) => cerFilters.has(f));
    });
  }, [activeFilters]);

  if (showFlow[0] && showFlow[1] !== null) {
    return <Flow setShowFlow={setShowFlow} cerId={showFlow[1] as number} />;
  }

  return (
    <section
      aria-labelledby="cards"
      id="cers-card"
      className="min-h-screen py-24 px-8 bg-[--var(bg-cor-1)]"
    >
      <div className="mx-auto max-w-6xl w-full">
        <header className="text-left mb-8">
          <div className="flex items-start justify-between gap-4">
            <h2 id="cards" className="font-bold text-4xl mb-4 text-white">
              Rede Estadual de Reabilitação da Paraíba
            </h2>
            <div className="flex items-center gap-2 bg-white/10 rounded-full p-1 shrink-0">
              <button
                onClick={() => setViewMode("grid")}
                aria-label="Visualizar em grade"
                aria-pressed={viewMode === "grid"}
                className={`p-2 rounded-full transition-all ${viewMode === "grid" ? "bg-white text-[var(--cor-bg-1)]" : "text-white hover:bg-white/20"}`}
              >
                <LayoutGrid size={22} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                aria-label="Visualizar em lista"
                aria-pressed={viewMode === "list"}
                className={`p-2 rounded-full transition-all ${viewMode === "list" ? "bg-white text-[var(--cor-bg-1)]" : "text-white hover:bg-white/20"}`}
              >
                <List size={22} />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-24 h-1.5 bg-white rounded-full"></div>
            <button
              onClick={exportCersToCSV}
              aria-label="Exportar planilha da rede estadual de reabilitação"
              className="flex items-center gap-2 bg-white text-[var(--cor-bg-1)] px-5 py-2.5 rounded-xl font-bold text-base hover:bg-white/90 transition-opacity focus-visible:ring-4 focus-visible:ring-[var(--cor-destaque)] focus-visible:outline-none"
            >
              <Download className="w-5 h-5" />
              Exportar planilha
            </button>
          </div>
        </header>

        <div className="bg-white p-6 rounded-2xl shadow-sm mb-10">
          <div className="flex items-center gap-2 mb-4 text-black font-semibold text-sm tracking-wider">
            <Filter size={24} />
            <span className="text-2xl">Filtrar por deficiência:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {filterOptionsData.map((option) => {
              const isActive = activeFilters.includes(option.id);
              return (
                <button
                  role="checkbox"
                  aria-checked={isActive}
                  key={option.id}
                  onClick={() => toggleFilter(option.id)}
                  className={`focus-visible:ring-4 focus-visible:ring-[var(--cor-destaque)] focus-visible:outline-none cursor-pointer flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xl transition-all duration-200 border-2 ${
                    isActive
                      ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)] text-white shadow-md"
                      : "bg-white border-[var(--cor-bg-1)]/30 text-[var(--cor-bg-1)] hover:border-[var(--cor-bg-1)]"
                  }`}
                >
                  <img
                    src={option.icon}
                    alt=""
                    aria-hidden="true"
                    className={`w-10 h-10 object-contain rounded-md transition-all duration-300 ${isActive ? "invert brightness-0" : ""}`}
                  />
                  {option.label}
                  {isActive && (
                    <X size={14} className="ml-1" aria-hidden="true" />
                  )}
                </button>
              );
            })}
            {activeFilters.length > 0 && (
              <button
                onClick={() => setActiveFilters([])}
                className="ml-2 text-slate-500 hover:text-red-500 text-lg font-medium transition-colors"
              >
                Limpar tudo
              </button>
            )}
          </div>
        </div>

        {filteredCers.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-4"
            }
          >
            {filteredCers.map((cer) => (
              <CerCard
                key={cer.id}
                cer={cer}
                viewMode={viewMode}
                onClick={() => handleCardClick(cer.id)}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-slate-300 bg-white/5 rounded-xl border-2 border-dashed border-white/20">
            Nenhuma unidade encontrada para essa combinação de filtros.
          </div>
        )}
      </div>
    </section>
  );
}

function CerCard({
  cer,
  onClick,
  viewMode,
}: {
  cer: DadosCers;
  onClick: () => void;
  viewMode: "grid" | "list";
}) {
  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-2xl shadow-md grid grid-cols-[1fr_auto_auto] items-center gap-6 px-6 py-5">
        <div className="min-w-0">
          <p className="font-bold text-xl text-[var(--cor-bg-1)] leading-tight mb-2">
            {cer.nome}
          </p>
          <div className="flex items-center gap-1 text-slate-600">
            <MapPin className="w-4 h-4 shrink-0 text-[var(--cor-bg-1)]" />
            <span className="text-lg">{cer.cidade}</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-end gap-2 w-[220px]">
          {cer.especialidades.map((esp, i) => (
            <span
              key={i}
              className="px-3 py-1 border-2 border-[var(--cor-bg-1)]/30 text-[var(--cor-bg-1)] rounded-full font-semibold text-base whitespace-nowrap"
            >
              {esp}
            </span>
          ))}
        </div>
        <button
          onClick={onClick}
          aria-label={`Saiba como se cadastrar no ${cer.nome}`}
          className="shrink-0 flex items-center gap-2 bg-[var(--cor-bg-1)] text-white px-5 py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity focus-visible:ring-4 focus-visible:ring-[var(--cor-destaque)] focus-visible:outline-none"
        >
          Saiba mais
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md flex flex-col p-6 h-full">
      <p className="font-bold text-xl text-[var(--cor-bg-1)] leading-tight mb-3">
        {cer.nome}
      </p>
      <div className="flex items-center gap-1 text-slate-600 mb-4">
        <MapPin className="w-4 h-4 shrink-0 text-[var(--cor-bg-1)]" />
        <span className="text-lg">{cer.cidade}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {cer.especialidades.map((esp, i) => (
          <span
            key={i}
            className="px-3 py-1 border-2 border-[var(--cor-bg-1)]/30 text-[var(--cor-bg-1)] rounded-full font-semibold text-base"
          >
            {esp}
          </span>
        ))}
      </div>
      <button
        onClick={onClick}
        aria-label={`Saiba como se cadastrar no ${cer.nome}`}
        className="mt-auto flex items-center justify-center gap-2 bg-[var(--cor-bg-1)] text-white px-5 py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity focus-visible:ring-4 focus-visible:ring-[var(--cor-destaque)] focus-visible:outline-none w-full"
      >
        Saiba mais
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
