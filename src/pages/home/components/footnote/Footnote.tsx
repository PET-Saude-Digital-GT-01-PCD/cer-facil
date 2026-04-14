import { useEffect, useState, useRef } from "react";
import {
  Info,
  X,
  Instagram,
  AtSign,
  Github,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import brasaoDaParaibaLogo from "@/assets/images/footnote-images/brasao-da-paraiba.png";
import funadLogo from "@/assets/images/footnote-images/funad.jpeg";
import ministerioLogo from "@/assets/images/footnote-images/ministerioLogo.png";
import ufpbLogo from "@/assets/images/footnote-images/UFPB.png";
import susDigital from "@/assets/images/footnote-images/sus-digital.png";

interface SocialButton {
  Icon: LucideIcon;
  alt: string;
  href?: string;
}

const socialButtonsData: SocialButton[] = [
  {
    Icon: Instagram,
    alt: "Acessar Instagram do PET Saúde Pessoa com Deficiência",
    href: "https://www.instagram.com/petsaude_pcd?igsh=N2d6czAyam0zNjRt",
  },
  {
    Icon: AtSign,
    alt: "Enviar Email para o projeto",
    href: "mailto:pet.saude.pcd@gmail.com",
  },
  {
    Icon: Github,
    alt: "Acessar repositório no GitHub",
    href: "https://github.com/PET-Saude-Digital-GT-01-PCD",
  },
];

const realizationLogosData = [
  { src: susDigital, alt: "Logo SUS Digital" },
  { src: brasaoDaParaibaLogo, alt: "Logo Brasão da Paraíba" },
  { src: ufpbLogo, alt: "Logo da UFPB" },
  { src: funadLogo, alt: "Logo da FUNAD" },
  { src: ministerioLogo, alt: "Logo do Ministério da Saúde" },
];

const aboutProjectData = {
  title: "O que é o PET-Saúde Digital",
  intro:
    "O PET-Saúde Digital é um projeto que teve início em 2025 na Universidade Federal da Paraíba (UFPB) e que tem o objetivo é modernizar o Sistema Único de Saúde (SUS). O projeto como um todo é formado por 12 Grupos Tutoriais (GTs), onde cada grupo está relacionado a uma área diferente da Saúde Digital no SUS e é composto por professores, profissionais da saúde e estudantes de graduação. Trabalhamos com o desenvolvimento de pesquisas e atividades que vão para além da universidade, tudo isso para envolver a população e criar soluções digitais para problemas reais.",
  sections: [
    {
      id: "gt01",
      subtitle: "GT-01 Pessoa com Deficiência",
      content:
        "O presente projeto foi desenvolvido pelo GT-01 Atenção Especializada à Pessoa com Deficiência. Dentro do PET-Saúde Digital, nosso papel é tornar o SUS mais acessível às pessoas com deficiência por meio por meio das ferramentas digitais para garantir à elas acesso a saúde de qualidade. As atividades do GT-01 são desenvolvidas em conjunto com a Secretaria de Estado de Saúde da Paraíba (SES-PB) e a Fundação Centro Integrado de Apoio à Pessoa com Deficiência (FUNAD), que foram fundamentais para o desenvolvimento desse site.",
    },
    {
      id: "motivo",
      subtitle: "Por que fizemos esse site?",
      content:
        "O site foi criado para resolver um problema muito comum das pessoas com deficiência e suas famílias: a dificuldade de encontrar informações claras, organizadas e fáceis de entender sobre como conseguir atendimento nos Centros Especializados em Reabilitação (CERs) e Oficinas Ortopédicas (OPMs) da Paraíba. Por isso, ele conta com explicações de como conseguir o primeiro atendimento e detalhes sobre as localizações de cada CER. Antes, as informações encontravam-se dispersas, ou até mesmo indisponíveis na internet, mas agora as pessoas com deficiência e suas famílias possuem um espaço acessível onde podem buscar orientação.",
    },
  ],
};

export default function Rodape() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <footer className="px-6 py-12 relative bg-white pt-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">

            <div className="md:col-span-5 flex flex-col items-start gap-4">
              <div>
                <h2 className="font-bold text-2xl text-black mb-1">
                  PET-Saúde Digital
                </h2>
                <div className="w-12 h-1 bg-[var(--cor-bg-1)] rounded-full mb-3"></div>
                <p className="text-lg text-black leading-relaxed">
                  Acompanhe nossas ações e saiba mais sobre as iniciativas de
                  inclusão digital voltadas para Pessoas com Deficiência.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-2">
                <nav
                  aria-label="Redes Sociais e Contato"
                  className="flex items-center gap-2"
                >
                  {socialButtonsData.map((button) => {
                    const Icon = button.Icon;
                    const classes =
                      "flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cor-bg-1)]/10 text-[var(--cor-bg-1)] transition-colors hover:bg-[var(--cor-bg-1)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--cor-bg-1)] focus:ring-offset-2";

                    return button.href ? (
                      <a
                        key={button.alt}
                        href={button.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={button.alt}
                        className={classes}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    ) : (
                      <button
                        key={button.alt}
                        type="button"
                        aria-label={button.alt}
                        className={classes}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    );
                  })}
                </nav>

                <Button
                  variant="outline"
                  size="sm"
                  className="text-[var(--cor-bg-1)] border-[var(--cor-bg-1)] hover:text-white hover:bg-[var(--cor-bg-1)] rounded-full font-bold transition-all h-10 text-md px-4"
                  onClick={() => setIsAboutModalOpen(true)}
                >
                  <Info className="w-4 h-4 mr-2" aria-hidden="true" />
                  Sobre o projeto
                </Button>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col md:items-end w-full">
              <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-4">
                Realização & Colaboradores
              </h3>

              <div className="flex flex-nowrap items-center justify-start md:justify-end gap-2 w-full overflow-x-auto pb-2 max-w-max">
                {realizationLogosData.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}

                    className="shrink-0 h-10 sm:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <p className="text-center text-sm font-medium text-black">
              &copy; {currentYear} Copyright - PET-Saúde/Informação e Saúde
              Digital no SUS/PB.
            </p>
          </div>
        </div>
      </footer>

      {isAboutModalOpen && (
        <AboutModal onClose={() => setIsAboutModalOpen(false)} />
      )}
    </>
  );
}

