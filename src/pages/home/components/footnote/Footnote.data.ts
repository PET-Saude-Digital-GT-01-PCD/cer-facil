import { Instagram, AtSign, Github, LucideIcon } from "lucide-react";
import brasaoDaParaibaLogo from "@/assets/images/footnote-images/brasao-da-paraiba.png";
import funadLogo from "@/assets/images/footnote-images/funad.jpeg";
import ministerioLogo from "@/assets/images/footnote-images/ministerioLogo.png";
import ufpbLogo from "@/assets/images/footnote-images/UFPB.png";
import susDigital from "@/assets/images/footnote-images/sus-digital.png";

export interface SocialButton {
  Icon: LucideIcon;
  alt: string;
  href?: string;
}

export const socialButtonsData: SocialButton[] = [
  {
    Icon: Instagram,
    alt: "Acessar Instagram do PET Saúde PCD",
    href: "https://www.instagram.com/petsaude_pcd?igsh=N2d6czAyam0zNjRt",
  },
  {
    Icon: AtSign,
    alt: "Enviar Email para o projeto",
    href: "mailto:pet.saude.pcd@gmail.com",
  },
  {
    Icon: Github,
    alt: "Acessar repositório no GitHub",
    href: "https://github.com/PET-Saude-Digital-GT-01-PCD",
  },
];

export interface RealizationLogo {
  src: string;
  alt: string;
}

export const realizationLogosData: RealizationLogo[] = [
  { src: susDigital, alt: "Logo SUS Digital" },
  { src: brasaoDaParaibaLogo, alt: "Logo Brasão da Paraíba" },
  { src: ufpbLogo, alt: "Logo da UFPB" },
  { src: funadLogo, alt: "Logo da FUNAD" },
  { src: ministerioLogo, alt: "Logo do Ministério da Saúde" },
];

export const aboutProjectData = {
  title: "O que é o PET-Saúde Digital",
  intro:
    "O PET-Saúde Digital é um projeto que teve início em 2025 na Universidade Federal da Paraíba (UFPB) e que tem o objetivo é modernizar o Sistema Único de Saúde (SUS). O projeto como um todo é formado por 12 Grupos Tutoriais (GTs), onde cada grupo está relacionado a uma área diferente da Saúde Digital no SUS e é composto por professores, profissionais da saúde e estudantes de graduação. Trabalhamos com o desenvolvimento de pesquisas e atividades que vão para além da universidade, tudo isso para envolver a população e criar soluções digitais para problemas reais.",
  sections: [
    {
      id: "gt01",
      subtitle: "GT-01 PCD",
      content:
        "O presente projeto foi desenvolvido pelo GT-01 Atenção Especializada à Pessoa com Deficiência. Dentro do PET-Saúde Digital, nosso papel é tornar o SUS mais acessível às pessoas com deficiência por meio por meio das ferramentas digitais para garantir à elas acesso a saúde de qualidade. As atividades do GT-01 são desenvolvidas em conjunto com a Secretaria de Estado de Saúde da Paraíba (SES-PB) e a Fundação Centro Integrado de Apoio à Pessoa com Deficiência (FUNAD), que foram fundamentais para o desenvolvimento desse site.",
    },
    {
      id: "motivo",
      subtitle: "Por que fizemos esse site?",
      content:
        "O site foi criado para resolver um problema muito comum das pessoas com deficiência e suas famílias: a dificuldade de encontrar informações claras, organizadas e fáceis de entender sobre como conseguir atendimento nos Centros Especializados em Reabilitação (CERs) e Oficinas Ortopédicas (OPMs) da Paraíba. Por isso, ele conta com explicações de como conseguir o primeiro atendimento e detalhes sobre as localizações de cada CER. Antes, as informações encontravam-se dispersas, ou até mesmo indisponíveis na internet, mas agora as pessoas com deficiência e suas famílias possuem um espaço acessível onde podem buscar orientação.",
    },
  ],
};
