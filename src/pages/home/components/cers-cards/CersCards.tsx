import React from "react";
import { Button } from "@/components/ui/button";
import CERS from "@/data/cers.json";
import Flow from "../user-flow/Flow";
import { MapPin, ArrowRight } from "lucide-react";
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

export default function CersCards({ showFlow, setShowFlow }: CersCardsProps) {
  if (showFlow[0]) {
    return <Flow setShowFlow={setShowFlow} cerId={showFlow[1]} />;
  }

  const fixos = (CERS as DadosCers[]).slice(0, 3);
  const restantes = (CERS as DadosCers[]).slice(3);

  const renderCersRow = (cer: DadosCers) => {
    return (
      <div 
        key={cer.id} 
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 border-t-4 border-t-[var(--cor-1)] flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 h-full min-h-[220px]"
      >
        <div className="flex-grow flex flex-col">
          <h3 
            className="font-bold text-lg text-black mb-4 leading-tight" 
          >
            {toTitleCase(cer.nome)}
          </h3>

          <div className="flex items-center text-gray-500 mb-6 mt-auto">
            <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0 text-[var(--cor-3)]" />
            <span className="text-sm font-medium">{cer.cidade}</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
          
          <div className="flex flex-wrap gap-1.5 flex-1 pr-3">
            {cer.especialidades.map((especialidade, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-blue-50 rounded-md text-[var(--cor-1)] text-[9px] sm:text-[9px] font-bold uppercase tracking-wider whitespace-nowrap"
              >
                {especialidade}
              </span>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-[var(--cor-3)] hover:text-white hover:bg-[var(--cor-3)] rounded-full transition-colors flex-shrink-0"
            onClick={() => setShowFlow([true, cer.id])}
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section id="cers-card" className="px-6 py-20 bg-white relative">
      <div className="mx-auto max-w-6xl">
        
        <div className="text-left mb-12">
          <h2 className="font-bold text-4xl mb-4 text-black">
            Rede Estadual de Reabilitação
          </h2>
          <div className="w-24 h-1 bg-[var(--cor-3)] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fixos.map((cer) => renderCersRow(cer))}
        </div>

        {restantes.length > 0 && (
          <Accordion type="single" collapsible className="w-full mt-6">
            <AccordionItem value="grid-restante" className="border-none">
              <AccordionContent className="overflow-visible pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {restantes.map((cer) => renderCersRow(cer))}
                </div>
              </AccordionContent>

              <div className="flex justify-center mt-8">
                <AccordionTrigger className="flex gap-2 items-center text-black px-6 py-3 font-bold transition-all border border-gray-200 rounded-full hover:bg-gray-50 hover:text-[var(--cor-3)] data-[state=open]:hidden">
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