import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Accessibility, Ear, Eye, Brain, Puzzle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    if (selected) {
      onNext([selected]);
    }
  };

  return (
    <div className="w-full">
      <Card className="border-2 border-[var(--cor-bg-1)] shadow-2xl max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle asChild className="text-3xl text-[var(--cor-bg-1)] font-bold">
            <h2>
              Para qual deficiência deseja buscar atendimento?
            </h2>
          </CardTitle>
          <CardDescription className="text-2xl">
            Escolha uma opção
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <Card
              role="checkbox"
              aria-checked={selected.includes("fisica")}
              tabIndex={0}
              onClick={() => toggleSelection("fisica")}
              className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${selected == ("fisica")
                  ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl"
                  : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
                }`}
            >
              <CardHeader className="flex flex-row items-center gap-3 p-4">
                <div
                  className={`p-3 rounded-full border-2 ${selected == ("fisica")
                      ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                      : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)]"
                    }`}
                >
                  <Accessibility
                    className={`h-12 w-12 ${selected == ("fisica")
                        ? "text-white"
                        : "text-[var(--cor-bg-1)]"
                      }`}
                  />
                </div>
                <CardTitle className="text-2xl">Deficiência Física</CardTitle>
              </CardHeader>
            </Card>

            <Card
              role="checkbox"
              aria-checked={selected.includes("auditiva")}
              tabIndex={0}
              onClick={() => toggleSelection("auditiva")}
              className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${selected == ("auditiva")
                  ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl scale-[1.02]"
                  : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
                }`}
            >
              <CardHeader className="flex flex-row items-center gap-3 p-4">
                <div
                  className={`p-3 rounded-full border-2 ${selected == ("auditiva")
                      ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                      : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)]"
                    }`}
                >
                  <Ear
                    className={`h-12 w-12 ${selected == ("auditiva")
                        ? "text-white"
                        : "text-[var(--cor-bg-1)]"
                      }`}
                  />
                </div>
                <CardTitle className="text-2xl">Deficiência Auditiva</CardTitle>
              </CardHeader>
            </Card>

            <Card
              role="checkbox"
              aria-checked={selected.includes("visual")}
              tabIndex={0}
              onClick={() => toggleSelection("visual")}
              className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${selected == ("visual")
                  ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl scale-[1.02]"
                  : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
                }`}
            >
              <CardHeader className="flex flex-row items-center gap-3 p-4">
                <div
                  className={`p-3 rounded-full border-2 ${selected == ("visual")
                      ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                      : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)]"
                    }`}
                >
                  <Eye
                    className={`h-12 w-12 ${selected == ("visual")
                        ? "text-white"
                        : "text-[var(--cor-bg-1)]"
                      }`}
                  />
                </div>
                <CardTitle className="text-2xl">Deficiência Visual</CardTitle>
              </CardHeader>
            </Card>

            <Card
              role="checkbox"
              aria-checked={selected.includes("intelectual")}
              tabIndex={0}
              onClick={() => toggleSelection("intelectual")}
              className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${selected == ("intelectual")
                  ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl scale-[1.02]"
                  : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
                }`}
            >
              <CardHeader className="flex flex-row items-center gap-3 p-4">
                <div
                  className={`p-3 rounded-full border-2 ${selected == ("intelectual")
                      ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                      : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)]"
                    }`}
                >
                  <Brain
                    className={`h-12 w-12 ${selected == ("intelectual")
                        ? "text-white"
                        : "text-[var(--cor-bg-1)]"
                      }`}
                  />
                </div>
                <CardTitle className="text-2xl">
                  Deficiência Intelectual
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="flex justify-center">
            <Card
              role="checkbox"
              aria-checked={selected.includes("tea")}
              tabIndex={0}
              onClick={() => toggleSelection("tea")}
              className={`cursor-pointer transition-all hover:shadow-2xl border-2 w-full md:w-1/2 ${selected == ("tea")
                  ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl scale-[1.02]"
                  : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
                }`}
            >
              <CardHeader className="flex flex-row items-center gap-3 p-4">
                <div
                  className={`p-3 rounded-full border-2 ${selected == ("tea")
                      ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                      : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)]"
                    }`}
                >
                  <Puzzle
                    className={`h-12 w-12 ${selected == ("tea")
                        ? "text-white"
                        : "text-[var(--cor-bg-1)]"
                      }`}
                  />
                </div>
                <CardTitle className="text-2xl">
                  Transtorno do Espectro Autista (TEA)
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </CardContent>

        <CardContent className="flex justify-between p-4">
          <Button
            variant="outline"
            onClick={() => setShowForm(false)}
            size="lg"
            className="px-8 py-5 text-2xl border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)] hover:text-white"
          >
            Voltar
          </Button>
          <Button
            onClick={handleNext}
            disabled={!selected}
            size="lg"
            className="px-8 py-5 text-2xl min-w-[160px] border-2 border-[var(--cor-1)] hover:bg-[var(--cor-bg-1)]"
          >
            Próximo
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}