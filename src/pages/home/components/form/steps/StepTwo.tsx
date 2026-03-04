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
      <Card className="border-2 border-[var(--cor-1)] shadow-2xl max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl text-[var(--cor-5)] font-bold">
            Qual é a idade da pessoa que receberá o atendimento?
          </CardTitle>
          {selectedDeficiencies.length > 0 && (
            <CardDescription className="text-base">
              Deficiências selecionadas: {selectedDeficiencies.join(", ")}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="space-y-2">
          <Card
            onClick={() => setSelected("crianca")}
            className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${
              selected === "crianca"
                ? "border-[var(--cor-1)] border-4 bg-[var(--cor-2)]/15 shadow-xl scale-[1.02]"
                : "border-[var(--cor-2)]/40 hover:border-[var(--cor-1)]"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-3 p-4">
              <div
                className={`p-2 rounded-full border-2 ${
                  selected === "crianca"
                    ? "bg-[var(--cor-1)] border-[var(--cor-5)]"
                    : "bg-[var(--cor-2)]/20 border-[var(--cor-2)]"
                }`}
              >
                <Baby
                  className={`h-6 w-6 ${
                    selected === "crianca"
                      ? "text-white"
                      : "text-[var(--cor-1)]"
                  }`}
                />
              </div>
              <div>
                <CardTitle className="text-base">Criança</CardTitle>
                <CardDescription>0 a 12 anos</CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card
            onClick={() => setSelected("adolescente")}
            className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${
              selected === "adolescente"
                ? "border-[var(--cor-1)] border-4 bg-[var(--cor-2)]/15 shadow-xl scale-[1.02]"
                : "border-[var(--cor-2)]/40 hover:border-[var(--cor-1)]"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-3 p-4">
              <div
                className={`p-2 rounded-full border-2 ${
                  selected === "adolescente"
                    ? "bg-[var(--cor-1)] border-[var(--cor-5)]"
                    : "bg-[var(--cor-2)]/20 border-[var(--cor-2)]"
                }`}
              >
                <User
                  className={`h-6 w-6 ${
                    selected === "adolescente"
                      ? "text-white"
                      : "text-[var(--cor-1)]"
                  }`}
                />
              </div>
              <div>
                <CardTitle className="text-base">Adolescente</CardTitle>
                <CardDescription>13 a 17 anos</CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card
            onClick={() => setSelected("adulto")}
            className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${
              selected === "adulto"
                ? "border-[var(--cor-1)] border-4 bg-[var(--cor-2)]/15 shadow-xl scale-[1.02]"
                : "border-[var(--cor-2)]/40 hover:border-[var(--cor-1)]"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-3 p-4">
              <div
                className={`p-2 rounded-full border-2 ${
                  selected === "adulto"
                    ? "bg-[var(--cor-1)] border-[var(--cor-5)]"
                    : "bg-[var(--cor-2)]/20 border-[var(--cor-2)]"
                }`}
              >
                <Users
                  className={`h-6 w-6 ${
                    selected === "adulto"
                      ? "text-white"
                      : "text-[var(--cor-1)]"
                  }`}
                />
              </div>
              <div>
                <CardTitle className="text-base">Adulto</CardTitle>
                <CardDescription>18 a 59 anos</CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card
            onClick={() => setSelected("idoso")}
            className={`cursor-pointer transition-all hover:shadow-2xl border-2 ${
              selected === "idoso"
                ? "border-[var(--cor-1)] border-4 bg-[var(--cor-2)]/15 shadow-xl scale-[1.02]"
                : "border-[var(--cor-2)]/40 hover:border-[var(--cor-1)]"
            }`}
          >
            <CardHeader className="flex flex-row items-center gap-3 p-4">
              <div
                className={`p-2 rounded-full border-2 ${
                  selected === "idoso"
                    ? "bg-[var(--cor-1)] border-[var(--cor-5)]"
                    : "bg-[var(--cor-2)]/20 border-[var(--cor-2)]"
                }`}
              >
                <UserCog
                  className={`h-6 w-6 ${
                    selected === "idoso"
                      ? "text-white"
                      : "text-[var(--cor-1)]"
                  }`}
                />
              </div>
              <div>
                <CardTitle className="text-base">Idoso</CardTitle>
                <CardDescription>60 ou mais anos</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </CardContent>

        <CardContent className="flex justify-between p-4">
          <Button
            variant="outline"
            onClick={onBack}
            size="lg"
            className="px-8 py-5 text-base border-2 border-[var(--cor-1)] hover:bg-[var(--cor-1)] hover:text-white"
          >
            Voltar
          </Button>
          <Button
            onClick={handleNext}
            disabled={!selected}
            size="lg"
            className="px-8 py-5 text-base min-w-[160px] border-2 border-[var(--cor-3)] hover:bg-[var(--cor-5)]"
          >
            Próximo
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
