import attentionLevels from "@/data/attention-levels.json";

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
  const levels = attentionLevels as AttentionLevel[];

  return (
    <section id="attention-level" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-left mb-12">
          Níveis de atenção
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {levels.map((level) => (
            <Card key={level.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-normal">
                  {level.title}
                </CardTitle>

                <CardDescription className="text-center">
                  {level.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Accordion type="single" collapsible>
                  {level.components.map((component) => (
                    <AccordionItem key={component.id} value={component.id}>
                      <AccordionTrigger className="font-normal">
                        {component.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-justify font-normal">
                        {component.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