function AboutModal({ onClose }: { onClose: () => void }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    const timeoutId = setTimeout(() => {
      titleRef.current?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        tabIndex={-1}
        ref={titleRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sobre-nos-title"
        className="w-full max-w-2xl rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border-t-4 border-t-[var(--cor-bg-1)] flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()} 
      >
   
        <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100 shrink-0">
          <h2
            id="sobre-nos-title"
            className="text-4xl sm:text-3xl font-bold text-black flex items-center gap-2 outline-none"
          >
            <Info
              className="text-[var(--cor-bg-1)] w-6 h-6"
              aria-hidden="true"
            />
            {aboutProjectData.title}
          </h2>
          <button
            type="button"
            aria-label="Fechar modal"
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-[var(--cor-bg-1)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--cor-bg-1)]"
            onClick={onClose}
          >
            <X className="w-8 h-8" aria-hidden="true" />
          </button>
        </header>

        <div className="overflow-y-auto pr-2 space-y-6 flex-1 text-justify custom-scrollbar">
          <p className="text-xl leading-relaxed text-black">
            {aboutProjectData.intro}
          </p>

          {aboutProjectData.sections.map((section) => (
            <section key={section.id}>
              <h3 className="text-2xl font-bold text-black mb-2 flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full bg-[var(--cor-bg-3)]"
                  aria-hidden="true"
                />
                {section.subtitle}
              </h3>
              <p className="text-xl leading-relaxed text-black">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <footer className="mt-8 pt-4 border-t border-slate-100 flex justify-end shrink-0">
          <Button
            className="text-xl bg-[var(--cor-bg-3)] text-white hover:bg-[color-mix(in_srgb,var(--cor-bg-3),black_20%)] rounded-full font-bold transition-all px-8 focus:ring-2 focus:ring-offset-2 focus:ring-[var(--cor-bg-3)]"
            onClick={onClose}
          >
            Entendi
          </Button>
        </footer>
      </div>
    </div>
  );
}
