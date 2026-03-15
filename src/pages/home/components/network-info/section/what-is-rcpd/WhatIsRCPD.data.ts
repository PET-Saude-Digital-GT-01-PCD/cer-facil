import { Heart, Users, Shield, LucideIcon } from "lucide-react";

export interface RcpdFeature {
  id: string;
  title: string;
  desc: string | { 
    intro: string; 
    list: string[]; 
    outro: string; 
  };
  icon: LucideIcon;
}

export const featuresData: RcpdFeature[] = [
  {
    id: "cuidado-todas-idades",
    title: "Cuidado para Todas as Idades",
    icon: Heart,
    desc: "A Rede foi criada  para garantir que as pessoas com deficiência tenham um atendimento de qualidade e mais acessível  no SUS. O objetivo é oferecer acompanhamento completo para as todas as idades.",
  },
  {
    id: "prevencao",
    title: "Prevenção",
    icon: Shield,
    desc: {
      intro: "O trabalho da Rede foca em três frentes:",
      list: [
        "evitar doenças (prevenção)",
        "diagnosticar deficiências o quanto antes para iniciar o tratamento (identificação precoce)",
        "contribuir na recuperação da autonomia (reabilitação)."
      ],
    outro: "Tudo isso é pensado respeitando as necessidades específicas de cada tipo de deficiência."
  },
  },
  {
    id: "disponivel-todas-pessoas",
    title: "Disponível Para Todas as Pessoas com Deficiência",
    icon: Users,
    desc: "A Rede busca garantir  que o atendimento seja adequado e acessível para todos, superando barreiras e promovendo a inclusão. Assim, todas as pessoas com deficiência podem ter oportunidades iguais para  cuidar da saúde com dignidade e respeito às necessidades de cada um.",
  },
];
