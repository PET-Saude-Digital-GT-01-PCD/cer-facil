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
      <section aria-label="cabeçalho" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight" tabIndex={0}>
          Aproximamos as pessoas com deficiência, seus familiares e
          profissionais de saúde aos{" "}
          <span className="text-[var(--cor-3)]">Centros De Reabilitação</span>
          <br />
          <span className="block mt-6 text-3xl md:text-4xl font-semibold text-gray-800">
            Seja bem-vindo ao Seu CER.
          </span>
        </h1>
      </section>

      <section aria-label="opções" className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          tabIndex={0}
          onClick={() => setShowForm(true)}
          className="flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--cor-3)] focus-within:border-[var(--cor-3)] focus-within:border-5 transition-all cursor-pointer group text-center"
        >
          <div className="p-4 bg-orange-50 rounded-full mb-4 group-hover:bg-[var(--cor-3)] transition-colors">
            <MapPin className="w-8 h-8 text-[var(--cor-3)] group-hover:text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">
            Encontrar CER Mais Próximo
          </h2>
        </button>

        <button
          tabIndex={0}
          onClick={handleScrollToSection}
          className="flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-500 focus-within:border-blue-500 focus-within:border-5 transition-all cursor-pointer group text-center"
        >
          <div className="p-4 bg-blue-50 rounded-full mb-4 group-hover:bg-blue-500 transition-colors">
            <Network className="w-8 h-8 text-blue-500 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Conheça a Rede CER de Cuidado à Pessoa Com Deficiência
          </h3>
        </button>

        <button
          tabIndex={0}
          onClick={handleScrollToEducationalMaterial}
          className="flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-emerald-500 focus-within:border-emerald-500 focus-within:border-5 transition-all cursor-pointer group text-center"
        >
          <div className="p-4 bg-emerald-50 rounded-full mb-4 group-hover:bg-emerald-500 transition-colors">
            <BookOpen className="w-8 h-8 text-emerald-500 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Tenha Acesso ao Nosso Material Educativo
          </h3>
        </button>
      </section>
    </main>
  );
}
