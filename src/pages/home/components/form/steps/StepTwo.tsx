import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Baby, User, Users, UserCog } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StepsTwoProps {
  selectedDeficiencies?: string[];
  onBack: () => void;
  onNext: (ageGroup: string) => void;
}

export default function StepTwo({ selectedDeficiencies = [], onBack, onNext }: StepsTwoProps) {
  const [selected, setSelected] = useState<string>("");

  const handleNext = () => {
    if (selected) {
      onNext(selected);
    }
  };

  return (
    <div className="w-full">
      <Card className="border-2 border-[var(--cor-bg-1)] shadow-2xl max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-[var(--cor-bg-1)] font-bold">
            Qual é a idade da pessoa que receberá o atendimento?
          </CardTitle>
          {selectedDeficiencies.length > 0 && (
            <CardDescription className="text-2xl">
              Deficiências selecionadas: {selectedDeficiencies.join(", ")}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="space-y-2">
          <Card
            onClick={() => setSelected("crianca")}
            className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${
              selected === "crianca"
                ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl scale-[1.02]"
                : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-3 p-4">
              <div
                className={`p-3 rounded-full border-2 ${
                  selected === "crianca"
                    ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                    : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)]"
                }`}
              >
                <Baby
                  className={`h-12 w-12 ${
                    selected === "crianca"
                      ? "text-white"
                      : "text-[var(--cor-bg-1)]"
                  }`}
                />
              </div>
              <div>
                <CardTitle className="text-2xl">Criança</CardTitle>
                <CardDescription className="text-xl">0 a 12 anos</CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card
            onClick={() => setSelected("adolescente")}
            className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${
              selected === "adolescente"
                ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl scale-[1.02]"
                : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-3 p-4">
              <div
                className={`p-3 rounded-full border-2 ${
                  selected === "adolescente"
                    ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                    : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)]"
                }`}
              >
                <User
                  className={`h-12 w-12 ${
                    selected === "adolescente"
                      ? "text-white"
                      : "text-[var(--cor-bg-1)]"
                  }`}
                />
              </div>
              <div>
                <CardTitle className="text-2xl">Adolescente</CardTitle>
                <CardDescription className="text-xl">13 a 17 anos</CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card
            onClick={() => setSelected("adulto")}
            className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${
              selected === "adulto"
                ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl scale-[1.02]"
                : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-3 p-4">
              <div
                className={`p-3 rounded-full border-2 ${
                  selected === "adulto"
                    ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                    : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)]"
                }`}
              >
                <Users
                  className={`h-12 w-12 ${
                    selected === "adulto"
                      ? "text-white"
                      : "text-[var(--cor-bg-1)]"
                  }`}
                />
              </div>
              <div>
                <CardTitle className="text-2xl">Adulto</CardTitle>
                <CardDescription className="text-xl">18 a 59 anos</CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card
            onClick={() => setSelected("idoso")}
            className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${
              selected === "idoso"
                ? "border-[var(--cor-bg-1)] border-4 bg-[var(--cor-bg-1)]/15 shadow-xl scale-[1.02]"
                : "border-[var(--cor-bg-1)]/40 hover:border-[var(--cor-bg-1)]"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-3 p-4">
              <div
                className={`p-3 rounded-full border-2 ${
                  selected === "idoso"
                    ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)]"
                    : "bg-[var(--cor-bg-1)]/20 border-[var(--cor-bg-1)]"
                }`}
              >
                <UserCog
                  className={`h-12 w-12 ${
                    selected === "idoso"
                      ? "text-white"
                      : "text-[var(--cor-bg-1)]"
                  }`}
                />
              </div>
              <div>
                <CardTitle className="text-2xl">Idoso</CardTitle>
                <CardDescription className="text-xl">60 ou mais anos</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </CardContent>

        <CardContent className="flex justify-between p-4">
          <Button
            variant="outline"
            onClick={onBack}
            size="lg"
            className="px-8 py-5 text-2xl border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)] hover:text-white"
          >
            Voltar
          </Button>
          <Button
            onClick={handleNext}
            disabled={!selected}
            size="lg"
            className="px-8 py-5 text-2xl min-w-[160px] border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)]"
          >
            Próximo
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
