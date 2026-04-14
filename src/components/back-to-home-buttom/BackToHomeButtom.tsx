import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BackToHomeButtomProps {
  onGoHome: () => void;
}

export default function BackToHomeButtom({ onGoHome }: BackToHomeButtomProps) {
  return (
    <div className="w-full px-4 pt-4">
      <Button
        variant="default"
        size="lg"
        className="px-8 py-5 text-2xl border-2 border-[var(--cor-bg-1)] hover:bg-[var(--cor-bg-1)] hover:text-white focus-visible:ring-[10px] focus-visible:ring-[var(--cor-destaque)] focus-visible:ring-offset-2 outline-none"
        onClick={onGoHome}
        aria-label="Voltar para a página inicial"
      >
        Voltar para Tela Inicial
      </Button>
    </div>
  );
}
