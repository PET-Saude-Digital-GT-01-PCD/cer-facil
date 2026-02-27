import { Button } from "@/components/ui/button";
import { Landmark, Building2, Calendar, MapPin, Phone, Mail, Clock } from "lucide-react";
import FLUXOS from "../../../../data/fluxo.json";
import CERS from "@/data/cers.json";

interface FlowProps {
  setShowFlow: (show: [boolean, number]) => void;
  cerId: number;
}

export default function Flow({ setShowFlow, cerId }: FlowProps) {
  // Pega as informações baseadas no ID passado
  const fluxoInfo = FLUXOS[cerId - 1];
  const cerInfo = CERS[cerId - 1];

  const especialidadeIconMap: { [key: string]: React.ElementType } = {
    "Administrativo": Building2,
    "default": Landmark
  };

  const Icone = especialidadeIconMap["Administrativo"] || especialidadeIconMap["default"];

  return (
    <section className="px-6 py-8 min-h-[80vh] flex items-start justify-center bg-gradient-to-b from-white to-blue-50/30 relative">
      {/* Container reduzido para max-w-3xl para melhor leitura em coluna única */}
      <div className="mx-auto max-w-3xl w-full">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-left mb-6 flex justify-between items-end">
          <div>
            <h2 className="font-bold text-2xl md:text-3xl mb-2 text-black leading-tight">
              Como conseguir seu atendimento
            </h2>
            <div className="w-16 h-1 bg-[var(--cor-3)] rounded-full"></div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex text-[var(--cor-3)] border-[var(--cor-3)] hover:bg-[var(--cor-3)] hover:text-white transition-all"
            onClick={() => setShowFlow([false, cerId])}
          >
            Voltar para a busca
          </Button>
        </div>

        {/* ESTRUTURA DE COLUNA ÚNICA (Stack Vertical) */}
        <div className="flex flex-col gap-5">
          
          {/* 1. Card Principal de Apresentação */}
          <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100 flex flex-col items-center text-center">
            <Icone className="w-10 h-10 text-[var(--cor-3)] mb-3" />
            <h3 className="font-bold text-lg mb-2">{fluxoInfo?.title}</h3>
            <p className="text-sm leading-relaxed text-gray-700 text-justify">
              {cerInfo?.info || "Informação detalhada sobre o CER selecionado."}
            </p>
          </div>

          {/* 2. Card de Contato e Endereço */}
          <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100 space-y-4">
            <h3 className="font-bold text-lg border-b border-gray-100 pb-2 mb-3">Contato e Localização</h3>

            {cerInfo?.endereco && (
              <div className="mb-2">
                <p className="text-xs font-bold text-[var(--cor-3)] uppercase tracking-widest mb-1 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> Endereço
                </p>
                <p className="text-sm text-gray-700 leading-snug pl-5 border-l-2 border-gray-100 ml-1.5">
                  {cerInfo.endereco.rua}, {cerInfo.endereco.numero} - {cerInfo.endereco.bairro}
                </p>
              </div>
            )}

            {/* Telefones e Emails lado a lado para economizar espaço vertical */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cerInfo?.telefone && (
                <div>
                  <p className="text-xs font-bold text-[var(--cor-3)] uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" /> Telefone
                  </p>
                  <p className="text-sm text-gray-700 leading-snug pl-5 border-l-2 border-gray-100 ml-1.5">
                    {cerInfo.telefone}
                  </p>
                </div>
              )}

              {cerInfo?.email && (
                <div>
                  <p className="text-xs font-bold text-[var(--cor-3)] uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" /> Email
                  </p>
                  <p className="text-sm text-gray-700 leading-snug pl-5 border-l-2 border-gray-100 ml-1.5 truncate" title={cerInfo.email}>
                    {cerInfo.email}
                  </p>
                </div>
              )}
            </div>

            <div>
              <p className="text-xs font-bold text-[var(--cor-3)] uppercase tracking-widest mb-1 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" /> Horário
              </p>
              <p className="text-sm text-gray-700 leading-snug pl-5 border-l-2 border-gray-100 ml-1.5">
                Segunda a Sexta, das 08:00 às 17:00
              </p>
            </div>
          </div>

          {/* 3. Card do Passo a Passo (Timeline) */}
          <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100">
            <h3 className="font-bold text-lg mb-4">Passo a Passo</h3>
            
            <div className="relative border-l-2 border-blue-100 ml-3 space-y-4">
              {fluxoInfo?.steps.map((step: any, index: number) => (
                <div key={index} className="relative pl-6">
                  {/* Indicador circular da timeline */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-[3px] border-[var(--cor-3)] shadow-sm" />
                  
                  <div className="bg-gray-50/50 p-3 rounded-lg border border-gray-100 transition-all hover:shadow-sm hover:border-blue-100">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-[var(--cor-3)]" />
                      <h4 className="font-bold text-base text-gray-800 leading-tight">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">
                      {step.description || "Siga as instruções desta etapa."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Card de Documentos Necessários */}
          <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100">
            <h3 className="font-bold text-lg mb-3">Documentos Necessários</h3>
            <ul className="space-y-2">
              {fluxoInfo?.documents.map((doc: string, i: number) => (
                <li key={i} className="flex items-start text-sm text-gray-700 leading-snug">
                  <span className="mr-2 text-[var(--cor-3)] font-black text-lg leading-none">•</span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Botão Voltar Mobile */}
        <div className="mt-6 flex justify-center md:hidden">
          <Button
            size="sm"
            className="w-full text-white bg-[var(--cor-3)] hover:bg-orange-600 transition-all text-sm py-5 rounded-xl"
            onClick={() => setShowFlow([false, cerId])}
          >
            Voltar para a busca
          </Button>
        </div>

      </div>
    </section>
  );
}