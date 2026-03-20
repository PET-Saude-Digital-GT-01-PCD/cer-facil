import { Circle, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import { timelineData, TimelineItem } from "./HistoryTimeline.data.ts";

export default function HistoryTimeline() {
  return (
    <section
      aria-labelledby="hist-timeline"
      className="px-6 py-20 relative bg-white"
    >
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
            <TimelineEntry key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="relative flex items-center mb-10">
      <div
        className={`flex w-full items-center ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="w-full md:w-5/12 px-4 md:px-8 ml-12 md:ml-0">
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-slate-100 transition-all">
            
            {/* Conteúdo Informativo (Não Clicável) */}
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

            {/* Único Elemento Clicável: Saiba Mais */}
            <button
              onClick={toggleExpand}
              // Força o leitor de tela a falar apenas o que está no label
              aria-label={`saiba mais ${isExpanded ? "expandido" : "retraído"}`}
              className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] cursor-pointer flex items-center gap-2 text-lg text-[var(--cor-bg-1)] font-bold mt-4 group hover:underline outline-none focus:ring-4 focus:ring-blue-200 rounded-lg p-1"
            >
              <span aria-hidden="true">
                {isExpanded ? "Ver menos" : "Saiba mais"}
              </span>
              <ChevronDown 
                aria-hidden="true" 
                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              />
            </button>

            {/* Conteúdo Detalhado (Similar aos Níveis de Atenção) */}
            {isExpanded && (
              <div className="text-xl text-gray-600 leading-relaxed bg-[color-mix(in_srgb,var(--cor-bg-2),white_95%)] p-4 rounded-xl mt-4 border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
                {item.detailedMessage}
              </div>
            )}
          </div>
        </div>

        {/* Marcador Visual da Timeline */}
        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center" aria-hidden="true">
          <div
            className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 ${item.colorClass} rounded-full border-4 border-white shadow-lg z-10`}
          >
            <Circle className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" />
          </div>
        </div>
        <div className="hidden md:block md:w-5/12"></div>
      </div>
    </div>
  );
}
