import { Button } from "@/components/ui/button";
import CerForm from "../form/CerForm";
import SimpleMap from "@/components/pb-map/SimpleMap";
import MapCaptions from "@/components/pb-map/MapCaptions";

interface WelcomeProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export default function Welcome({ showForm, setShowForm }: WelcomeProps) {
  if (showForm) {
    return <CerForm setShowForm={setShowForm} />;
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* ESQUERDA — TEXTO */}
        <div className="w-full md:w-1/3 py-12 flex flex-col justify-center gap-6">
          <div>
            <p className="text-2xl font-bold mb-4">
              Conectamos pessoas com deficiência aos Centros de Reabilitação
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed text-lg">
            Seja bem-vindo ao CER Fácil. Aplicação voltada a facilitar o
            conhecimento e acesso aos Centros de Reabilitação (CERs) para
            pessoas com deficiência.
          </p>

          <Button size="lg" onClick={() => setShowForm(true)} className="w-fit">
            Começar busca
          </Button>
        </div>

        {/* DIREITA — MAPA */}
        <div className="w-full md:flex-1 h-[400px] md:h-[600px] relative">
          <div className="absolute z-[1000] top-4 right-4 bg-white/80 backdrop-blur-sm rounded-md p-2 shadow-md border">
            <MapCaptions />
          </div>
          <SimpleMap />
        </div>
      </div>
    </main>
  );
}
