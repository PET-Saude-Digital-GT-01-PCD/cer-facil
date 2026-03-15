import lbiImg from "@/assets/images/educational-material/Lei Brasileira de Inclusão (LBI).png";
import capacitismoImg from "@/assets/images/educational-material/Cartilha Capacitismo.png";
import acessibilidadeImg from "@/assets/images/educational-material/Guia de Acessibilidade Comunicacional.png";
import menstrualImg from "@/assets/images/educational-material/Cuidado Menstrual de Pessoas com e sem Deficiência.png";
import saudeSexualImg from "@/assets/images/educational-material/Direitos e Saúde Sexual das Pessoas com Deficiência.png";
import euMeProtejoImg from "@/assets/images/educational-material/Eu me Protejo.png";
import planoNacionalImg from "@/assets/images/educational-material/Plano Nacional dos Direitos da Pessoa com Deficiência.png";
import diretrizesImg from "@/assets/images/educational-material/Diretrizes de Estimulação Precoce.png";
import diagnosticoImg from "@/assets/images/educational-material/Diagnóstico Pessoas com Deficiência no Brasil.png";
import atencaoPrimariaImg from "@/assets/images/educational-material/Atenção Primária à Saúde das Pessoas com Deficiência.png";
import agenteComunitarioImg from "@/assets/images/educational-material/Agente Comunitário de Saúde.png";
import boasPraticasImg from "@/assets/images/educational-material/Guia de Boas Práticas para Acessibilidade Digital.png";

export interface EducationalMaterial {
  title: string;
  description: string;
  url: string;
  image: any; // Usar 'any' ou 'string' costuma resolver na maioria dos bundlers modernos.
}

export const userMaterials: EducationalMaterial[] = [
  {
    title: "Lei Brasileira de Inclusão (LBI)",
    description:
      "Lei nº 13.146/2015 que assegura e promove condições de igualdade, exercício dos direitos e liberdades fundamentais para pessoas com deficiência.",
    url: "https://www.gov.br/mdh/pt-br/navegue-por-temas/pessoa-com-deficiencia/publicacoes/dez-anos-da-lei-brasileira-de-inclusao-lbi-texto-na-integra/lei_brasileira_de_inclusao_digital__1_.pdf",
    image: lbiImg,
  },
  {
    title: "Cartilha Capacitismo",
    description:
      "Material educativo sobre capacitismo, suas formas de manifestação e como combater a discriminação contra pessoas com deficiência.",
    url: "https://www.confea.org.br/midias/uploads-imce/Cartilha%20combata%20o%20capacitismo.pdf",
    image: capacitismoImg,
  },
  {
    title: "Guia de Acessibilidade Comunicacional",
    description:
      "Orientações práticas para garantir comunicação acessível, incluindo recursos como Libras, audiodescrição e linguagem simples.",
    url: "https://www.gov.br/mdh/pt-br/navegue-por-temas/pessoa-com-deficiencia/publicacoes/Guia_Acessibilidade_Comunicacional.PDF",
    image: acessibilidadeImg,
  },
  {
    title: "Cuidado Menstrual de Pessoas com e sem Deficiência",
    description:
      "Guia sobre cuidados menstruais inclusivos, abordando necessidades específicas e promovendo autonomia e dignidade menstrual.",
    url: "https://www.gov.br/mdh/pt-br/navegue-por-temas/pessoa-com-deficiencia/publicacoes/Guia_Cuidado_Menstrual.pdf",
    image: menstrualImg,
  },
  {
    title: "Direitos e Saúde Sexual das Pessoas com Deficiência",
    description:
      "Material informativo sobre direitos sexuais e reprodutivos, desmistificando tabus e promovendo saúde sexual integral.",
    url: "https://www.gov.br/mdh/pt-br/navegue-por-temas/pessoa-com-deficiencia/publicacoes/Guia_Direitos_e_SadeSexual.pdf",
    image: saudeSexualImg,
  },
  {
    title: "Eu me Protejo",
    description:
      "Cartilha educativa sobre proteção e direitos das pessoas com deficiência, promovendo autonomia e segurança.",
    url: "https://www.eumeprotejo.com/_files/ugd/f04b3c_64c1d9d4a38f48a69ee10e12750e3505.pdf",
    image: euMeProtejoImg,
  },
];

