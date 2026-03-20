import { ChevronDown, Activity, Building2, Hospital, LucideIcon } from "lucide-react";

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

interface AttentionComponent {
  id: string;
  title: string;
  content: string;
}

interface AttentionLevel {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  borderClass: string;
  hoverClass: string;
  components: AttentionComponent[];
}

const attentionLevelsData: AttentionLevel[] = [
  {
    id: "basic",
    title: "Atenção Básica",
    description:
      "É o primeiro lugar onde você deve buscar ajuda na Rede de Cuidados à Pessoa com Deficiência. O foco aqui é organizar o seu atendimento, prevenir doenças e promover hábitos saudáveis para melhorar sua qualidade de vida.",
    icon: Activity,
    colorClass: "bg-[color-mix(in_srgb,var(--cor-bg-1),white_0%)]",
    borderClass: "border-[color-mix(in_srgb,var(--cor-bg-1),white_0%)]",
    hoverClass: "hover:border-[color-mix(in_srgb,var(--cor-bg-1),white_0%)]",
    components: [
      {
        id: "ubs",
        title: "Unidades Básicas de Saúde (UBS)",
        content:
          'As UBS (conhecidas como "Postos de Saúde") são a principal porta de entrada para o SUS. Lá, as equipes de Saúde da Família cuidam de você e da sua comunidade, realizando consultas, exames, tratamentos e acompanhamento de saúde de perto.',
      },
      {
        id: "emulti",
        title: "Equipes Multiprofissionais (eMulti)",
        content:
          "São grupos formados por profissionais de diversas áreas (como psicólogos, fisioterapeutas e nutricionistas) que trabalham junto com as equipes do Posto de Saúde. Eles ajudam a cuidar da população de cada bairro e buscam parcerias com escolas, assistência social e centros de lazer para oferecer um cuidado completo!",
      },
      {
        id: "odontologica",
        title: "Atenção Odontológica",
        content:
          "O tratamento dentário para pessoas com deficiência é planejado de acordo com a necessidade de cada paciente, respeitando suas condições físicas e de saúde. O atendimento inclui desde a limpeza e prevenção até tratamentos mais específicos, garantindo que o paciente seja bem acompanhado por toda a rede de saúde.",
      },
    ],
  },
  {
    id: "rehabilitation",
    title: "Atenção Especializada em Reabilitação",
    description:
      "São serviços focados exclusivamente no tratamento de reabilitação. Aqui, diversos profissionais trabalham juntos para oferecer um cuidado mais detalhado e específico para as necessidades das pessoas com deficiência.",
    icon: Building2,
    colorClass: "bg-[color-mix(in_srgb,var(--cor-bg-1),white_0%)]",
    borderClass: "border-[color-mix(in_srgb,var(--cor-bg-1),white_0%)]",
    hoverClass: "hover:border-[color-mix(in_srgb,var(--cor-bg-1),white_0%)]",
    components: [
      {
        id: "cer",
        title: "Centros Especializados em Reabilitação (CER)",
        content:
          "Os CERs cuidam da saúde de forma completa. Eles fazem diagnósticos, oferecem tratamentos e entregam equipamentos de tecnologia assistiva (como cadeiras de rodas), além de cuidar da manutenção desses itens. Cada paciente recebe um plano de tratamento feito sob medida e, se precisar, o centro garante o transporte adaptado para as consultas.",
      },
      {
        id: "ceo",
        title: "Centros de Especialidades Odontológicas (CEO)",
        content:
          "São centros que oferecem tratamentos dentários mais complexos para pessoas com deficiência. Eles servem de referência para a cidade ou região e também dão apoio técnico aos dentistas dos postos de saúde (UBS) para garantir o melhor atendimento.",
      },
      {
        id: "oficinas",
        title: "Oficinas Ortopédicas",
        content:
          "São os locais que fabricam, ajustam e consertam órteses, próteses e aparelhos que ajudam a caminhar ou se movimentar. O trabalho dessas oficinas é fundamental para que a pessoa com deficiência tenha mais independência e consiga se deslocar com facilidade no dia a dia.",
      },
    ],
  },
  {
    id: "hospital",
    title: "Atenção Hospitalar e de Urgência e Emergência",
    description:
      "É o atendimento imediato feito em hospitais ou prontos-socorros para pessoas com deficiência que estejam passando por uma situação crítica ou grave de saúde.",
    icon: Hospital,
    colorClass: "bg-[color-mix(in_srgb,var(--cor-bg-1),black_0%)]",
    borderClass: "border-[color-mix(in_srgb,var(--cor-bg-1),white_0%)]",
    hoverClass: "hover:border-[color-mix(in_srgb,var(--cor-bg-1),black_0%)]",
    components: [
      {
        id: "urgencia",
        title: "Serviços Hospitalares, de Urgência e Emergência",
        content:
          "Esses serviços garantem que a pessoa com deficiência seja atendida com rapidez, segurança e de forma adequada em casos de emergência ou riscos graves. Os hospitais devem ser acessíveis, oferecer cuidados especializados para cada tipo de deficiência e garantir que o paciente continue sendo acompanhado pela rede de saúde mesmo depois de receber alta.",
      },
    ],
  },
];

export default function AttentionLevel() {
  return (
    <section 
      aria-labelledby="att-level" 
      id="attention-level" 
      className="px-6 py-20 relative">
      <div className="mx-auto max-w-6xl">
        <header className="text-left mb-16">
          <h2 id="att-level" className="text-4xl font-bold mb-4">Níveis de Atenção</h2>
          <div className="w-20 h-1.5 bg-[var(--cor-bg-1)] rounded-full mb-6"></div>
          <p className="text-slate-600 mt-4 max-w-2xl text-2xl opacity-90">
            Estrutura integrada de cuidado em diferentes níveis de complexidade
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attentionLevelsData.map((level) => {
            const Icon = level.icon;

            return (
              <Card
                key={level.id}
                className={`flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 border-2 bg-white ${level.borderClass} ${level.hoverClass} relative overflow-hidden group rounded-2xl`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-2 ${level.colorClass} transition-all duration-300`}
                ></div>

                <CardHeader className="text-center pb-6 pt-12">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`${level.colorClass} p-5 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    <h3>
                      {level.title}
                    </h3>
                  </CardTitle>
                  <CardDescription
                    className="text-gray-500 text-xl leading-relaxed px-4"
                  >
                    {level.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 px-6 pb-10">
                  <Accordion type="single" collapsible className="w-full">
                    {level.components.map((component) => (
                      <AccordionItem
                        key={component.id}
                        value={component.id}
                        className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] border-gray-100"
                      >
                        <AccordionTrigger className="text-xl font-bold text-gray-700 hover:text-[var(--cor-bg-1)] transition-colors py-4">
                          {component.title}
                        </AccordionTrigger>
                        <AccordionContent
                          className="text-xl text-gray-600 leading-relaxed bg-[color-mix(in_srgb,var(--cor-bg-2),white_95%)] p-4 rounded-xl mt-1 border border-orange-100/30"
                        >
                          <span>{component.content}</span>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
