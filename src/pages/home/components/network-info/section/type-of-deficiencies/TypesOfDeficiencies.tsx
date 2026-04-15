import defAuditiva from "@/assets/images/disabillity-images/deficiencia_auditiva.png";
import defFisica from "@/assets/images/disabillity-images/deficiencia_fisica.png";
import defIntelectual from "@/assets/images/disabillity-images/deficiencia_intelectual.png";
import defVisual from "@/assets/images/disabillity-images/deficiencia_visual.png";
import simAutismo from "@/assets/images/disabillity-images/simbolo_autismo.png";

interface DeficiencyType {
  id: string;
  title: string;
  text: string;
  icon: string;
}

const deficienciesData: DeficiencyType[] = [
  {
    id: "fisica",
    title: "Deficiência Física",
    icon: defFisica,
    text: "Alterações no corpo que podem comprometer a mobilidade ou a coordenação.",
  },
  {
    id: "auditiva",
    title: "Deficiência Auditiva",
    icon: defAuditiva,
    text: "Perda parcial ou total da audição, podendo exigir aparelhos auditivos.",
  },
  {
    id: "visual",
    title: "Deficiência Visual",
    icon: defVisual,
    text: "Desde a baixa visão até a cegueira total, envolvendo apoios como Braille.",
  },
  {
    id: "intelectual",
    title: "Deficiência Intelectual",
    icon: defIntelectual,
    text: "Dificuldades no aprendizado e na compreensão de tarefas do dia a dia.",
  },
  {
    id: "tea",
    title: "TEA (Autismo)",
    icon: simAutismo,
    text: "Forma diferente de o cérebro lidar com informações, afetando interação e percepção.",
  },
];

export default function TypesOfDeficiencies() {
  return (
    <section
      aria-labelledby="deficiencies"
      id="types-of-deficiencies"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="text-left mb-16">
          <h2 id="deficiencies" className="text-4xl font-bold mb-4 text-black">
            Os CERs atendem pessoas com:
          </h2>
          <div className="w-24 h-1.5 bg-[var(--cor-bg-1)] rounded-full mb-6"></div>
        </header>

        <div className="flex flex-wrap justify-center gap-6">
          {deficienciesData.map((item) => {

            return (
              <div
                key={item.id}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full sm:w-[350px] flex flex-col items-center focus:outline-none focus:ring-4 focus:ring-[var(--cor-bg-1)]/50"
              >
                <div
                  aria-hidden="true"
                  className="mb-6 flex justify-center bg-[color-mix(in_srgb,var(--cor-bg-1),white_90%)] w-20 h-20 items-center rounded-full transition-all duration-300 group-hover:bg-[var(--cor-bg-1)]"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-12 h-12 object-contain rounded-md transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                <div className="text-center flex-1 flex flex-col">
                  <h3 className="font-bold text-3xl text-black mb-3 group-hover:text-[var(--cor-bg-1)] group-focus:text-[var(--cor-bg-1)] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-black text-2xl leading-relaxed font-medium">
                    {item.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
