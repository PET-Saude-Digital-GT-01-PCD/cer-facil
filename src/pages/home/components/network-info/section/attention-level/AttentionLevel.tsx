import { ChevronDown } from "lucide-react";
import { attentionLevelsData } from "./AttentionLevel.data.ts";

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

export default function AttentionLevel() {
  return (
    <section 
      aria-labelledby="att-level" 
      id="attention-level" 
      className="px-6 py-20 relative">
      <div className="mx-auto max-w-6xl">
        <header className="text-left mb-16">
          <h2 id="att-level" className="text-4xl font-bold mb-4">Níveis de Atenção</h2>
          <div className="w-20 h-1.5 bg-[var(--cor-bg-1)] rounded-full mb-6"></div>
          <p className="text-slate-600 mt-4 max-w-2xl text-2xl opacity-90">
            Estrutura integrada de cuidado em diferentes níveis de complexidade
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attentionLevelsData.map((level) => {
            const Icon = level.icon;

            return (
              <Card
                key={level.id}
                className={`flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 border-2 bg-white ${level.borderClass} ${level.hoverClass} relative overflow-hidden group rounded-2xl`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-2 ${level.colorClass} transition-all duration-300`}
                ></div>

                <CardHeader className="text-center pb-6 pt-12">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`${level.colorClass} p-5 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    <h3>
                      {level.title}
                    </h3>
                  </CardTitle>
                  <CardDescription
                    className="text-gray-500 text-xl leading-relaxed px-4"
                  >
                    {level.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 px-6 pb-10">
                  <Accordion type="single" collapsible className="w-full">
                    {level.components.map((component) => (
                      <AccordionItem
                        key={component.id}
                        value={component.id}
                        className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] border-gray-100"
                      >
                        <AccordionTrigger className="text-xl font-bold text-gray-700 hover:text-[var(--cor-bg-1)] transition-colors py-4">
                          {component.title}
                        </AccordionTrigger>
                        <AccordionContent
                          className="text-xl text-gray-600 leading-relaxed bg-[color-mix(in_srgb,var(--cor-bg-2),white_95%)] p-4 rounded-xl mt-1 border border-orange-100/30"
                        >
                          <span>{component.content}</span>
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
