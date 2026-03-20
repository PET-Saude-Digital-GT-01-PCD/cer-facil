import { Circle, Calendar } from "lucide-react";
import { useState } from "react";
import { timelineData, TimelineItem } from "./HistoryTimeline.data.ts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HistoryTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      aria-labelledby="hist-timeline"
      className="px-6 py-20 relative bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <header className="text-left mb-16">
          <h2 id="hist-timeline" className="text-4xl font-bold mb-4 text-slate-900">
            História da Rede de Cuidado à Pessoa com Deficiência
          </h2>
          <div
            className="w-24 h-2 bg-[var(--cor-bg-1)] rounded-full"
            aria-hidden="true"
          />
          <p className="text-slate-600 mt-4 max-w-2xl text-2xl">
            Uma jornada de evolução e compromisso com os direitos das pessoas
            com deficiência
          </p>
        </header>

        <div className="relative">
          {/* Linha Central Vertical */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200" />

          {timelineData.map((item, index) => (
            <TimelineEntry
              key={item.id}
              item={item}
              index={index}
              isExpanded={expandedId === item.id}
              onToggle={() => toggleExpand(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({
  item,
  index,
  isExpanded,
  onToggle,
}: {
  item: TimelineItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-center mb-10">
      <div
        className={`flex w-full items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
      >
        {/* Card de Conteúdo */}
        <div className="w-full md:w-5/12 px-4 md:px-8 ml-12 md:ml-0">
          <button
            className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] bg-white p-6 rounded-xl shadow-lg border-2 border-slate-100 hover:border-[var(--cor-bg-1)] focus:ring-4 focus:ring-blue-200 outline-none transition-all cursor-pointer group text-start"
            aria-expanded={isExpanded}
            onClick={onToggle}
            onKeyDown={(e) => e.key === "Enter" && onToggle()}
          >
            <div className="flex items-center gap-3 mb-3">
              <Calendar
                className="w-8 h-8 md:w-10 md:h-10 text-[var(--cor-bg-1)]"
                aria-hidden="true"
              />
              <h3 className="text-xl md:text-2xl font-bold text-[var(--cor-bg-1)]">
                {item.title}
              </h3>
            </div>

            <p className="text-slate-700 font-medium text-lg md:text-xl mb-2">
              {item.description}
            </p>
            {isExpanded && (
              <p className="text-slate-600 text-lg md:text-xl mt-4 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                {item.detailedMessage}
              </p>
            )}
            <span className="text-lg text-[var(--cor-bg-1)] font-bold mt-2 block group-hover:underline transition-all">
              {isExpanded ? "Ver menos" : "Saiba mais"}
            </span>
          </button>
        </div>
        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <div
            className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 ${item.colorClass} rounded-full border-4 border-white shadow-lg z-10 hover:scale-110 transition-transform`}
          >
            <Circle
              className="w-6 h-6 md:w-7 md:h-7 text-white"
              fill="currentColor"
            />
          </div>
        </div>
        <div className="hidden md:block md:w-5/12"></div>
      </div>
    </div>
  );
}
