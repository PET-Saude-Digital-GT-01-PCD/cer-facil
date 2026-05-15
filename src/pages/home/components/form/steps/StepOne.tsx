import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Accessibility, Ear, Eye, Brain, Puzzle, type LucideIcon } from "lucide-react";

const deficiencias: { id: string; label: string; Icon: LucideIcon }[] = [
  { id: "fisica",      label: "Deficiência Física",                  Icon: Accessibility },
  { id: "auditiva",    label: "Deficiência Auditiva",                 Icon: Ear           },
  { id: "visual",      label: "Deficiência Visual",                   Icon: Eye           },
  { id: "intelectual", label: "Deficiência Intelectual",              Icon: Brain         },
  { id: "tea",         label: "Transtorno do Espectro Autista (TEA)", Icon: Puzzle        },
];

interface StepOneProps {
  setShowForm: (show: boolean) => void;
  onNext: (selectedDeficiencies: string[]) => void;
}

export default function StepOne({ setShowForm, onNext }: StepOneProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const toggleSelection = (id: string) => {
    setSelected((prev) => (prev === id ? null : id));
  };

  const handleNext = () => {
    if (selected) onNext([selected]);
  };

  const handleKeyDown = (event: React.KeyboardEvent, value: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleSelection(value);
    }
  };

  return (
    <div className="w-full">
      <Card className="border-2 border-[var(--cor-bg-1)] shadow-2xl max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl text-[var(--cor-bg-1)] font-bold">
            Para qual deficiência deseja buscar atendimento?
          </CardTitle>
          <CardDescription className="text-base">
            Escolha uma opção
          </CardDescription>
        </CardHeader>

        <CardContent role="radiogroup">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            {deficiencias.slice(0, 4).map(({ id, label, Icon }) => (
              <Card
                key={id}
                role="radio"
                aria-checked={selected === id}
                tabIndex={0}
                onClick={() => toggleSelection(id)}
                onKeyDown={(e) => handleKeyDown(e, id)}
                className={`group focus-within:border-10 focus-within:border-[var(--cor-destaque)] cursor-pointer transition-all hover:shadow-2xl border-2 ${
                  selected === id
                    ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl scale-[1.02]"
                    : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
                }`}
              >
                <CardHeader className="flex flex-row items-center gap-2 p-3">
                  <div
                    className={`p-2 rounded-full border-2 transition-all duration-300 ${
                      selected === id
                        ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                        : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)] group-hover:bg-[var(--cor-bg-1)]"
                    }`}
                  >
                    <Icon
                      aria-hidden="true"
                      className={`h-8 w-8 transition-all duration-300 ${
                        selected === id
                          ? "text-white"
                          : "text-[var(--cor-bg-1)] group-hover:text-white"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-lg">{label}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            {deficiencias.slice(4).map(({ id, label, Icon }) => (
              <Card
                key={id}
                role="radio"
                aria-checked={selected === id}
                tabIndex={0}
                onClick={() => toggleSelection(id)}
                onKeyDown={(e) => handleKeyDown(e, id)}
                className={`group focus-within:border-10 focus-within:border-[var(--cor-destaque)] cursor-pointer transition-all hover:shadow-2xl border-2 w-full md:w-1/2 ${
                  selected === id
                    ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl scale-[1.02]"
                    : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
                }`}
              >
                <CardHeader className="flex flex-row items-center gap-2 p-3">
                  <div
                    className={`p-2 rounded-full border-2 transition-all duration-300 ${
                      selected === id
                        ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                        : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)] group-hover:bg-[var(--cor-bg-1)]"
                    }`}
                  >
                    <Icon
                      aria-hidden="true"
                      className={`h-8 w-8 transition-all duration-300 ${
                        selected === id
                          ? "text-white"
                          : "text-[var(--cor-bg-1)] group-hover:text-white"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-lg">{label}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </CardContent>

        <CardContent className="flex justify-between p-4">
          <Button
            variant="outline"
            onClick={() => setShowForm(false)}
            size="lg"
            className="px-6 py-3 text-lg border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)] hover:text-white
             focus-visible:ring-[10px] focus-visible:ring-[var(--cor-destaque)] focus-visible:ring-offset-2 outline-none"
          >
            Voltar
          </Button>
          <Button
            onClick={handleNext}
            disabled={!selected}
            size="lg"
            className="px-6 py-3 text-lg border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)] hover:text-white
             focus-visible:ring-[10px] focus-visible:ring-[var(--cor-destaque)] focus-visible:ring-offset-2 outline-none"
          >
            Próximo
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
