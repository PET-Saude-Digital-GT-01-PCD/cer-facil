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
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
      >
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight"
        >
          Aproximamos você aos{" "}
          <span className="text-[var(--cor-bg-1)]">
            Centros Especializados em Reabilitação (CER)
          </span>
          <span> da Paraíba.</span>
          <br />
          <span className="block mt-6 text-3xl md:text-4xl font-semibold text-gray-800">
            Profissionais da Saúde, Pessoas com Deficiência e Familiares.
          </span>
          <span className="block mt-6 text-3xl md:text-4xl font-semibold text-gray-800">
            É um prazer ter você aqui no Seu CER.
          </span>
        </h1>
        <nav aria-label="menu principal de ações" className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <button
            onClick={() => setShowForm(true)}
            className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--cor-bg-1)] transition-all cursor-pointer group text-center"
          >
            <div className="p-4 bg-[var(--cor-bg-1)]/10 rounded-full mb-4 group-hover:bg-[var(--cor-bg-1)] transition-colors">
              <MapPin className="w-12 h-12 text-[var(--cor-bg-1)] group-hover:text-white" />
            </div>
            <span className="text-3xl font-bold text-gray-900">
              Busque o CER Mais Próximo
            </span>
          </button>
          <button
            onClick={handleScrollToSection}
            className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--cor-bg-1)] transition-all cursor-pointer group text-center"
          >
            <div className="p-4 bg-[var(--cor-bg-1)]/10 rounded-full mb-4 group-hover:bg-[var(--cor-bg-1)] transition-colors">
              <Network className="w-12 h-12 text-[var(--cor-bg-1)] group-hover:text-white" />
            </div>
            <span className="text-3xl font-bold text-gray-900">
              Conheça a Rede CER de Cuidados
            </span>
          </button>{" "}
          <button
            onClick={handleScrollToEducationalMaterial}
            className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--cor-bg-1)] transition-all cursor-pointer group text-center"
          >
            <div className="p-4 bg-[var(--cor-bg-1)]/10 rounded-full mb-4 group-hover:bg-[var(--cor-bg-1)] transition-colors">
              <BookOpen className="w-12 h-12 text-[var(--cor-bg-1)] group-hover:text-white" />
            </div>
            <span className="text-3xl font-bold text-gray-900">
              Tenha Acesso a Materiais Educativos
            </span>
          </button>{" "}
        </nav>{" "}
      </section>
    </main>
  );
}
