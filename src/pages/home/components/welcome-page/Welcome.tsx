import { Button } from "@/components/ui/button";
import CerForm from "../form/CerForm";
import { ChevronDown, MapPin, Network, BookOpen } from "lucide-react";

interface WelcomeProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export default function Welcome({ showForm, setShowForm }: WelcomeProps) {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  if (showForm) {
    return <CerForm setShowForm={setShowForm} />;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-16 pb-32 relative bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
          Aproximamos as pessoas com deficiência, seus familiares e profissionais de saúde aos{" "}
          <span className="text-[var(--cor-3)]">Centros De Reabilitação</span>
          <br />
          <span className="block mt-6 text-3xl md:text-4xl font-semibold text-gray-800">
           Seja bem-vindo ao Seu CER.
          </span>
        </h1>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div 
          onClick={() => setShowForm(true)}
          className="flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--cor-3)] transition-all cursor-pointer group text-center"
        >
          <div className="p-4 bg-orange-50 rounded-full mb-4 group-hover:bg-[var(--cor-3)] transition-colors">
            <MapPin className="w-8 h-8 text-[var(--cor-3)] group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Encontrar CER Mais Próximo</h3>
        </div>

        <div 
          onClick={handleScrollDown}
          className="flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-500 transition-all cursor-pointer group text-center"
        >
          <div className="p-4 bg-blue-50 rounded-full mb-4 group-hover:bg-blue-500 transition-colors">
            <Network className="w-8 h-8 text-blue-500 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Conheça a Rede CER de Cuidado à Pessoa Com Deficiência</h3>
        </div>

        <div 
          onClick={() => {/* Lógica para material educativo */}}
          className="flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all cursor-pointer group text-center"
        >
          <div className="p-4 bg-emerald-50 rounded-full mb-4 group-hover:bg-emerald-500 transition-colors">
            <BookOpen className="w-8 h-8 text-emerald-500 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Tenha Acesso ao Nosso Material Educativo</h3>
        </div>

      </div>

      {/* DESLIZE PARA MAIS */}
      <div
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
      >
        <p className="text-sm font-medium text-gray-500 mb-2">
          Deslize para saber mais
        </p>
        <ChevronDown className="w-6 h-6 animate-bounce text-gray-400 group-hover:text-[var(--cor-3)]" />
      </div>
    </main>
  );
}
