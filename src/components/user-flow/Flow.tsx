import { Button } from "@/components/ui/button";
import FLUXOS from "@/data/fluxo.json";
import CERS from "@/data/cers.json";

import {
  Landmark,
  Building2,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Instagram,
  Download,
} from "lucide-react";

interface FlowProps {
  setShowFlow: (show: [boolean, number | null]) => void;
  cerId: number;
}

function exportFlowToPrint(fluxoInfo: any, cerInfo: any): void {
  const steps = fluxoInfo.steps
    .map(
      (s: any, i: number) =>
        `<li style="margin-bottom:12px"><strong>Passo ${i + 1}: ${s.title}</strong><br/>${s.description}</li>`,
    )
    .join("");

  const docs = fluxoInfo.documents.map((d: string) => `<li>${d}</li>`).join("");

  const contato = [
    cerInfo?.endereco
      ? `<p><strong>Endereço:</strong> ${cerInfo.endereco.rua}, ${cerInfo.endereco.numero} - ${cerInfo.endereco.bairro}, ${cerInfo.cidade} - CEP ${cerInfo.endereco.cep}</p>`
      : "",
    cerInfo?.telefone
      ? `<p><strong>Telefone:</strong> ${cerInfo.telefone}</p>`
      : "",
    cerInfo?.email ? `<p><strong>E-mail:</strong> ${cerInfo.email}</p>` : "",
    cerInfo?.horario?.texto
      ? `<p><strong>Horário:</strong> ${cerInfo.horario.texto}</p>`
      : "",
    cerInfo?.site ? `<p><strong>Site:</strong> ${cerInfo.site}</p>` : "",
  ].join("");

  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <title>${fluxoInfo.title}</title>
      <style>
        body { font-family: Arial, sans-serif; font-size: 14px; color: #111; padding: 32px; max-width: 800px; margin: 0 auto; }
        h1 { font-size: 20px; margin-bottom: 4px; }
        h2 { font-size: 16px; margin: 24px 0 8px; border-bottom: 2px solid #1a5276; padding-bottom: 4px; color: #1a5276; }
        ul { padding-left: 20px; } li { margin-bottom: 6px; }
        p { margin: 4px 0; }
        .header { border-bottom: 3px solid #1a5276; padding-bottom: 12px; margin-bottom: 20px; }
        .footer { margin-top: 40px; font-size: 11px; color: #888; border-top: 1px solid #ddd; padding-top: 8px; }
        @media print { body { padding: 16px; } }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>${fluxoInfo.title}</h1>
        <p style="color:#555">Rede Estadual de Reabilitação da Paraíba — CER Fácil</p>
      </div>
      <h2>Contato e Localização</h2>
      ${contato}
      <h2>Passo a Passo para Conseguir Atendimento</h2>
      <ol>${steps}</ol>
      <h2>Documentos Necessários</h2>
      <ul>${docs}</ul>
      <div class="footer">Gerado pelo CER Fácil • cerfacil.pb.gov.br</div>
    </body>
    </html>
  `;

  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(html);
  win.document.close();
  win.focus();
  win.print();
}

export default function Flow({ setShowFlow, cerId }: FlowProps) {
  const fluxoInfo = FLUXOS[cerId - 1];
  const cerInfo = CERS[cerId - 1];

  const especialidadeIconMap: { [key: string]: React.ElementType } = {
    Administrativo: Building2,
    default: Landmark,
  };

  const Icone =
    especialidadeIconMap["Administrativo"] || especialidadeIconMap["default"];

  if (!fluxoInfo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
        <div className="bg-orange-50 p-4 rounded-full">
          <Landmark className="w-12 h-12 text-orange-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800">
            Fluxo não encontrado
          </h3>
          <p className="text-slate-500 max-w-xs mx-auto mt-2">
            Não conseguimos carregar as etapas de atendimento para o ID {cerId}.
            Verifique se o ID no fluxo.json corresponde ao ID no cers.json.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section
      aria-labelledby="user-flow"
      id="flow"
      className="px-6 py-8 min-h-[80vh] flex items-start justify-center bg-gradient-to-b from-white to-blue-50/30 relative"
    >
      <div className="mx-auto max-w-3xl w-full">
        <div className="text-left mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
            <div>
              <h2
                id="user-flow"
                className="font-bold text-3xl mb-2 text-black leading-tight"
              >
                Como conseguir seu atendimento
              </h2>
              <div className="w-16 h-1 bg-[var(--cor-bg-1)] rounded-full"></div>
            </div>
          </div>
          <div className="flex gap-2"></div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100 flex flex-col items-center text-center">
            <Icone className="w-12 h-12 text-[var(--cor-bg-1)] mb-3" />
            <h3 className="font-bold text-2xl mb-2">{fluxoInfo?.title}</h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100 space-y-4">
            <h4 className="font-bold text-2xl border-b border-gray-100 pb-2 mb-3">
              Contato e Localização
            </h4>

            {cerInfo?.endereco && (
              <div className="mb-2">
                <h5 className="text-xl font-bold text-[var(--cor-bg-1)] uppercase tracking-widest mb-1 flex items-center gap-2">
                  <MapPin className="w-6 h-6" /> Endereço
                </h5>
                <p className="text-xl text-gray-700 leading-snug pl-5 border-l-2 border-gray-100 ml-1.5">
                  {cerInfo.endereco.rua}, {cerInfo.endereco.numero} -{" "}
                  {cerInfo.endereco.bairro}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cerInfo?.telefone && (
                <div>
                  <h5 className="text-xl font-bold text-[var(--cor-bg-1)] uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Phone className="w-6 h-6" /> Telefone
                  </h5>
                  <p className="text-xl text-gray-700 leading-snug pl-5 border-l-2 border-gray-100 ml-1.5">
                    {cerInfo.telefone}
                  </p>
                </div>
              )}

              {cerInfo?.email && (
                <div>
                  <h5 className="text-xl font-bold text-[var(--cor-bg-1)] uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Mail className="w-6 h-6" /> Email
                  </h5>
                  <p
                    className="text-xl text-gray-700 leading-snug pl-5 border-l-2 border-gray-100 ml-1.5 truncate"
                    title={cerInfo.email}
                  >
                    {cerInfo.email}
                  </p>
                </div>
              )}

              {cerInfo?.site && (
                <div>
                  <h5 className="text-xl font-bold text-[var(--cor-bg-1)] uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Globe className="w-6 h-6" /> Site
                  </h5>
                  <a
                    href={cerInfo.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-[var(--cor-bg-1)] leading-snug pl-5 border-l-2 border-gray-100 ml-1.5 truncate block hover:underline"
                    title={cerInfo.site}
                  >
                    {cerInfo.site
                      .replace(/^https?:\/\//, "")
                      .replace(/\/$/, "")}
                  </a>
                </div>
              )}

              {cerInfo?.instagram && (
                <div>
                  <h5 className="text-xl font-bold text-[var(--cor-bg-1)] uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Instagram className="w-6 h-6" /> Instagram
                  </h5>
                  <a
                    href={cerInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-[var(--cor-bg-1)] leading-snug pl-5 border-l-2 border-gray-100 ml-1.5 truncate block hover:underline"
                    title={cerInfo.instagram}
                  >
                    @
                    {cerInfo.instagram
                      .replace(/^https?:\/\/www\.instagram\.com\//, "")
                      .replace(/\/$/, "")}
                  </a>
                </div>
              )}
            </div>

            <div>
              <h5 className="text-xl font-bold text-[var(--cor-bg-1)] uppercase tracking-widest mb-1 flex items-center gap-2">
                <Clock className="w-6 h-6" /> Horário
              </h5>
              <p className="text-xl text-gray-700 leading-snug pl-5 border-l-2 border-gray-100 ml-1.5">
                {cerInfo?.horario?.texto ||
                  "Segunda a Sexta, das 08:00 às 17:00"}
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100">
            <h4 className="font-bold text-2xl mb-4">Passo a Passo</h4>
            <ul className="relative border-l-2 border-blue-100 ml-3 space-y-4">
              {fluxoInfo.steps?.map((step: any, index: number) => (
                <li
                  aria-label={`Passo ${index + 1}: ${step.title}`}
                  key={index}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[12px] top-1 w-6 h-6 rounded-full bg-white border-[3px] border-[var(--cor-bg-1)] shadow-sm" />

                  <div className="bg-gray-50/50 p-3 rounded-lg border border-gray-100 transition-all hover:shadow-sm hover:border-blue-100">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-6 h-6 text-[var(--cor-bg-1)]" />
                      <span className="font-bold text-2xl text-gray-800 leading-tight">
                        {step.title}
                      </span>
                    </div>
                    <p className="text-2xl text-gray-600 leading-snug">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100">
            <h4 className="font-bold text-2xl mb-3">Documentos Necessários</h4>
            <ul className="space-y-2">
              {fluxoInfo?.documents.map((doc: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start text-2xl text-gray-700 leading-snug"
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

        <div className="mt-6 flex gap-3">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 text-2xl py-5 rounded-md border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)] hover:text-white focus-visible:ring-[10px] focus-visible:ring-[var(--cor-destaque)] focus-visible:ring-offset-2 outline-none"
            onClick={() => setShowFlow([false, cerId])}
          >
            Voltar
          </Button>
          <Button
            size="sm"
            onClick={() => exportFlowToPrint(fluxoInfo, cerInfo)}
            className="flex-1 flex items-center justify-center gap-2 text-2xl py-5 rounded-md bg-[var(--cor-bg-1)] text-white border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)]/80 hover:border-[var(--cor-bg-1)]/80 focus-visible:ring-[10px] focus-visible:ring-[var(--cor-destaque)] focus-visible:ring-offset-2 outline-none"
          >
            <Download className="w-6 h-6" />
            Baixar informações
          </Button>
        </div>
      </div>
    </section>
  );
}
