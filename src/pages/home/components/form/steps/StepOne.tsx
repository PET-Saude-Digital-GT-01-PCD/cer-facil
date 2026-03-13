import { Button } from "@/components/ui/button";
import { useState } from "react";
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
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleNext = () => {
    if (selected.length > 0) {
      onNext(selected);
    }
  };

  return (
    <div className="w-full">
      <Card className="border-2 border-[var(--cor-bg-1)] shadow-2xl max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl text-[var(--cor-bg-1)] font-bold">
            Qual deficiência(s) deseja buscar atendimento?
          </CardTitle>
          <CardDescription className="text-base">
            Você pode selecionar mais de uma opção
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <Card
              onClick={() => toggleSelection("fisica")}
              className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${
                selected.includes("fisica")
                  ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl"
                  : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
              }`}
            >
              <CardHeader className="flex flex-row items-center gap-3 p-4">
                <div
                  className={`p-2 rounded-full border-2 ${
                    selected.includes("fisica")
                      ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                      : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)]"
                  }`}
                >
                  <Accessibility
                    className={`h-6 w-6 ${
                      selected.includes("fisica")
                        ? "text-white"
                        : "text-[var(--cor-bg-1)]"
                    }`}
                  />
                </div>
                <CardTitle className="text-base">Deficiência física</CardTitle>
              </CardHeader>
            </Card>

            <Card
              onClick={() => toggleSelection("auditiva")}
              className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${
                selected.includes("auditiva")
                  ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl scale-[1.02]"
                  : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
              }`}
            >
              <CardHeader className="flex flex-row items-center gap-3 p-4">
                <div
                  className={`p-2 rounded-full border-2 ${
                    selected.includes("auditiva")
                      ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                      : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)]"
                  }`}
                >
                  <Ear
                    className={`h-6 w-6 ${
                      selected.includes("auditiva")
                        ? "text-white"
                        : "text-[var(--cor-bg-1)]"
                    }`}
                  />
                </div>
                <CardTitle className="text-base">Deficiência Auditiva</CardTitle>
              </CardHeader>
            </Card>

            <Card
              onClick={() => toggleSelection("visual")}
              className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${
                selected.includes("visual")
                  ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl scale-[1.02]"
                  : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
              }`}
            >
              <CardHeader className="flex flex-row items-center gap-3 p-4">
                <div
                  className={`p-2 rounded-full border-2 ${
                    selected.includes("visual")
                      ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                      : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)]"
                  }`}
                >
                  <Eye
                    className={`h-6 w-6 ${
                      selected.includes("visual")
                        ? "text-white"
                        : "text-[var(--cor-bg-1)]"
                    }`}
                  />
                </div>
                <CardTitle className="text-base">Deficiência Visual</CardTitle>
              </CardHeader>
            </Card>

            <Card
              onClick={() => toggleSelection("intelectual")}
              className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${
                selected.includes("intelectual")
                  ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl scale-[1.02]"
                  : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
              }`}
            >
              <CardHeader className="flex flex-row items-center gap-3 p-4">
                <div
                  className={`p-2 rounded-full border-2 ${
                    selected.includes("intelectual")
                      ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                      : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)]"
                  }`}
                >
                  <Brain
                    className={`h-6 w-6 ${
                      selected.includes("intelectual")
                        ? "text-white"
                        : "text-[var(--cor-bg-1)]"
                    }`}
                  />
                </div>
                <CardTitle className="text-base">
                  Deficiência Intelectual
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="flex justify-center">
            <Card
              onClick={() => toggleSelection("tea")}
              className={`cursor-pointer transition-all hover:shadow-2xl border-2 w-full md:w-1/2 ${
                selected.includes("tea")
                  ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl scale-[1.02]"
                  : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
              }`}
            >
              <CardHeader className="flex flex-row items-center gap-3 p-4">
                <div
                  className={`p-2 rounded-full border-2 ${
                    selected.includes("tea")
                      ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                      : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)]"
                  }`}
                >
                  <Puzzle
                    className={`h-6 w-6 ${
                      selected.includes("tea")
                        ? "text-white"
                        : "text-[var(--cor-bg-1)]"
                    }`}
                  />
                </div>
                <CardTitle className="text-base">
                  Transtorno espectro autista (TEA)
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
            className="px-8 py-5 text-base border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)] hover:text-white"
          >
            Voltar
          </Button>
          <Button
            onClick={handleNext}
            disabled={selected.length === 0}
            size="lg"
            className="px-8 py-5 text-base min-w-[160px] border-2 border-[var(--cor-1)] hover:bg-[var(--cor-bg-1)]"
          >
            Próximo {selected.length > 0 && `(${selected.length})`}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
