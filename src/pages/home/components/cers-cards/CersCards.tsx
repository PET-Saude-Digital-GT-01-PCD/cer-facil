import React from "react";
import { Button } from "@/components/ui/button";
import CERS from "@/data/cers.json";
import Flow from "../user-flow/Flow";
import {
  ChevronRight,
  Landmark,
  Accessibility,
  Ear,
  Eye,
  Brain,
  Activity
} from "lucide-react";
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

interface CersCardsProps {
  showFlow: [boolean, number | null];
  setShowFlow: (val: [boolean, number | null]) => void;
}

export function toTitleCase(text: string): string {
  if (!text) return "";
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const especialidadeIconMap: { [key: string]: React.ElementType } = {
  "Auditiva": Ear,
  "Visual": Eye,
  "Intelectual": Brain,
  "Física": Accessibility,
  "default": Landmark
};

export default function CersCards({ showFlow, setShowFlow }: CersCardsProps) {
  if (showFlow[0]) {
    return <Flow setShowFlow={setShowFlow} cerId={showFlow[1]} />;
  }

  const fixos = (CERS as DadosCers[]).slice(0, 4);
  const restantes = (CERS as DadosCers[]).slice(4);

  const renderCersRow = (cer: DadosCers) => {
    return (
      <div key={cer.id} className="group relative bg-white p-5 rounded-2xl shadow-xl border border-blue-50 
      flex flex-col transition-all hover:shadow-2xl hover:-translate-y-1 w-full min-h-[240px]">

        <h3 className="text-sm text-gray-900 leading-tight uppercase min-h-[60px] flex items-start">
          {toTitleCase(cer.nome)}
        </h3>

        <div className="flex flex-row items-center gap-4 w-full mt-4">

          <div className="grid grid-cols-2 gap-2 flex-shrink-0">
            {cer.especialidades.map((especialidade, index) => {
              const Icon = especialidadeIconMap[especialidade] || especialidadeIconMap["default"];
              return (
                <Icon
                  key={index}
                  className="h-6 w-6 text-[var(--cor-3)] opacity-90 group-hover:opacity-100 transition-opacity"
                  strokeWidth={1.5}
                />
              );
            })}
          </div>

          <div className="border-l-4 pl-3 border-[var(--cor-1)] space-y-2 w-full">
            <div className="min-h-[40px]">
              <p className="text-[10px] font-bold text-[var(--cor-1)] uppercase tracking-widest">
                Especialidades
              </p>
              <p className="text-[11px] text-gray-600 line-clamp-2 leading-tight">
                {cer.especialidades.join(", ")}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-[var(--cor-1)] uppercase tracking-widest mb-1">
                Cidade
              </p>
              <span className="inline-block bg-[var(--cor-1)] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                {cer.cidade}
              </span>
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          className="absolute bottom-3 right-2 p-2 h-auto bg-transparent hover:bg-gray-50 transition-all opacity-100 cursor-pointer"
          onClick={() => setShowFlow([true, cer.id])}
        >
          <img
            src="https://www.svgrepo.com/show/425982/right-arrow.svg"
            alt="Seta"
            className="w-5 h-5 block"
            style={{ filter: 'grayscale(100%)' }}
          />
        </Button>
      </div>
    );
  };

  return (
    <section id="cers-card" className="py-20 overflow-hidden bg-[var(--cor-1)] w-screen relative left-[calc(-50vw+50%)]">
      <div className="container mx-auto px-6 max-w-[1400px]">

        <div className="flex items-center w-full mb-16 gap-6">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase whitespace-nowrap shrink-0">
            Rede Estadual de Reabilitação
          </h2>
          <div className="flex-1 h-[3px] bg-[var(--cor-4)]"></div>
        </div>

        <div className="grid grid-cols-1 
                       md:grid-cols-2
                       lg:grid-cols-4 
                       gap-6">
          {fixos.map((cer) => renderCersRow(cer))}
        </div>

        {restantes.length > 0 && (
          <Accordion type="single" collapsible className="w-full mt-6">
            <AccordionItem value="grid-restante" className="border-none">
              <AccordionContent className="overflow-visible">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {restantes.map((cer) => renderCersRow(cer))}
                </div>
              </AccordionContent>

              <div className="flex justify-center mt-12">
                <AccordionTrigger className="flex gap-3 items-center bg-transparent text-white px-12 py-4 font-bold transition-all underline decoration-2 underline-offset-4 cursor-pointer hover:decoration-[var(--cor-4)]">
                  VER TODAS AS UNIDADES
                </AccordionTrigger>
              </div>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </section>
  );
}