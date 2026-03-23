import CerForm from "../form/CerForm";
import { MapPin, Network, BookOpen } from "lucide-react";
import logo from "@/assets/images/logos/logo.jpeg";

interface WelcomeProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export default function Welcome({ showForm, setShowForm }: WelcomeProps) {
  const handleScrollToSection = () => {
    const section = document.getElementById("network-info");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToEducationalMaterial = () => {
    const section = document.getElementById("educational-material");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (showForm) {
    return <CerForm setShowForm={setShowForm} />;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-16 pb-16 relative bg-white">
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col items-center gap-6 text-center">
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Ilustração de pessoas com deficiência acessando serviços de reabilitação"
            className="w-full max-w-xs md:max-w-sm object-contain"
          />
        </div>

        <div className="w-full bg-white border-2 border-gray-100 rounded-2xl shadow-md p-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-black leading-tight">
            Aproximamos você aos{" "}
            <span className="text-[var(--cor-bg-1)]">
              Centros Especializados em Reabilitação (CER)
            </span>
            <span> da Paraíba.</span>
          </h1>
          <p className="mt-3 text-base md:text-lg font-medium text-gray-600 leading-relaxed">
            Profissionais da Saúde, Pessoas com Deficiência e Familiares.
          </p>
          <p className="mt-2 text-sm md:text-base text-gray-500">
            É um prazer ter você aqui no Seu CER.
          </p>
        </div>

        <nav
          aria-label="menu principal de ações"
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <button
            onClick={() => setShowForm(true)}
            className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] flex flex-col items-center p-5 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--cor-bg-1)] transition-all cursor-pointer group text-center"
          >
            <div className="p-3 bg-[var(--cor-bg-1)]/10 rounded-full mb-3 group-hover:bg-[var(--cor-bg-1)] transition-colors">
              <MapPin className="w-8 h-8 text-[var(--cor-bg-1)] group-hover:text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Busque o CER Mais Próximo
            </span>
          </button>
          <button
            onClick={handleScrollToSection}
            className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] flex flex-col items-center p-5 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--cor-bg-1)] transition-all cursor-pointer group text-center"
          >
            <div className="p-3 bg-[var(--cor-bg-1)]/10 rounded-full mb-3 group-hover:bg-[var(--cor-bg-1)] transition-colors">
              <Network className="w-8 h-8 text-[var(--cor-bg-1)] group-hover:text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Conheça a Rede CER de Cuidados
            </span>
          </button>
          <button
            onClick={handleScrollToEducationalMaterial}
            className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] flex flex-col items-center p-5 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--cor-bg-1)] transition-all cursor-pointer group text-center"
          >
            <div className="p-3 bg-[var(--cor-bg-1)]/10 rounded-full mb-3 group-hover:bg-[var(--cor-bg-1)] transition-colors">
              <BookOpen className="w-8 h-8 text-[var(--cor-bg-1)] group-hover:text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Tenha Acesso a Materiais Educativos
            </span>
          </button>
        </nav>
      </section>
    </main>
  );
}
