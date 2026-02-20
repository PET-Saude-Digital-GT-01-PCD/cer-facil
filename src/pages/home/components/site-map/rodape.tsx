import { useEffect, useState } from "react";
import brasaoDaParaibaLogo from "@/assets/images/brasao-da-paraiba.png";
import funadLogo from "@/assets/images/funad.jpeg";
import ministerioLogo from "@/assets/images/ministerioLogo.png";
import ufpbLogo from "@/assets/images/UFPB.png";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { href } from "react-router-dom";

const socialButtons = [
  {
    Icon: FaInstagram,
    alt: "Instagram",
    href: "https://www.instagram.com/petsaude_pcd?igsh=N2d6czAyam0zNjRt",
  },
  { Icon: MdAlternateEmail, 
    alt: "Email", 
    href: "mailto:pet.saude.pcd@gmail.com",
  },
  { Icon: FaGithub, 
    alt: "GitHub",
    href: "https://github.com/PET-Saude-Digital-GT-01-PCD",
  },
];

const realizationLogos = [
  { src: funadLogo, alt: "Logo da FUNAD" },
  { src: ministerioLogo, alt: "Logo do Ministerio da Saude" },
  { src: ufpbLogo, alt: "Logo da UFPB" },
  { src: brasaoDaParaibaLogo, alt: "Brasao da Paraiba" },
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
    <section
      aria-labelledby="site-map-list-title"
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-t border-border bg-gray-100 px-6 py-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="w-full md:col-span-3">
            <h2
              id="site-map-list-title"
              className="mb-3 text-left text-[19px] font-bold text-primary"
            >
              Realização
            </h2>

            <div className="mb-7 border-t border-border" />

            <div className="mr-auto flex w-full max-w-[17.5rem] flex-col rounded-[18px] bg-zinc-700 px-6 py-4 shadow-lg">
              <div className="mb-4 flex items-center justify-center gap-3">
                {socialButtons.map((button) => {
                  const Icon = button.Icon;
                  const content = <Icon className="h-5 w-5 text-zinc-700" aria-hidden="true" />;

                  if (button.href) {
                    return (
                      <a
                        key={button.alt}
                        href={button.href}
                        aria-label={button.alt}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition hover:opacity-85"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <button
                      key={button.alt}
                      type="button"
                      aria-label={button.alt}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition hover:opacity-85"
                    >
                      {content}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setIsAboutModalOpen(true)}
                className="mx-auto h-9 w-full max-w-[12.5rem] rounded-full bg-white px-4 text-[13px] font-semibold text-zinc-700 transition hover:bg-zinc-100"
              >
                Sobre nos
              </button>
            </div>
          </div>

          <div className="w-full md:col-span-2">
            <h2 className="mb-3 text-left text-[19px] font-bold text-primary">
              Colaboradores
            </h2>

            <div className="mb-7 border-t border-border" />

            <ul className="grid grid-cols-4 gap-3">
              {realizationLogos.map((logo) => (
                <li
                  key={logo.alt}
                  className="flex h-16 items-start justify-start overflow-hidden rounded-md border border-border bg-white/70 p-1"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-full origin-left scale-110 object-contain object-left"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="-mx-6 mt-10 bg-zinc-700 py-3">
        <p className="text-center text-[13px] font-medium text-zinc-100">
          &copy; 2026 Copyright - Pet Saúde Digital
        </p>
      </div>

      {isAboutModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setIsAboutModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sobre-nos-title"
            className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex justify-end">
              <button
                type="button"
                aria-label="Fechar modal"
                className="rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-muted"
                onClick={() => setIsAboutModalOpen(false)}
              >
                Fechar
              </button>
            </div>

            <h2 id="sobre-nos-title" className="text-2xl font-semibold text-foreground">
              O que é o PET-Saúde Digital
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
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

            <h3 className="mt-8 text-2xl font-semibold text-foreground">
              GT-01 PCD
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              O GT-01 PCD concentra suas acoes no fortalecimento da assistencia digital voltada as pessoas com deficiencia, os professores responsaveis por este grupo sao o Prof. Dra. Eduardo e o Prof Robson, do departamento de fisioterapia.
            </p>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">
              Porque fizemos essa aplicação
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Esta aplicacao foi criada para organizar informacoes essenciais do
              projeto em um unico ambiente. A proposta e tornar os dados mais
              acessiveis, apoiar o acompanhamento das iniciativas e estimular a
              continuidade das acoes de ensino, pesquisa e extensao.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
