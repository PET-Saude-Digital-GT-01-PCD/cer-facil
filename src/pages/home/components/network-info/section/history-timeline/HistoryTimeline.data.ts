export interface TimelineItem {
  id: number;
  title: string;
  description: string;
  detailedMessage: string;
  colorClass: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Antes de 2012: Atendimentos Espalhados",
    description:
      "Antigamente, os serviços de saúde não conversavam entre si. O atendimento era 'separado' sem que os profissionais trocassem informações.",
    detailedMessage:
      "A Rede de Apoio à Pessoa com Deficiência foi estruturada no Brasil a partir da necessidade de superar um modelo de cuidado fragmentado, no qual os atendimentos eram pontuais e pouco articulados entre si.",
    colorClass: "bg-[var(--cor-bg-1)]",
  },
  {
    id: 2,
    title: "2012: O Nascimento da Rede (RCPD)",
    description:
      "Neste ano, o cuidado à pessoa com deficiência tornou-se oficialmente uma prioridade organizada dentro do SUS.",
    detailedMessage:
      "Em 2012, no âmbito do Sistema Único de Saúde (SUS), a Rede de Cuidado à Pessoa com Deficiência (RCPD) foi oficialmente instituída como parte da Rede de Atenção à Saúde (RAS), integrada ao Plano Nacional dos Direitos da Pessoa com Deficiência — o Viver sem Limite.",
    colorClass: "bg-[var(--cor-bg-1)]",
  },
  {
    id: 3,
    title: "Expansão dos Serviços Oferecidos",
    description:
      "Com o passar do tempo, a rede cresceu. Foram criados mais centros de reabilitação e aumentou-se a entrega de equipamentos.",
    detailedMessage:
      "Desde então, a rede vem sendo ampliada e aprimorada, incorporando novos serviços, fortalecendo a atenção básica, os centros especializados de reabilitação e a articulação com outras políticas públicas.",
    colorClass: "bg-[var(--cor-bg-1)]",
  },
  {
    id: 4,
    title: "Consolidação do Cuidado Unificado",
    description:
      "Houve uma mudança importante no olhar: em vez de olhar apenas para a deficiência, a saúde passou a olhar para a pessoa.",
    detailedMessage:
      "Essa evolução reflete uma mudança de perspectiva: do cuidado centrado apenas na deficiência para um cuidado centrado na pessoa e em seus direitos.",
    colorClass: "bg-[var(--cor-bg-1)]",
  },
  {
    id: 5,
    title: "Hoje: Uma Rede em Construção",
    description:
      "Atualmente, o trabalho continua para melhorar o que já existe, adaptando o atendimento às necessidades de cada região.",
    detailedMessage:
      "Hoje, a rede segue em constante construção, adaptando-se às demandas sociais, territoriais e às diferentes realidades das pessoas com deficiência no país.",
    colorClass: "bg-[var(--cor-bg-1)]",
  },
];
