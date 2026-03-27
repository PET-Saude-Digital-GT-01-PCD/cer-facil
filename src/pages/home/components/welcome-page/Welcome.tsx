import CerForm from "../form/CerForm";
import { ChevronDown, MapPin, Network, BookOpen } from "lucide-react";
import logoSeuCer from "@/assets/logos/seu_cer_vetor.svg";

interface WelcomeProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export default function Welcome({ showForm, setShowForm }: WelcomeProps) {
  const handleScrollToSection = () => {
    const section = document.getElementById("cers-card");
    const targetTitle = document.getElementById("cards");

    if (section && targetTitle) {
      section.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        targetTitle.focus();
      }, 600);
    }
  };

  const handleScrollToEducationalMaterial = () => {
    const section = document.getElementById("educational-material");
    const targetTitle = document.getElementById("edu-mat");

    if (section && targetTitle) {
      section.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        targetTitle.focus();
      }, 600);
    }
  };

  if (showForm) {
    return <CerForm setShowForm={setShowForm} />;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-10 pb-20 relative bg-white">
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <img
            src={logoSeuCer}
            alt="Logo Seu CER"
            className="h-60 md:h-70 object-contain"
          />
        </div>

        <h1 className="text-lg md:text-xl lg:text-2xl font-extrabold text-black leading-tight">
          Aproximamos você aos{" "}
          <span className="text-[var(--cor-bg-1)]">
            Centros Especializados em Reabilitação (CER)
          </span>
          <span> da Paraíba.</span>
        </h1>

        <p className="mt-4 text-xl md:text-2xl font-semibold text-black mb-16">
          Profissionais da Saúde, Pessoas com Deficiência e Familiares.
        </p>

        <nav
          aria-label="menu principal de ações"
          className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <button
            onClick={() => setShowForm(true)}
            className="focus-within:ring-[10px] focus-within:ring-[var(--cor-destaque)] flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--cor-bg-1)] transition-all cursor-pointer group text-center"
          >
            <div className="p-4 bg-[var(--cor-bg-1)]/10 rounded-full mb-4 group-hover:bg-[var(--cor-bg-1)] transition-colors">
              <MapPin className="w-12 h-12 text-[var(--cor-bg-1)] group-hover:text-white" />
            </div>
            <span className="text-2xl font-bold text-black leading-snug">
              Busque o CER Mais Próximo
            </span>
          </button>

          <button
            onClick={handleScrollToSection}
            className="focus-within:ring-[10px] focus-within:ring-[var(--cor-destaque)] flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--cor-bg-1)] transition-all cursor-pointer group text-center"
          >
            <div className="p-4 bg-[var(--cor-bg-1)]/10 rounded-full mb-4 group-hover:bg-[var(--cor-bg-1)] transition-colors">
              <Network className="w-12 h-12 text-[var(--cor-bg-1)] group-hover:text-white" />
            </div>
            <span className="text-2xl font-bold text-black leading-snug">
              Conheça a Rede Estadual de Reabilitação
            </span>
          </button>

          <button
            onClick={handleScrollToEducationalMaterial}
            className="focus-within:ring-[10px] focus-within:ring-[var(--cor-destaque)] flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--cor-bg-1)] transition-all cursor-pointer group text-center"
          >
            <div className="p-4 bg-[var(--cor-bg-1)]/10 rounded-full mb-4 group-hover:bg-[var(--cor-bg-1)] transition-colors">
              <BookOpen className="w-12 h-12 text-[var(--cor-bg-1)] group-hover:text-white" />
            </div>
            <span className="text-2xl font-bold text-black leading-snug">
              Tenha Acesso aos Materiais Educativos
            </span>
          </button>
        </nav>
      </section>
    </main>
  );
}
