import { Accessibility, Ear, Eye, Brain, Puzzle } from "lucide-react";

export default function TypesOfDeficiencies() {
  const items = [
    {
      title: "Deficiência Física",
      icon: <Accessibility className="w-12 h-12" />,
      text: "Alterações no corpo que podem comprometer a mobilidade ou a coordenação.",
    },
    {
      title: "Deficiência Auditiva",
      icon: <Ear className="w-12 h-12" />,
      text: "Perda parcial ou total da audição, podendo exigir aparelhos auditivos.",
    },
    {
      title: "Deficiência Visual",
      icon: <Eye className="w-12 h-12" />,
      text: "Desde a baixa visão até a cegueira total, envolvendo apoios como Braille.",
    },
    {
      title: "Deficiência Intelectual",
      icon: <Brain className="w-10 h-10" />,
      text: "Dificuldades no aprendizado e na compreensão de tarefas do dia a dia.",
    },
    {
      title: "TEA (Autismo)",
      icon: <Puzzle className="w-10 h-10" />,
      text: "Forma diferente de o cérebro lidar com informações, afetando interação e percepção.",
    },
  ];

  return (
    <section
      aria-label="seção de tipos de deficiências"
      id="types-of-deficiencies"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-left mb-16">
          <h1 className="text-4xl font-bold mb-4 focus-within:border-[var(--cor-bg-1)] focus-within:border-5">
            Tipos de Deficiência
          </h1>
          <div className="w-24 h-1 bg-[var(--cor-bg-1)] rounded-full"></div>
          <p
            className="mt-4 max-w-6xl text-2xl opacity-90 focus-within:border-[var(--cor-bg-1)] focus-within:border-5"
            tabIndex={0}
          >
            Entenda as particularidades de cada modalidade atendida pela rede de
            cuidados.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full sm:w-[350px] flex flex-col items-center"
            >
              <div className="text-[color-mix(in_srgb,var(--cor-bg-1),black_30%)] mb-6 flex justify-center bg-[color-mix(in_srgb,var(--cor-bg-1),white_90%)] w-20 h-20 items-center rounded-full transition-all duration-300">
                {item.icon}
              </div>
              <div className="text-center">
                <p className="inline font-bold text-2xl text-black mb-3 text-center focus-within:border-[var(--cor-bg-1)] focus-within:border-5">
                  {item.title}
                </p>{" "}
                <br />
                <p
                  aria-hidden="true"
                  className="inline text-black text-sm text-center leading-relaxed font-medium focus-within:border-[var(--cor-bg-1)] focus-within:border-5"
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
