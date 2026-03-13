import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import CERS from "@/data/cers.json";
import Flow from "../../user-flow/Flow";
import { MapPin, ArrowRight, Filter, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Accessibility, Ear, Eye, Brain } from "lucide-react";

const icons = [
  {
    title: "Física",
    icon: <Accessibility className="w-5 h-5" />,
  },
  {
    title: "Auditiva",
    icon: <Ear className="w-5 h-5" />,
  },
  {
    title: "Visual",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    title: "Intelectual",
    icon: <Brain className="w-5 h-5" />,
  },
];

interface DadosCers {
  id: number;
  nome: string;
  especialidades: string[];
  cidade: string;
}

interface CersCardsProps {
  showFlow: [boolean, number | null];
  setShowFlow: (val: [boolean, number | null]) => void;
}

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

const FILTER_OPTIONS = ["Física", "Auditiva", "Visual", "Intelectual"] as const;

type FilterOption = (typeof FILTER_OPTIONS)[number];

const normalizeText = (text: string): string =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const getFilterFromSpecialty = (specialty: string): FilterOption | null => {
  const normalized = normalizeText(specialty);

  if (normalized.includes("audit")) return "Auditiva";
  if (normalized.includes("visual")) return "Visual";
  if (normalized.includes("intelect")) return "Intelectual";
  if (/f.*sica/.test(normalized) || normalized.includes("fisica")) {
    return FILTER_OPTIONS[0];
  }

  return null;
};

export default function CersCards({ showFlow, setShowFlow }: CersCardsProps) {
  const [activeFilters, setActiveFilters] = useState<FilterOption[]>([]);

  const handleScrollToSection = () => {
    const section = document.getElementById("flow");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (showFlow[0]) {
    return <Flow setShowFlow={setShowFlow} cerId={showFlow[1]} />;
  }

  const toggleFilter = (filter: FilterOption) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  const filteredCers = useMemo(() => {
    const allCers = CERS as DadosCers[];
    if (activeFilters.length === 0) return allCers;

    return allCers.filter((cer) =>
      cer.especialidades.some((especialidade) => {
        const mappedFilter = getFilterFromSpecialty(especialidade);
        return mappedFilter ? activeFilters.includes(mappedFilter) : false;
      })
    );
  }, [activeFilters]);

  const fixos = filteredCers.slice(0, 6);
  const restantes = filteredCers.slice(6);

  const renderCersRow = (cer: DadosCers) => {
    return (
      <div
        aria-label={`CER ${cer.nome}, localizado em ${cer.cidade}, especializado em reabilitação ${cer.especialidades.join(", ")}, clique para ver como conseguir atendimento`}
        tabIndex={0}
        onClick={() => {
          setShowFlow([true, cer.id]);
          setTimeout(handleScrollToSection, 100);
        }}
        key={cer.id}
        className="p-6 rounded-2xl shadow-xl bg-white flex flex-col transition-all hover:shadow-2xl hover:-translate-y-2 h-full min-h-[220px]"
      >
        <div className="flex-grow flex flex-col">
          <h2
            className="font-bold text-2xl text-slate-900 mb-4 leading-tight ">
            {toTitleCase(cer.nome)}
          </h2>

          <div className="flex items-center text-slate-500 mb-6 mt-auto font-semibold">
            <MapPin className="w-6 h-6 mr-1.5 flex-shrink-0 text-[var(--cor-bg-1)]" />
            <span className="text-xl">{cer.cidade}</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
          <div className="flex flex-wrap gap-2 flex-1 pr-3">
            {cer.especialidades.map((especialidade, index) => (
              <span
                className="px-3 py-1 border-2 border-[var(--cor-bg-1)]/30 text-[var(--cor-bg-1)] rounded-full font-bold text-[16px] inline-block"
              >
                {especialidade}
              </span>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-[var(--cor-bg-1)] hover:text-white hover:bg-[var(--cor-bg-1)] rounded-full transition-all duration-300 flex-shrink-0 bg-slate-50"
          >
            <ArrowRight className="w-10 h-10" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section
      id="cers-card"
      className="min-h-screen py-24 px-8 relative flex align-items-center"
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="text-left mb-8">
          <h2 className="font-bold text-4xl mb-4 text-white">
            Rede Estadual de Reabilitação
          </h2>
          <div className="w-24 h-1.5 bg-white rounded-full"></div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm mb-10">
          <div className="flex items-center gap-2 mb-4 text-slate-900 font-semibold uppercase text-sm tracking-wider">
            <Filter size={24} />
            <span className="text-xl">Filtrar por deficiência:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeFilters.includes(option);
              return (
                <button
                  key={option}
                  onClick={() => toggleFilter(option)}
                  className={`
                  px-6 py-2.5 rounded-full font-bold text-xl transition-all duration-200 
                  border-2 focus:ring-4 focus:ring-[var(--cor-bg-1)]/30
                  flex items-center justify-center gap-2 
                  ${isActive
                      ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)] text-white shadow-md shadow-blue-100"
                      : "bg-white border-[var(--cor-bg-1)] text-[var(--cor-bg-1)] hover:bg-slate-50"
                    }
                  `}
                >
                  <span className="flex items-center justify-center gap-2">
                    <span aria-hidden="true">
                      {icons.find((icon) => icon.title === option)?.icon}
                    </span>

                    {option}

                    {isActive && (
                      <X
                        size={14}
                        className="ml-1"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </button>
              );
            })}

            {activeFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="ml-2 text-slate-500 hover:text-red-500 text-lg font-medium transition-colors"
              >
                Limpar tudo
              </button>
            )}
          </div>
        </div>

        {filteredCers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fixos.map((cer) => renderCersRow(cer))}
          </div>
        ) : (
          <div className="py-12 text-center text-slate-300 bg-white/10 rounded-xl border-2 border-dashed border-white/40 shadow-sm">
            Nenhuma unidade encontrada para essa combinação de filtros.
          </div>
        )}

        {restantes.length > 0 && (
          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="grid-restante" className="border-none">
              <AccordionContent className="overflow-visible">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {restantes.map((cer) => renderCersRow(cer))}
                </div>
              </AccordionContent>

              <div className="flex justify-center mt-12">
                <AccordionTrigger className="text-xl flex gap-3 items-center text-white px-8 py-4 font-bold transition-all border-2 border-white/40 rounded-full hover:bg-white hover:text-[var(--cor-bg-1)] data-[state=open]:hidden shadow-lg [&>svg]:w-6 [&>svg]:h-6">
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
