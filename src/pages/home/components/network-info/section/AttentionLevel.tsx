import attentionLevels from "@/data/attention-levels.json";
import { useState } from "react";
import { Activity, Building2, Hospital, ChevronDown } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const levelIcons = [Activity, Building2, Hospital];
const levelColors = [
  "bg-[var(--cor-1)]",
  "bg-[var(--cor-2)]",
  "bg-[var(--cor-5)]",
];
const levelBorders = [
  "border-[var(--cor-1)]/30",
  "border-[var(--cor-2)]/30",
  "border-[var(--cor-5)]/30",
];
const levelHovers = [
  "hover:border-[var(--cor-1)]",
  "hover:border-[var(--cor-2)]",
  "hover:border-[var(--cor-5)]",
];

export default function AttentionLevel() {
  const levels = attentionLevels as AttentionLevel[];
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="attention-level"
      className="px-6 py-20 bg-gradient-to-b from-white to-blue-50/30"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Níveis de Atenção
          </h2>
          <div className="w-24 h-1 bg-[var(--cor-1)] rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Estrutura integrada de cuidado em diferentes níveis de complexidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {levels.map((level, idx) => {
            const Icon = levelIcons[idx];
            return (
              <Card
                key={level.id}
                className={`flex flex-col transition-all hover:shadow-2xl hover:-translate-y-2 border-2 ${levelBorders[idx]} ${levelHovers[idx]} relative overflow-hidden group`}
                onMouseEnter={() => setHoveredCard(level.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-2 ${levelColors[idx]} transition-all ${hoveredCard === level.id ? "h-3" : ""}`}
                ></div>

                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`${levelColors[idx]} p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">
                    {level.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {level.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <Accordion type="single" collapsible>
                    {level.components.map((component) => (
                      <AccordionItem
                        key={component.id}
                        value={component.id}
                        className="border-gray-200"
                      >
                        <AccordionTrigger className="font-semibold text-left hover:text-[var(--cor-5)] transition-colors">
                          <span className="flex items-center gap-2">
                            <ChevronDown className="w-4 h-4" />
                            {component.title}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-justify leading-relaxed text-gray-700 bg-gray-50 p-4 rounded-lg">
                          {component.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
