import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Accessibility, Ear, Eye, Brain, Puzzle, Landmark, Building2 } from "lucide-react";
import FLUXOS from "../../../../data/fluxo.json";
import { Accessibility, Ear, Eye, Brain, Landmark, Building2 } from "lucide-react";
import CERS from "@/data/cers.json";
import { Calendar } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FlowProps {
  setShowFlow: (show: [boolean, number]) => void;
  cerId: number;
}

const especialidadeIconMap: { [key: string]: React.ElementType } = {
  "Administrativo": Building2,
  "default": Landmark
};

export default function Flow({ setShowFlow, cerId }: FlowProps) {
  const [selected, setSelected] = useState<string[]>([]); // Ajustado para array se for usar toggle

  const toggleSelection = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const especialidadeIconMap: { [key: string]: React.ElementType } = {
    "Administrativo": Building2,
    "default": Landmark
  };

  return (
    <div className="grid grid-cols-2 items-center">
      {/* LADO ESQUERDO */}
      <Card className="p-6 rounded-sm shadow-none border-0">
        <CardHeader className="w-screen max-w-3xl justify-self-middle align-middle">
          <CardContent className="overflow-y-auto p-4">
            <div className="ml-2">

              <div className="group relative bg-white p-5 rounded-2xl shadow-lg border border-blue-50 
                              transition-all hover:shadow-xl w-full min-h-[240px] flex flex-col items-center justify-center font-bold text-[var(--cor-3)]">

                <div className="flex flex-col items-center justify-center border-r border-gray-100 gap-4">
                  {(() => {
                    const Icone = especialidadeIconMap["Administrativo"] || especialidadeIconMap["default"];
                    return <Icone className="w-20 h-20 text-[var(--cor-3)]" />;
                  })()}
                </div>

                <div className="flex items-center justify-center p-4">
                  <p className="text-[20px] font-bold text-gray-600 leading-tight text-center">
                    {FLUXOS[cerId - 1].title}
                  </p>
                </div>
              </div>
              <div className="p-5 mt-6 text-justify">
                {CERS[cerId - 1]?.info || "Informação detalhada sobre o CER selecionado."}
              </div>
            </div>
            <div className="border bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all hover:shadow-xl mt-6">
              {CERS[cerId - 1]?.endereco &&
                <div>
                  <p className="text-[12px] font-bold text-[var(--cor-3)] uppercase tracking-widest mb-3">
                    Endereço
                  </p>
                  <div className="flex flex-col gap-2 pl-4 border-l-4 border-[var(--cor-3)] ml-1">
                    <p className="text-[14px] text-gray-600 leading-snug flex items-start">
                      <span className="mr-2 text-[var(--cor-3)] font-black">•</span>
                      {CERS[cerId - 1]?.endereco.rua + ", " + CERS[cerId - 1]?.endereco.numero + " - " + CERS[cerId - 1]?.endereco.bairro}
                    </p>
                  </div>
                </div>}

              {CERS[cerId - 1]?.telefone &&
                <div className="mt-6">
                  <p className="text-[12px] font-bold text-[var(--cor-3)] uppercase tracking-widest mb-3">
                    Telefone
                  </p>
                  <div className="flex flex-col gap-2 pl-4 border-l-4 border-[var(--cor-3)] ml-1">
                    <p className="text-[14px] text-gray-600 leading-snug flex items-start">
                      <span className="mr-2 text-[var(--cor-3)] font-black">•</span>
                      {CERS[cerId - 1]?.telefone}
                    </p>
                  </div>
                </div>}
              {CERS[cerId - 1]?.email &&
                <div className="mt-6">
                  <p className="text-[12px] font-bold text-[var(--cor-3)] uppercase tracking-widest mb-3">
                    Email
                  </p>
                  <div className="flex flex-col gap-2 pl-4 border-l-4 border-[var(--cor-3)] ml-1">
                    <p className="text-[14px] text-gray-600 leading-snug flex items-start">
                      <span className="mr-2 text-[var(--cor-3)] font-black">•</span>
                      {CERS[cerId - 1]?.email}
                    </p>
                  </div>
                </div>}

              <div className="mt-6">
                <p className="text-[12px] font-bold text-[var(--cor-3)] uppercase tracking-widest mb-3">
                  Horário de Funcionamento
                </p>
                <div className="flex flex-col gap-2 pl-4 border-l-4 border-[var(--cor-3)] ml-1">
                  <p className="text-[14px] text-gray-600 leading-snug flex items-start">
                    <span className="mr-2 text-[var(--cor-3)] font-black">•</span>
                    Segunda a Sexta, das 08:00 às 17:00
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </CardHeader>
      </Card>

      {/* LADO DIREITO */}
      <Card className="p-6 rounded-sm shadow-none border-0 bg-transparent">
        <CardHeader className="w-full max-w-5xl mx-auto py-0">
          <CardTitle className="text-center text-[var(--cor-3)] mb-6 uppercase tracking-tighter font-black text-xl">
            COMO CONSEGUIR O SEU ATENDIMENTO
          </CardTitle>

          <CardContent className="p-0">
            <div className="relative">

              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--cor-3)] z-0" />

              <div className="space-y-0">
                {FLUXOS[cerId - 1].steps.map((step, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={index} className={relative flex items-center justify-between w-full ${isEven ? 'flex-row' : 'flex-row-reverse'}}>

                      <div className="w-[60%]">
                        <div className="bg-white p-3 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
                          <div className="flex items-center gap-2 mb-3">
                            <Calendar className="w-5 h-5 text-gray-700" />
                            <h3 className="font-bold text-sm text-gray-800 leading-tight">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-[12px] text-gray-500 leading-tight">
                            {(step as any).description || "Siga as instruções desta etapa."}
                          </p>
                        </div>
                      </div>

                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[var(--cor-3)] z-10 shadow-sm" />
                      <div className="w-[80%]" />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pl-4 border-l-2 border-[var(--cor-3)]">

              <p className="text-[12px] font-bold text-[var(--cor-3)] uppercase tracking-widest mb-3">
                Documentos Necessários
              </p>

              <div className="flex flex-col gap-2">
                {FLUXOS[cerId - 1].documents.map((doc, i) => (
                  <p key={i} className="text-[14px] text-gray-600 leading-snug flex items-start">
                    <span className="mr-2 text-[var(--cor-3)] font-black">•</span>
                    {doc}
                  </p>
                ))}
              </div>
            </div>
          </CardContent>
          <div className="flex justify-end w-full mt-6">
            <Button
              variant="ghost"
              className="justify-end cursor-pointer text-white bg-[var(--cor-3)] border-none hover:bg-[var(--cor-3)] shadow-none transition-all"
              onClick={() => setShowFlow([false, cerId])}
            >
              Voltar
            </Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}