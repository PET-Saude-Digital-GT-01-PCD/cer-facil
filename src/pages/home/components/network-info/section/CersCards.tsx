import { Button } from "@/components/ui/button";
import CERS from "@/data/cers.json";
import Flow from "../../user-flow/Flow";
import { MapPin, ArrowRight, Map, Filter, X } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SimpleMap from "@/components/pb-map/SimpleMap";
import MapCaptions from "@/components/pb-map/MapCaptions";

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

export default function CersCards({ showFlow, setShowFlow }: CersCardsProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showMap, setShowMap] = useState(false);

  const handleScrollToSection = () => {
    const section = document.getElementById("flow");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (showFlow[0]) {
    return <Flow setShowFlow={setShowFlow} cerId={showFlow[1]} />;
  }

  const filterOptions = [
    { id: "Física", label: "Física" },
    { id: "Auditiva", label: "Auditiva" },
    { id: "Visual", label: "Visual" },
    { id: "Intelectual", label: "Intelectual" },
  ];

  const toggleFilter = (id: string) => {
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  const filteredCERS = activeFilters.length === 0
    ? CERS
    : (CERS as DadosCers[]).filter((cer) =>
        cer.especialidades.some((esp) => activeFilters.includes(esp))
      );

  const fixos = filteredCERS.slice(0, 6);
  const restantes = filteredCERS.slice(6);

  const renderCersRow = (cer: DadosCers) => {
    return (
      <div
        key={cer.id}
        className="p-6 rounded-2xl shadow-xl bg-white flex flex-col transition-all hover:shadow-2xl hover:-translate-y-2 h-full min-h-[220px]"
      >
        <div className="flex-grow flex flex-col">
          <h3 className="font-bold text-xl text-slate-900 mb-4 leading-tight">
            {toTitleCase(cer.nome)}
          </h3>

          <div className="flex items-center text-slate-500 mb-6 mt-auto font-semibold">
            <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0 text-[var(--cor-bg-1)]" />
            <span className="text-sm">{cer.cidade}</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
          <div className="flex flex-wrap gap-2 flex-1 pr-3">
            {cer.especialidades.map((especialidade, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-[var(--cor-bg-1)]/30 text-[var(--cor-bg-1)] rounded-lg text-[12px] font-extrabold uppercase tracking-widest"
              >
                {especialidade}
              </span>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-[var(--cor-bg-1)] hover:text-white hover:bg-[var(--cor-bg-1)] rounded-full transition-all duration-300 flex-shrink-0 bg-slate-50"
            onClick={() => {
              setShowFlow([true, cer.id]);
              setTimeout(handleScrollToSection, 100);
            }}
          >
            <ArrowRight className="w-5 h-5" />
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

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm mb-8">
          <div className="flex items-center gap-2 mb-4 text-black font-semibold uppercase text-sm tracking-wider">
            <Filter size={18} />
            <span>Filtrar por Especialidade:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {filterOptions.map((option) => {
              const isActive = activeFilters.includes(option.id);
              return (
                <button
                  key={option.id}
                  onClick={() => toggleFilter(option.id)}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 border-2 ${
                    isActive
                      ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]/90 text-white shadow-md"
                      : "bg-white border-[var(--cor-bg-1)]/30 text-[var(--cor-bg-1)]/80 hover:border-[var(--cor-bg-1)] hover:text-[var(--cor-bg-1)]"
                  }`}
                >
                  {option.label}
                  {isActive && <X size={14} className="inline ml-2 mb-0.5" />}
                </button>
              );
            })}

            {activeFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="ml-2 text-slate-400 hover:text-red-500 text-sm font-medium transition-colors"
              >
                Limpar tudo
              </button>
            )}
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="map" className="border-none">
            <div className="flex justify-center mb-4">
              <AccordionTrigger
                onClick={() => setShowMap(!showMap)}
                className="flex gap-3 items-center text-white px-8 py-4 font-bold transition-all border-2 border-white/40 rounded-full hover:bg-white hover:text-[var(--cor-bg-1)] shadow-lg"
              >
                <Map className="w-5 h-5" />
                {showMap ? "Ocultar Mapa" : "Ver Mapa Interativo"}
              </AccordionTrigger>
            </div>
            <AccordionContent>
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="h-[500px] rounded-xl overflow-hidden border-2 border-slate-100">
                  <SimpleMap interactive={true} />
                </div>
                <div className="mt-4">
                  <MapCaptions />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fixos.map((cer) => renderCersRow(cer))}
        </div>

        {restantes.length > 0 && (
          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="grid-restante" className="border-none">
              <AccordionContent className="overflow-visible">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {restantes.map((cer) => renderCersRow(cer))}
                </div>
              </AccordionContent>

              <div className="flex justify-center mt-12">
                <AccordionTrigger className="flex gap-3 items-center text-white px-8 py-4 font-bold transition-all border-2 border-white/40 rounded-full hover:bg-white hover:text-[var(--cor-bg-1)] data-[state=open]:hidden shadow-lg">
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
