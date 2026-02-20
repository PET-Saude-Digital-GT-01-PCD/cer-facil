import { Button } from "@/components/ui/button";
import CerForm from "../form/CerForm";
import { ChevronDown } from "lucide-react";

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
    <main className="min-h-screen flex flex-col items-center justify-center pt-16 pb-32 relative">
      {/* TÍTULO PRINCIPAL DESTACADO */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight">
          Conectamos pessoas com deficiência aos{" "}
          <span className="text-[var(--cor-3)]">Centros de Reabilitação</span>
        </h1>
      </div>

      {/* TEXTO E BOTÕES */}
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        <p className="text-muted-foreground leading-relaxed text-2xl">
          Seja bem-vindo ao CER Fácil. Aplicação voltada a facilitar o
          conhecimento e acesso aos Centros de Reabilitação (CERs)
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            onClick={() => setShowForm(true)}
            className="text-lg px-8 py-6"
          >
            Começar busca
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleScrollDown}
            className="text-lg px-8 py-6"
          >
            Conheça a rede
          </Button>
        </div>
      </div>

      {/* DESLIZE PARA MAIS */}
      <div
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
      >
        <p className="text-base font-medium animate-bounce">
          Deslize para mais
        </p>
        <ChevronDown className="w-7 h-7 animate-bounce group-hover:scale-110 transition-transform" />
      </div>
    </main>
  );
}
