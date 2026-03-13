import { Button } from "@/components/ui/button";
import {
  Landmark,
  Building2,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import FLUXOS from "../../../../data/fluxo.json";
import CERS from "@/data/cers.json";

interface FlowProps {
  setShowFlow: (show: [boolean, number | null]) => void;
  cerId: number;
}

export default function Flow({ setShowFlow, cerId }: FlowProps) {

  const fluxoInfo = FLUXOS[cerId - 1];
  const cerInfo = CERS[cerId - 1];

  const especialidadeIconMap: { [key: string]: React.ElementType } = {
    Administrativo: Building2,
    default: Landmark,
  };

  const Icone = especialidadeIconMap["Administrativo"] || especialidadeIconMap["default"];

  if (!fluxoInfo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
        <div className="bg-orange-50 p-4 rounded-full">
          <Landmark className="w-12 h-12 text-orange-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800">Fluxo não encontrado</h3>
          <p className="text-slate-500 max-w-xs mx-auto mt-2">
            Não conseguimos carregar as etapas de atendimento para o ID {cerId}. 
            Verifique se o ID no fluxo.json corresponde ao ID no cers.json.
          </p>
        </div>
        <Button 
          className="bg-[var(--cor-3)] hover:bg-orange-600 text-white px-8"
          onClick={() => setShowFlow([false, null])}
        >
          Voltar para a lista
        </Button>
      </div>
    );
  }

  return (
    <section
      id="flow"
      className="px-6 py-8 min-h-[80vh] flex items-start justify-center bg-gradient-to-b from-white to-blue-50/30 relative"
    >
      <div className="mx-auto max-w-3xl w-full">
        <div className="text-left mb-6 flex justify-between items-end">
          <div>
            <h2 className="font-bold text-3xl mb-2 text-black leading-tight">
              Como conseguir seu atendimento
            </h2>
            <div className="w-16 h-1 bg-[var(--cor-bg-1)] rounded-full"></div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex text-xl text-[var(--cor-bg-1)] border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)] hover:text-white transition-all"
            onClick={() => setShowFlow([false, cerId])}
          >
            Voltar para a busca
          </Button>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100 flex flex-col items-center text-center">
            <Icone className="w-12 h-12 text-[var(--cor-bg-1)] mb-3" />
            <h3 className="font-bold text-2xl mb-2">{fluxoInfo?.title}</h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100 space-y-4">
            <h3 className="font-bold text-2xl border-b border-gray-100 pb-2 mb-3">
              Contato e Localização
            </h3>

            {cerInfo?.endereco && (
              <div className="mb-2">
                <p className="text-xl font-bold text-[var(--cor-bg-1)] uppercase tracking-widest mb-1 flex items-center gap-2">
                  <MapPin className="w-6 h-6" /> Endereço
                </p>
                <p className="text-xl text-gray-700 leading-snug pl-5 border-l-2 border-gray-100 ml-1.5">
                  {cerInfo.endereco.rua}, {cerInfo.endereco.numero} - {cerInfo.endereco.bairro}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cerInfo?.telefone && (
                <div>
                  <p className="text-xl font-bold text-[var(--cor-bg-1)] uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Phone className="w-6 h-6" /> Telefone
                  </p>
                  <p className="text-xl text-gray-700 leading-snug pl-5 border-l-2 border-gray-100 ml-1.5">
                    {cerInfo.telefone}
                  </p>
                </div>
              )}

              {cerInfo?.email && (
                <div>
                  <p className="text-xl font-bold text-[var(--cor-bg-1)] uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Mail className="w-6 h-6" /> Email
                  </p>
                  <p className="text-xl text-gray-700 leading-snug pl-5 border-l-2 border-gray-100 ml-1.5 truncate" title={cerInfo.email}>
                    {cerInfo.email}
                  </p>
                </div>
              )}
            </div>

            <div>
              <p className="text-xl font-bold text-[var(--cor-bg-1)] uppercase tracking-widest mb-1 flex items-center gap-2">
                <Clock className="w-6 h-6" /> Horário
              </p>
              <p className="text-xl text-gray-700 leading-snug pl-5 border-l-2 border-gray-100 ml-1.5">
                {cerInfo?.horario?.texto || "Segunda a Sexta, das 08:00 às 17:00"}
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100">
            <h3 className="font-bold text-2xl mb-4">Passo a Passo</h3>
            <div className="relative border-l-2 border-blue-100 ml-3 space-y-4">
              {fluxoInfo.steps?.map((step: any, index: number) => (
                <div key={index} className="relative pl-8">

                  <div className="absolute -left-[12px] top-1 w-6 h-6 rounded-full bg-white border-[3px] border-[var(--cor-bg-1)] shadow-sm" />

                  <div className="bg-gray-50/50 p-3 rounded-lg border border-gray-100 transition-all hover:shadow-sm hover:border-blue-100">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-6 h-6 text-[var(--cor-bg-1)]" />
                      <h4 className="font-bold text-xl text-gray-800 leading-tight">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xl text-gray-600 leading-snug">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100">
            <h3 className="font-bold text-2xl mb-3">Documentos Necessários</h3>
            <ul className="space-y-2">
              {fluxoInfo?.documents.map((doc: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start text-xl text-gray-700 leading-snug"
                >
                  <span className="mr-2 text-[var(--cor-bg-1)] font-black text-2xl leading-none">
                    •
                  </span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex justify-center md:hidden">
          <Button
            size="sm"
            className="w-full text-white bg-[var(--cor-bg-1)] hover:bg-orange-600 transition-all text-xl py-5 rounded-xl"
            onClick={() => setShowFlow([false, cerId])}
          >
            Voltar para a busca
          </Button>
        </div>
      </div>
    </section>
  );
}
