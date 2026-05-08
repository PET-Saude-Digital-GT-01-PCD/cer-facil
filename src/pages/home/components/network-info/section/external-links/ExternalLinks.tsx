import { ExternalLink } from "lucide-react";

const links = [
  {
    title: "Saúde da Pessoa com Deficiência",
    description:
      "Portal geral do Ministério da Saúde com informações sobre saúde da pessoa com deficiência.",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-pessoa-com-deficiencia",
  },
  {
    title: "Rede de Cuidado à Pessoa com Deficiência (RCPD)",
    description:
      "Informações oficiais sobre a Rede de Cuidados à Pessoa com Deficiência no SUS.",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-pessoa-com-deficiencia/rcpd",
  },
  {
    title: "Legislação",
    description:
      "Leis, portarias e normas que regulamentam a saúde da pessoa com deficiência no Brasil.",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-pessoa-com-deficiencia/legislacao",
  },
  {
    title: "Publicações",
    description:
      "Publicações do Ministério da Saúde sobre saúde da pessoa com deficiência.",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-pessoa-com-deficiencia/publicacoes",
  },
  {
    title: "Notas Técnicas",
    description:
      "Notas técnicas oficiais com orientações para gestores e profissionais da rede.",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-pessoa-com-deficiencia/notas-tecnicas",
  },
  {
    title: "Notas Informativas",
    description:
      "Notas informativas do Ministério da Saúde sobre atualizações e orientações da rede.",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-pessoa-com-deficiencia/notas-informativas",
  },
];

export default function ExternalLinks() {
  return (
    <section
      aria-labelledby="external-links"
      id="external-links"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="text-left mb-8">
          <h2
            id="external-links"
            className="text-4xl font-bold mb-4 text-white"
          >
            Mais informações
          </h2>
          <div className="w-24 h-1 bg-white/40 rounded-full"></div>
          <p className="text-white/80 mt-4 max-w-4xl text-2xl leading-relaxed">
            Acesse os portais oficiais do Ministério da Saúde sobre saúde da
            pessoa com deficiência.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-4 bg-white/10 border border-white/20 rounded-2xl p-6
                         hover:bg-white/20 transition-all duration-300
                         focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--cor-destaque)] focus-visible:ring-offset-2"
            >
              <div>
                <h3 className="font-bold text-xl text-white mb-2 group-hover:underline">
                  {link.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {link.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-white font-semibold text-lg mt-2">
                Acessar <ExternalLink className="w-5 h-5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
