import { useEffect, useState } from "react";
import brasaoDaParaibaLogo from "@/assets/images/brasao-da-paraiba.png";
import funadLogo from "@/assets/images/funad.jpeg";
import ministerioLogo from "@/assets/images/ministerioLogo.png";
import ufpbLogo from "@/assets/images/UFPB.png";
import { Instagram, AtSign, Github, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Links atualizados com os ícones do Lucide para evitar erro de build
const socialButtons = [
  {
    Icon: Instagram,
    alt: "Instagram",
    href: "https://www.instagram.com/petsaude_pcd?igsh=N2d6czAyam0zNjRt",
  },
  { 
    Icon: AtSign, 
    alt: "Email", 
    href: "mailto:pet.saude.pcd@gmail.com",
  },
  { 
    Icon: Github, 
    alt: "GitHub",
    href: "https://github.com/PET-Saude-Digital-GT-01-PCD",
  },
];

const realizationLogos = [
  { src: funadLogo, alt: "Logo da FUNAD" },
  { src: ministerioLogo, alt: "Logo do Ministério da Saúde" },
  { src: ufpbLogo, alt: "Logo da UFPB" },
  { src: brasaoDaParaibaLogo, alt: "Brasão da Paraíba" },
];

export default function Rodape() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  useEffect(() => {
    if (!isAboutModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsAboutModalOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAboutModalOpen]);

  return (
    <footer 
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-white border-t-4 border-t-[var(--cor-1)] pt-12 pb-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]"
    >
      <div className="mx-auto max-w-6xl px-6 flex flex-col">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
          
          {/* ESQUERDA: Informações e Redes */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div>
              <h2 className="font-bold text-2xl text-black mb-1">
                PET-Saúde Digital
              </h2>
              <div className="w-12 h-1 bg-[var(--cor-3)] rounded-full mb-3"></div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Acompanhe nossas ações e saiba mais sobre as iniciativas de inclusão digital voltadas para Pessoas com Deficiência.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                {socialButtons.map((button) => {
                  const Icon = button.Icon;
                  const content = <Icon className="h-4 w-4" aria-hidden="true" />;
                  const classes = "flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[var(--cor-1)] transition-colors hover:bg-[var(--cor-1)] hover:text-white";

                  return button.href ? (
                    <a key={button.alt} href={button.href} target="_blank" rel="noopener noreferrer" className={classes}>
                      {content}
                    </a>
                  ) : (
                    <button key={button.alt} type="button" aria-label={button.alt} className={classes}>
                      {content}
                    </button>
                  );
                })}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="text-[var(--cor-3)] border-[var(--cor-3)] hover:text-white hover:bg-[var(--cor-3)] rounded-full font-bold transition-all h-8 text-xs"
                onClick={() => setIsAboutModalOpen(true)}
              >
                <Info className="w-3.5 h-3.5 mr-1.5" />
                Sobre o projeto
              </Button>
            </div>
          </div>

          {/* DIREITA: Logos dos Colaboradores */}
          <div className="md:col-span-7 flex flex-col md:items-end w-full">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Realização & Colaboradores
            </h3>
            
            <div className="flex flex-wrap items-center justify-start md:justify-end gap-4 sm:gap-6">
              {realizationLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 sm:h-12 object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </div>

        {/* LINHA DE COPYRIGHT */}
        <div className="pt-6 border-t border-gray-100">
          <p className="text-center text-xs font-medium text-gray-400">
            &copy; 2026 Copyright - Pet Saúde Digital
          </p>
        </div>
      </div>

      {/* MODAL "SOBRE NÓS" */}
      {isAboutModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 transition-opacity"
          onClick={() => setIsAboutModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sobre-nos-title"
            className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl border-t-4 border-t-[var(--cor-1)] transform transition-all flex flex-col max-h-[90vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
              <h2 id="sobre-nos-title" className="text-2xl font-bold text-black flex items-center gap-2">
                <Info className="text-[var(--cor-3)] w-6 h-6" />
                O que é o PET-Saúde Digital
              </h2>
              <button
                type="button"
                className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-[var(--cor-3)] transition-colors"
                onClick={() => setIsAboutModalOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto pr-2 space-y-6 flex-1 text-justify">
              <p className="text-sm leading-relaxed text-gray-600">
                A estrutura operacional do projeto é fundamentada em Grupos de
                Aprendizagem Tutorial (GTs). No caso da UFPB, foram estabelecidos
                12 GTs, que atuam como as unidades executoras das atividades de
                ensino, pesquisa e extensão. Cada GT é composto por uma equipe
                multiprofissional e interdisciplinar, reunindo tutores
                (docentes), preceptores (profissionais do serviço) e monitores
                (estudantes de graduação). Esta composição visa garantir que o
                aprendizado ocorra de forma situada, partindo dos problemas reais
                enfrentados pelos serviços de saúde digital no estado.
              </p>

              <div>
                <h3 className="text-lg font-bold text-black mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--cor-3)]"></span>
                  GT-01 PCD
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  O GT-01 PCD concentra suas ações no fortalecimento da assistência digital voltada às pessoas com deficiência. Os professores responsáveis por este grupo são o Prof. Dra. Eduardo e o Prof. Robson, do departamento de fisioterapia.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--cor-3)]"></span>
                  Por que fizemos essa aplicação?
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Esta aplicação foi criada para organizar informações essenciais do
                  projeto em um único ambiente. A proposta é tornar os dados mais
                  acessíveis, apoiar o acompanhamento das iniciativas e estimular a
                  continuidade das ações de ensino, pesquisa e extensão.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
              <Button
                className="bg-[var(--cor-3)] text-white hover:bg-orange-600 rounded-full font-bold transition-all px-8"
                onClick={() => setIsAboutModalOpen(false)}
              >
                Entendi
              </Button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}