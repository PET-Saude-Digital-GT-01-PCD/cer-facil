import { useState, useRef } from "react";

import {
  BookOpen,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Users,
  Briefcase,
} from "lucide-react";

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

interface EducationalMaterial {
  title: string;
  description: string;
  url: string;
  image: any;
}

const userMaterials: EducationalMaterial[] = [
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

const professionalMaterials: EducationalMaterial[] = [
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

const managerMaterial: EducationalMaterial[] = [
  {
    title: "Teste",
    description: "blablabla",
    url: "url do material",
    image: planoNacionalImg,
  },
];

const materialList = {
  user: userMaterials,
  professional: professionalMaterials,
  manager: managerMaterial,
};

export default function MaterialEducational() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<
    "user" | "professional" | "manager"
  >("user");
  const titleRef = useRef<HTMLHeadingElement>(null);

  const materials = materialList[activeTab];
  const currentMaterial = materials[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % materials.length);
    setTimeout(() => {
      titleRef.current?.focus();
    }, 0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + materials.length) % materials.length);
    setTimeout(() => {
      titleRef.current?.focus();
    }, 0);
  };

  const handleTabChange = (tab: "user" | "professional" | "manager") => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <section
      aria-labelledby="edu-mat"
      id="educational-material"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="text-left mb-8">
          <h2 id="edu-mat" className="text-4xl font-bold mb-4 text-slate-900">
            Material Educativo
          </h2>
          <div className="w-24 h-1 bg-[var(--cor-bg-1)] rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-4xl text-2xl leading-relaxed focus-within:border-[var(--cor-bg-1)] focus-within:border-5">
            Acesse publicações, guias e cartilhas sobre direitos, saúde e
            inclusão das pessoas com deficiência.
          </p>
        </header>

        {/* Abas */}
        <div
          role="tablist"
          aria-label="tipo de material"
          className="flex gap-4 mb-4"
        >
          <button
            aria-label="clique para filtrar por materiais voltados a usuários da rede de cuidado à pessoas com deficiência"
            onClick={() => handleTabChange("user")}
            className={`focus-within:border-10 focus-within:border-[var(--cor-destaque)] text-xl flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "user"
                ? "bg-[var(--cor-bg-1)] text-white shadow-lg"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Users className="w-8 h-8" />
            Usuário
          </button>
          <button
            aria-label="clique para filtrar por materiais voltados a profissionais da rede de cuidado à pessoas com deficiência"
            onClick={() => handleTabChange("professional")}
            className={`focus-within:border-10 focus-within:border-[var(--cor-destaque)] text-xl flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "professional"
                ? "bg-[var(--cor-bg-1)] text-white shadow-lg"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Briefcase className="w-8 h-8" />
            Profissional
          </button>
          <button
            aria-label="clique para filtrar por materiais voltados a gestores da rede de cuidado à pessoas com deficiência"
            onClick={() => handleTabChange("manager")}
            className={`focus-within:border-10 focus-within:border-[var(--cor-destaque)] text-xl flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "manager"
                ? "bg-[var(--cor-bg-1)] text-white shadow-lg"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Briefcase className="w-8 h-8" />
            Gestores
          </button>
        </div>

        {/* Carrossel / Card Principal */}
        <div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="p-6 flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <BookOpen className="w-10 h-10 text-[var(--cor-bg-1)] flex-shrink-0 mt-1" />
                    <h3
                      ref={titleRef}
                      tabIndex={-1} // Permite foco via script, mas não via Tab
                      className="my-auto font-bold text-gray-900 text-2xl outline-none"
                    >
                      {currentMaterial.title}
                    </h3>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    {currentMaterial.description}
                  </p>
                </div>
                <a
                  href={currentMaterial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] text-xl inline-flex items-center gap-2 bg-[var(--cor-bg-1)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[color-mix(in_srgb,var(--cor-bg-1),black_20%)] transition-colors duration-300 w-fit"
                >
                  Acessar Material
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
              <div className="w-full md:w-[280px] flex-shrink-0">
                <img
                  src={currentMaterial.image}
                  alt={currentMaterial.title}
                  className="w-full h-[380px] object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Controles (Anterior / Próximo) */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-md font-semibold hover:bg-slate-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Material anterior"
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex === materials.length - 1}
              className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] flex items-center gap-2 px-6 py-3 bg-[var(--cor-bg-1)] text-white-700 rounded-md font-semibold hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Próximo material"
            >
              Próximo
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicadores (Dots) */}
        <nav className="flex justify-center gap-2 mt-8 flex-wrap">
          {materials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`focus-within:border-10 focus-within:border-[var(--cor-destaque)] w-5 h-5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-[var(--cor-bg-1)] w-8"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Ir para material ${idx + 1}`}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}
