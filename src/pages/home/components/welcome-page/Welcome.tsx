import CerForm from "../form/CerForm";
import { ChevronDown, MapPin, Network, BookOpen } from "lucide-react";

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
    <main className="min-h-screen flex flex-col items-center justify-center pt-16 pb-32 relative bg-white">
      <section
        aria-label="cabeçalho"
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
      >
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight"
          tabIndex={0}
        >
          Aproximamos você aos{" "}
          <span className="text-[var(--cor-bg-1)]">
            Centros De Reabilitação
          </span>
          <span> da Paraíba.</span>
          <br />
          <span className="block mt-6 text-3xl md:text-4xl font-semibold text-gray-800">
            Profissionais da Saúde, Pessoas com Deficiência e Familiares.
          </span>
          <span className="block mt-6 text-3xl md:text-4xl font-semibold text-gray-800">
            Boas-vindas ao Seu Cer.
          </span>
        </h1>
        {/* Container do Grid */}
        <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div
            onClick={() => setShowForm(true)}
            className="flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--cor-bg-1)] transition-all cursor-pointer group text-center"
          >
            <div className="p-4 bg-[var(--cor-bg-1)]/10 rounded-full mb-4 group-hover:bg-[var(--cor-bg-1)] transition-colors">
              <MapPin className="w-8 h-8 text-[var(--cor-bg-1)] group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Busque o CER Mais Próximo
            </h3>
          </div>
          <div
            onClick={handleScrollToSection}
            className="flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--cor-bg-1)] transition-all cursor-pointer group text-center"
          >
            <div className="p-4 bg-[var(--cor-bg-1)]/10 rounded-full mb-4 group-hover:bg-[var(--cor-bg-1)] transition-colors">
              <Network className="w-8 h-8 text-[var(--cor-bg-1)] group-hover:text-white" />
            </div>
            <h2 aria-hidden="true" className="text-xl font-bold text-gray-900">
              Conheça a Rede CER de Cuidado
            </h2>
          </div>{" "}
          {/* Corrigido: era </button> */}
          <div
            onClick={handleScrollToEducationalMaterial}
            className="flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--cor-bg-1)] transition-all cursor-pointer group text-center"
          >
            <div className="p-4 bg-[var(--cor-bg-1)]/10 rounded-full mb-4 group-hover:bg-[var(--cor-bg-1)] transition-colors">
              <BookOpen className="w-8 h-8 text-[var(--cor-bg-1)] group-hover:text-white" />
            </div>
            <h2 aria-hidden="true" className="text-xl font-bold text-gray-900">
              Tenha Acesso a Materiais Educativos
            </h2>
          </div>{" "}
          {/* Corrigido: era </button> */}
        </div>{" "}
        {/* Corrigido: Faltava fechar a div do grid principal */}
      </section>
    </main>
  );
}
