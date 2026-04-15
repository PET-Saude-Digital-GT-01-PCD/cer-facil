import { useMemo, useState } from "react";
import {
  MapPin,
  ArrowRight,
  Filter,
  X,
  Accessibility,
  Ear,
  Eye,
  Brain,
  type LucideIcon,
} from "lucide-react";

import Flow from "@/components/user-flow/Flow.tsx";
import cersJson from "@/data/cers.json";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface DadosCers {
  id: number;
  nome: string;
  especialidades: string[];
  cidade: string;
}

interface FilterOption {
  id: string;
  label: string;
  icon: LucideIcon;
}

const filterOptionsData: FilterOption[] = [
  { id: "Física", label: "Física", icon: Accessibility },
  { id: "Auditiva", label: "Auditiva", icon: Ear },
  { id: "Visual", label: "Visual", icon: Eye },
  { id: "Intelectual", label: "Intelectual", icon: Brain },
];

const cersData: DadosCers[] = cersJson as DadosCers[];

function toTitleCase(text: string): string {
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

const getFilterFromSpecialty = (specialty: string): string | null => {
  const normalized = normalizeText(specialty);

  if (normalized.includes("audit")) return "Auditiva";
  if (normalized.includes("visual")) return "Visual";
  if (normalized.includes("intelect")) return "Intelectual";
  if (/f.*sica/.test(normalized) || normalized.includes("fisica")) {
    return "Física";
  }

  return null;
};

interface CersCardsProps {
  showFlow: [boolean, number | null];
  setShowFlow: (val: [boolean, number | null]) => void;
}

export default function CersCards({ showFlow, setShowFlow }: CersCardsProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleScrollToSection = () => {
    const section = document.getElementById("flow");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCardClick = (id: number) => {
    setShowFlow([true, id]);
    setTimeout(handleScrollToSection, 100);
  };

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((item) => item !== filterId)
        : [...prev, filterId],
    );
  };

  const clearFilters = () => setActiveFilters([]);

  const filteredCers = useMemo(() => {
    if (activeFilters.length === 0) return cersData;

    return cersData.filter((cer) => {
      const cerFilters = new Set<string>();

      for (const especialidade of cer.especialidades) {
        const mappedFilter = getFilterFromSpecialty(especialidade);
        if (mappedFilter) cerFilters.add(mappedFilter);
      }

      return activeFilters.every((filter) => cerFilters.has(filter));
    });
  }, [activeFilters]);

  const fixos = filteredCers.slice(0, 6);
  const restantes = filteredCers.slice(6);

  if (showFlow[0] && showFlow[1] !== null) {
    return <Flow setShowFlow={setShowFlow} cerId={showFlow[1] as number} />;
  }

  return (
    <section
      aria-labelledby="cards"
      id="cers-card"
      className="min-h-screen py-24 px-8 relative flex align-items-center bg-[--var(bg-cor-1)]" >
      <div className="mx-auto max-w-6xl w-full">

        <header className="text-left mb-8">
          <h2 id="cards" className="font-bold text-4xl mb-4 text-white">
            Rede Estadual de Reabilitação da Paraíba
          </h2>
          <img src="C:\Users\Davi\Desktop\cer-facil\src\assets\images\paraiba-flag\paraiba-flag.svg" alt="" />
          <div className="w-24 h-1.5 bg-white rounded-full"></div>
        </header>

        <div className="bg-white p-6 rounded-2xl shadow-sm mb-10">
          <div
            aria-label="filtro por tipo de deficiência"
            className="flex items-center gap-2 mb-4 text-black font-semibold uppercase text-sm tracking-wider"
          >
            <Filter size={24} />
            <span className="text-2xl">Filtrar por deficiência:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {filterOptionsData.map((option) => {
              const Icon = option.icon;
              const isActive = activeFilters.includes(option.id);

              return (
                <button
                  role="checkbox"
                  aria-checked={isActive}
                  key={option.id}
                  onClick={() => toggleFilter(option.id)}
                  className={`focus-within:border-10 focus-within:border-[var(--cor-destaque)] cursor-pointer flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xl transition-all duration-200 border-2 
                    ${isActive
                      ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)] text-white shadow-md"
                      : "bg-white border-[var(--cor-bg-1)]/30 text-[var(--cor-bg-1)] hover:border-[var(--cor-bg-1)]"
                    }`}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  {option.label}
                  {isActive && (
                    <X size={14} className="ml-1" aria-hidden="true" />
                  )}
                </button>
              );
            })}

            {activeFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] ml-2 text-slate-500 hover:text-red-500 text-lg font-medium transition-colors"
              >
                Limpar tudo
              </button>
            )}
          </div>
        </div>

        {filteredCers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fixos.map((cer) => (
              <CerCard
                key={cer.id}
                cer={cer}
                onClick={() => handleCardClick(cer.id)}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-slate-300 bg-white/5 rounded-xl border-2 border-dashed border-white/20 shadow-sm">
            Nenhuma unidade encontrada para essa combinação de filtros.
          </div>
        )}

        {restantes.length > 0 && (
          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="grid-restante" className="border-none">
              <AccordionContent className="overflow-visible">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
                  {restantes.map((cer) => (
                    <CerCard
                      key={cer.id}
                      cer={cer}
                      onClick={() => handleCardClick(cer.id)}
                    />
                  ))}
                </div>
              </AccordionContent>

              <div className="flex justify-center mt-12">
                <AccordionTrigger
                  className="text-2xl flex gap-3 items-center bg-white text-[var(--cor-bg-1)] px-8 py-4 font-bold transition-all duration-200 border-2 border-[var(--cor-bg-1)]/30 rounded-full hover:border-[var(--cor-bg-1)] data-[state=open]:hidden shadow-lg [&>svg]:w-6 [&>svg]:h-6 
             focus-visible:ring-[10px] focus-visible:ring-[var(--cor-destaque)] focus-visible:ring-offset-2 outline-none"
                >
                  Ver todas as unidades
                </AccordionTrigger>
              </div>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </section>
  );
}

function CerCard({ cer, onClick }: { cer: DadosCers; onClick: () => void }) {
  return (
    <button
      aria-label={`CER ${cer.nome}, localizado em ${cer.cidade}, especializado em reabilitação ${cer.especialidades.join(", ")}, clique para ver como conseguir atendimento`}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] p-6 rounded-2xl shadow-xl bg-white flex flex-col transition-all hover:shadow-2xl hover:-translate-y-2 h-full min-h-[220px] cursor-pointer group focus:outline-none focus:ring-4 focus:ring-[var(--cor-bg-1)]/50"
    >
      <div className="flex-grow flex flex-col">
        <span
          aria-hidden="true"
          className="font-bold text-2xl text-black mb-4 leading-tight group-hover:text-[var(--cor-bg-1)] transition-colors text-start"
        >
          {cer.nome}
        </span>

        <div className="flex items-center text-black mb-6 mt-auto font-semibold">
          <MapPin className="w-6 h-6 mr-1.5 flex-shrink-0 text-[var(--cor-bg-1)]" />
          <span className="text-2xl">{cer.cidade}</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
        <div className="flex flex-wrap gap-2 flex-1 pr-3">
          {cer.especialidades.map((especialidade, index) => (
            <span
              key={`${cer.id}-esp-${index}`}
              className="px-3 py-1 border-2 border-[var(--cor-bg-1)]/30 text-[var(--cor-bg-1)] rounded-full font-bold text-2xl inline-block"
            >
              {especialidade}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