export const professionalMaterials: EducationalMaterial[] = [
  {
    title: "Plano Nacional dos Direitos da Pessoa com Deficiência",
    description:
      "Documento que estabelece diretrizes e ações para garantir os direitos das pessoas com deficiência no Brasil, promovendo inclusão e acessibilidade.",
    url: "https://www.gov.br/mdh/pt-br/navegue-por-temas/pessoa-com-deficiencia/publicacoes/Plano_Nacional_dos_Direitos_da_Pessoa_com_Deficiencia_Novo_Viver_Sem_Limite_DIGITAL.pdf",
    image: planoNacionalImg,
  },
  {
    title: "Lei Brasileira de Inclusão (LBI)",
    description:
      "Lei nº 13.146/2015 que assegura e promove condições de igualdade, exercício dos direitos e liberdades fundamentais para pessoas com deficiência.",
    url: "https://www.gov.br/mdh/pt-br/navegue-por-temas/pessoa-com-deficiencia/publicacoes/dez-anos-da-lei-brasileira-de-inclusao-lbi-texto-na-integra/lei_brasileira_de_inclusao_digital__1_.pdf",
    image: lbiImg,
  },
  {
    title: "Diretrizes de Estimulação Precoce",
    description:
      "Orientações para estimulação de crianças de 0 a 3 anos com atraso no desenvolvimento neuropsicomotor, visando potencializar o desenvolvimento infantil.",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-pessoa-com-deficiencia/publicacoes/diretrizes-de-estimulacao-precoce-criancas-de-zero-a-3-anos-com-atraso-no-desenvolvimento-neuropsicomotorpdf",
    image: diretrizesImg,
  },
  {
    title: "Cartilha Capacitismo",
    description:
      "Material educativo sobre capacitismo, suas formas de manifestação e como combater a discriminação contra pessoas com deficiência.",
    url: "https://www.confea.org.br/midias/uploads-imce/Cartilha%20combata%20o%20capacitismo.pdf",
    image: capacitismoImg,
  },
  {
    title: "Diagnóstico: Pessoas com Deficiência no Brasil",
    description:
      "Relatório com dados e informações sobre pessoas com deficiência baseado em registros administrativos, pesquisas e sistemas do Governo Federal.",
    url: "https://www.gov.br/mdh/pt-br/assuntos/noticias/2023/novembro/copy_of_Relatorio_CGIE_PCD_23.10.2023_FINAL1.pdf",
    image: diagnosticoImg,
  },
  {
    title: "Guia de Acessibilidade Comunicacional",
    description:
      "Orientações práticas para garantir comunicação acessível, incluindo recursos como Libras, audiodescrição e linguagem simples.",
    url: "https://www.gov.br/mdh/pt-br/navegue-por-temas/pessoa-com-deficiencia/publicacoes/Guia_Acessibilidade_Comunicacional.PDF",
    image: acessibilidadeImg,
  },
  {
    title: "Atenção Primária à Saúde das Pessoas com Deficiência",
    description:
      "Guia em formato de cordel sobre o atendimento na atenção básica para pessoas com deficiência, com linguagem acessível e ilustrações.",
    url: "https://www.gov.br/mdh/pt-br/navegue-por-temas/pessoa-com-deficiencia/publicacoes/Guia_Ateno_Primria_em_cordel.pdf",
    image: atencaoPrimariaImg,
  },
  {
    title: "Cuidado Menstrual de Pessoas com e sem Deficiência",
    description:
      "Guia sobre cuidados menstruais inclusivos, abordando necessidades específicas e promovendo autonomia e dignidade menstrual.",
    url: "https://www.gov.br/mdh/pt-br/navegue-por-temas/pessoa-com-deficiencia/publicacoes/Guia_Cuidado_Menstrual.pdf",
    image: menstrualImg,
  },
  {
    title: "Direitos e Saúde Sexual das Pessoas com Deficiência",
    description:
      "Material informativo sobre direitos sexuais e reprodutivos, desmistificando tabus e promovendo saúde sexual integral.",
    url: "https://www.gov.br/mdh/pt-br/navegue-por-temas/pessoa-com-deficiencia/publicacoes/Guia_Direitos_e_SadeSexual.pdf",
    image: saudeSexualImg,
  },
  {
    title: "Agente Comunitário de Saúde",
    description:
      "Guia para agentes comunitários de saúde sobre o atendimento e acompanhamento de pessoas com deficiência na comunidade.",
    url: "https://api.arca.fiocruz.br/api/core/bitstreams/81c04b44-e676-48ca-a08b-507933532e49/content",
    image: agenteComunitarioImg,
  },
  {
    title: "Guia de Boas Práticas para Acessibilidade Digital",
    description:
      "Recomendações técnicas e práticas para desenvolvimento de sites, aplicativos e conteúdos digitais acessíveis a todas as pessoas.",
    url: "https://www.nic.br/media/docs/publicacoes/13/20230920121455/guia_boas_praticas_acessibilidade_digital.pdf",
    image: boasPraticasImg,
  },
];
