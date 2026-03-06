import {
  BookOpen,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Users,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

import lbiImg from "@/assets/images/catilhas/Lei Brasileira de Inclusão (LBI).png";
import capacitismoImg from "@/assets/images/catilhas/Cartilha Capacitismo.png";
import acessibilidadeImg from "@/assets/images/catilhas/Guia de Acessibilidade Comunicacional.png";
import menstrualImg from "@/assets/images/catilhas/Cuidado Menstrual de Pessoas com e sem Deficiência.png";
import saudeSexualImg from "@/assets/images/catilhas/Direitos e Saúde Sexual das Pessoas com Deficiência.png";
import euMeProtejoImg from "@/assets/images/catilhas/Eu me Protejo.png";
import planoNacionalImg from "@/assets/images/catilhas/Plano Nacional dos Direitos da Pessoa com Deficiência.png";
import diretrizesImg from "@/assets/images/catilhas/Diretrizes de Estimulação Precoce.png";
import diagnosticoImg from "@/assets/images/catilhas/Diagnóstico Pessoas com Deficiência no Brasil.png";
import atencaoPrimariaImg from "@/assets/images/catilhas/Atenção Primária à Saúde das Pessoas com Deficiência.png";
import agenteComunitarioImg from "@/assets/images/catilhas/Agente Comunitário de Saúde.png";
import boasPraticasImg from "@/assets/images/catilhas/Guia de Boas Práticas para Acessibilidade Digital.png";

export default function MaterialEducational() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"user" | "professional">("user");

  const userMaterials = [
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

  const professionalMaterials = [
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

  const materials =
    activeTab === "user" ? userMaterials : professionalMaterials;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % materials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + materials.length) % materials.length);
  };

  const handleTabChange = (tab: "user" | "professional") => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <section id="educational-material" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-left mb-8">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Material Educativo
          </h2>
          <div className="w-24 h-1 bg-[var(--cor-bg-3)] rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-4xl text-lg leading-relaxed">
            Acesse publicações, guias e cartilhas sobre direitos, saúde e
            inclusão das pessoas com deficiência.
          </p>
        </div>

        <div className="flex gap-4 mb-4">
          <button
            onClick={() => handleTabChange("user")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "user"
                ? "bg-[var(--cor-bg-3)] text-white shadow-lg"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Users className="w-5 h-5" />
            Usuário
          </button>
          <button
            onClick={() => handleTabChange("professional")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "professional"
                ? "bg-[var(--cor-bg-3)] text-white shadow-lg"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Profissional
          </button>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <BookOpen className="w-6 h-6 text-[var(--cor-bg-3)] flex-shrink-0 mt-1" />
                    <h3 className="font-bold text-gray-900 text-xl">
                      {materials[currentIndex].title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                    {materials[currentIndex].description}
                  </p>
                </div>
                <a
                  href={materials[currentIndex].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--cor-bg-3)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[color-mix(in_srgb,var(--cor-bg-3),black_20%)] transition-colors duration-300 w-fit"
                >
                  Acessar Material
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="w-full md:w-[280px] flex-shrink-0">
                <img
                  src={materials[currentIndex].image}
                  alt={materials[currentIndex].title}
                  className="w-full h-[380px] object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-[var(--cor-bg-3)] p-3 rounded-full shadow-lg hover:bg-[var(--cor-bg-3)] hover:text-white transition-all duration-300"
            aria-label="Material anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-[var(--cor-bg-3)] p-3 rounded-full shadow-lg hover:bg-[var(--cor-bg-3)] hover:text-white transition-all duration-300"
            aria-label="Próximo material"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {materials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-[var(--cor-bg-3)] w-8"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Ir para material ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
