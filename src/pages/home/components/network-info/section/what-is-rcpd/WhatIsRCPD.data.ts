import { Heart, Users, Shield, LucideIcon } from "lucide-react";

export interface RcpdFeature {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const featuresData: RcpdFeature[] = [
  {
    id: "cuidado-todas-idades",
    title: "Cuidado Para Todas as Idades",
    icon: Heart,
    desc: "A Rede existe para garantir que as pessoas com deficiência tenham um atendimento melhor e mais fácil no SUS. O objetivo é oferecer um cuidado completo e de qualidade em todas as etapas da vida, desde a infância até a velhice.",
  },
  {
    id: "prevencao",
    title: "Prevenção",
    icon: Shield,
    desc: "O trabalho da Rede foca em três frentes: evitar doenças (prevenção), descobrir deficiências o quanto antes para começar o tratamento cedo (identificação precoce) e ajudar na recuperação da autonomia (reabilitação). Tudo isso é feito respeitando as necessidades específicas de cada tipo de deficiência.",
  },
  {
    id: "disponivel-todas-pessoas",
    title: "Disponível Para Todas as Pessoas com Deficiência",
    icon: Users,
    desc: "A Rede garante que o atendimento seja justo e acessível para todos. O foco é eliminar barreiras e promover a inclusão, para que todas as pessoas com deficiência tenham as mesmas oportunidades de cuidar da sua saúde com dignidade.",
  },
];
