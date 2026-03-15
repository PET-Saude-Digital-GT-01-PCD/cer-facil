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
    "O PET-Saúde: Informação e Saúde Digital é um projeto da Universidade Federal da Paraíba (UFPB) que une o ensino, os serviços de saúde e a comunidade. O nosso objetivo é usar a tecnologia para modernizar o Sistema Único de Saúde (SUS). A equipe do projeto é formada por: Professores da universidade (tutores); Profissionais de saúde (preceptores); Estudantes de graduação (monitores). O trabalho é dividido em 12 grupos, chamados de Grupos de Aprendizagem Tutorial (GTs). Cada grupo trabalha com um tema diferente nas áreas de ensino, pesquisa e ações para a comunidade. O aprendizado acontece na prática: os grupos buscam resolver problemas reais que a saúde digital enfrenta no estado da Paraíba.",
  sections: [
    {
      id: "gt01",
      subtitle: "GT-01 PCD",
      content:
        "Um desses grupos é o GT-01 PCD, focado em melhorar o atendimento digital para as Pessoas com Deficiência. Para nós, garantir que os sistemas do SUS sejam acessíveis para todos não é apenas uma meta de tecnologia. É um direito humano e um dever ético, garantido pela Lei Brasileira de Inclusão (LBI). O grupo trabalha em parceria com a Secretaria de Estado da Saúde da Paraíba e com a FUNAD (Fundação Centro Integrado de Apoio à Pessoa com Deficiência). A equipe é liderada pelos professores Eduardo e Robson, da Fisioterapia, e conta com estudantes de Fisioterapia, Terapia Ocupacional, Ciência da Computação, Ciência de Dados e Engenharia da Computação.",
    },
    {
      id: "motivo",
      subtitle: "Por que fizemos essa aplicação?",
      content:
        "O aplicativo foi criado para resolver um problema muito comum das pessoas com deficiência e suas famílias: a dificuldade de achar informações claras, organizadas e fáceis de entender sobre como começar o atendimento nos Centros Especializados em Reabilitação (CERs) e nas Oficinas Ortopédicas (OPMs) da Paraíba. Muitas vezes, essas informações ficam espalhadas, usam palavras difíceis e não explicam o que fazer na prática. Por isso, o sistema junta tudo em um só lugar. Ele traz explicações diretas sobre como conseguir o primeiro atendimento, além de oferecer um mapa interativo, opções fáceis de busca e os detalhes sobre os locais de saúde. Com isso, o aplicativo dá mais independência aos usuários, facilita a busca por tratamento e ajuda mais pessoas a usarem os serviços da Rede de Cuidados da Pessoa com Deficiência.",
    },
  ],
};
