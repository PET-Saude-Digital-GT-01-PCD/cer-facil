import { useEffect, useState, useRef } from "react";
import { Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  socialButtonsData,
  realizationLogosData,
  aboutProjectData,
} from "./Footnote.data";

export default function Rodape() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const currentYear = new Date().getFullYear(); // Ano dinâmico
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <footer className="px-6 py-12 relative bg-white pt-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
            {/* ESQUERDA: Informações e Redes */}
            <div className="md:col-span-5 flex flex-col items-start gap-4">
              <div>
                <h2 className="font-bold text-2xl text-slate-900 mb-1">
                  PET-Saúde Digital
                </h2>
                <div className="w-12 h-1 bg-[var(--cor-bg-1)] rounded-full mb-3"></div>
                <p className="text-lg text-slate-600 leading-relaxed">
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

            {/* DIREITA: Logos dos Colaboradores */}
            <div className="md:col-span-7 flex flex-col md:items-end w-full">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                Realização & Colaboradores
              </h3>

              <div className="flex flex-wrap items-center justify-start md:justify-end gap-4">
                {realizationLogosData.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-14 sm:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-slate-200">
            <p className="text-center text-sm font-medium text-slate-500">
              &copy; {currentYear} Copyright - PET-Saúde/Informação e Saúde
              Digital no SUS/PB.
            </p>
          </div>
        </div>
      </footer>

      {/* Renderização Condicional do Modal */}
      {isAboutModalOpen && (
        <AboutModal onClose={() => setIsAboutModalOpen(false)} />
      )}
    </>
  );
}

// ==========================================
// SUB-COMPONENTE: Modal "Sobre o Projeto"
// ==========================================
function AboutModal({ onClose }: { onClose: () => void }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  // Fecha no "ESC" e trava o scroll da página de fundo
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
        onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do modal
      >
        {/* Modal Header */}
        <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100 shrink-0">
          <h2
            id="sobre-nos-title"
            className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 outline-none"
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
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </header>

        {/* Modal Body */}
        <div className="overflow-y-auto pr-2 space-y-6 flex-1 text-justify custom-scrollbar">
          <p className="text-sm leading-relaxed text-slate-600">
            {aboutProjectData.intro}
          </p>

          {aboutProjectData.sections.map((section) => (
            <section key={section.id}>
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full bg-[var(--cor-bg-3)]"
                  aria-hidden="true"
                />
                {section.subtitle}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Modal Footer */}
        <footer className="mt-8 pt-4 border-t border-slate-100 flex justify-end shrink-0">
          <Button
            className="bg-[var(--cor-bg-3)] text-white hover:bg-[color-mix(in_srgb,var(--cor-bg-3),black_20%)] rounded-full font-bold transition-all px-8 focus:ring-2 focus:ring-offset-2 focus:ring-[var(--cor-bg-3)]"
            onClick={onClose}
          >
            Entendi
          </Button>
        </footer>
      </div>
    </div>
  );
}
