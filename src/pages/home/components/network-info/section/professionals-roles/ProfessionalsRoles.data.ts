import {
  Accessibility,
  Ear,
  Eye,
  Brain,
  Puzzle,
  LucideIcon,
} from "lucide-react";

export interface FilterOption {
  id: number;
  label: string;
  icon: LucideIcon;
}

export const filterOptionsData: FilterOption[] = [
  { id: 1, label: "Física", icon: Accessibility },
  { id: 2, label: "Auditiva", icon: Ear },
  { id: 3, label: "Visual", icon: Eye },
  { id: 4, label: "Intelectual", icon: Brain },
  { id: 5, label: "TEA", icon: Puzzle },
];

export interface Professional {
  professional: string;
  description: string;
  service: number[];
}

// Substitua este array pelo conteúdo do seu professionals-functions.json
export const professionalsData: Professional[] = [
  {
    professional: "Fisioterapeuta",
    description:
      "Profissional responsável por avaliar e tratar alterações de movimento e postura...",
    service: [1, 4, 5],
  },
  {
    professional: "Fonoaudiólogo",
    description: "Trabalha com os diferentes aspectos da comunicação humana...",
    service: [2, 4, 5],
  },
  {
    professional: "Terapeuta Ocupacional",
    description:
      "Ajuda a pessoa a ter mais independência para realizar atividades do cotidiano, como se vestir, comer ou trabalhar. Ele cria oficinas, adapta o ambiente e treina o uso de aparelhos que facilitam a rotina do paciente.",
    service: [1, 3, 4, 5],
  },

  {
    professional: "Enfermeiro",
    description:
      "Faz consultas, curativos e administra remédios, cuidando de perto da evolução do paciente. Ele organiza os cuidados diários, orienta a família e lidera a equipe de enfermagem para garantir um atendimento seguro.",
    service: [1, 2, 3, 4, 5],
  },

  {
    professional: "Técnico de Enfermagem",
    description:
      "Oferece cuidado direto no dia a dia, ajudando o paciente a se recuperar e ter mais qualidade de vida, sempre com um olhar humano e apoiando os outros profissionais de saúde.",
    service: [1, 2, 3, 4, 5],
  },

  {
    professional: "Psicólogo",
    description:
      "Realiza avaliações e sessões de terapia para cuidar da saúde mental e emocional. Ele conversa com o paciente e a família, ajuda a entender os sentimentos e orienta sobre como lidar com os desafios.",
    service: [1, 2, 3, 4, 5],
  },

  {
    professional: "Assistente Social",
    description:
      "Identifica as necessidades sociais do paciente e ajuda a garantir seus direitos, ligando-o a serviços como escola e auxílios do governo. Ele trabalha para que a pessoa seja incluída na sociedade e incentiva a participação no tratamento.",
    service: [1, 2, 3, 4, 5],
  },

  {
    professional: "Fonoaudiólogo",
    description:
      "Cuida de tudo que envolve a comunicação (fala, audição e voz) e também de problemas para mastigar ou engolir alimentos. Ele faz testes, emite laudos e realiza terapias para melhorar a forma como o paciente se comunica e se alimenta.",
    service: [1, 2, 4, 5],
  },

  {
    professional: "Nutricionista",
    description:
      "Acompanha o peso e a saúde alimentar, criando dietas personalizadas para as necessidades de cada um. Ele ensina sobre alimentação saudável e ajuda no treinamento de como comer melhor no dia a dia.",
    service: [1, 2, 3, 4, 5],
  },

  {
    professional: "Ortoptista",
    description:
      'Funciona como um "fisioterapeuta para os olhos", tratando problemas como o estrabismo (olhos desalinhados) ou a visão dupla para melhorar o conforto visual.',
    service: [3],
  },

  {
    professional: "Pedagogo",
    description:
      "Especialista em ensino que cria formas diferentes de ajudar crianças e adultos a aprenderem melhor, superando dificuldades com materiais e aulas adaptadas.",
    service: [4, 5],
  },

  {
    professional: "Psicopedagogo",
    description:
      "Une a psicologia e a educação para entender por que alguém tem dificuldade de aprender. Ele cria estratégias personalizadas para ajudar pessoas com deficiência a ganharem novos conhecimentos na escola ou no dia a dia.",
    service: [4, 5],
  },

  {
    professional: "Musicoterapeuta",
    description:
      "Usa a música, como o ritmo e o canto, para ajudar no bem-estar emocional e na recuperação física, sendo muito útil no cuidado do autismo e da coordenação motora.",
    service: [1, 4, 5],
  },

  {
    professional: "Arteterapeuta",
    description:
      "Usa a arte (desenho, pintura, criação) para ajudar o paciente a se expressar e se recuperar. O importante aqui não é a beleza do desenho, mas como a arte ajuda a pessoa a se sentir melhor.",
    service: [1, 4, 5],
  },

  {
    professional: "Massoterapeuta",
    description:
      "Especialista em massagens que ajudam a aliviar dores, reduzir o estresse e melhorar a circulação do corpo, trazendo relaxamento e bem-estar.",
    service: [1],
  },

  {
    professional: "Profissional de Educação Física",
    description:
      "Ajuda na recuperação do corpo através de exercícios físicos planejados, complementando o trabalho da fisioterapia para que a pessoa ganhe mais fôlego e disposição.",
    service: [1, 4, 5],
  },

  {
    professional: "Psicomotricista",
    description:
      "Estuda como o movimento do corpo está ligado às emoções e ao pensamento. Ele usa atividades motoras para ajudar a pessoa a ter mais autoconhecimento e autonomia.",
    service: [1, 4, 5],
  },

  {
    professional: "Protético Ocular",
    description:
      'Cria próteses personalizadas (como o "olho de vidro") para quem perdeu o globo ocular, devolvendo a estética do rosto e ajudando na autoestima e na proteção do olho.',
    service: [3],
  },

  {
    professional: "Técnico de Orientação e Mobilidade",
    description:
      "Ensina pessoas cegas ou com baixa visão a andar sozinhas com segurança, usando a bengala e treinando os outros sentidos, como o tato e a audição.",
    service: [3],
  },

  {
    professional: "Técnico Oftálmico",
    description:
      "Dá suporte técnico no cuidado dos olhos, ajudando o paciente a entender como usar lentes e aparelhos visuais indicados pelo médico.",
    service: [3],
  },
];
