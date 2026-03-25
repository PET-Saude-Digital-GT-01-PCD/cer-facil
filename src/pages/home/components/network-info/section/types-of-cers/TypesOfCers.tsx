import { Building2 } from "lucide-react";
import cerImageCover from "@/assets/images/types-of-cers/reabilitação.jpg";

interface CerType {
  id: string;
  desc: string;
}

const cerTypesData: CerType[] = [
  {
    id: "II",
    desc: "Atende dois tipos de deficiências.",
  },
  {
    id: "III",
    desc: "Atende três tipos de deficiências.",
  },
  {
    id: "IV",
    desc: "Maior complexidade: Auditiva, Física, Intelectual e Visual.",
  },
];

export default function TypesOfCers() {
  return (
    <section 
      aria-labelledby="cer-types"
      id="types-of-cer-deficiencies" 
      className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <header className="text-left mb-16">
              <h2 id="cer-types" className="text-4xl font-bold mb-4 text-white">
                Conheça os Diferentes <br /> Tipos de CERs
              </h2>
              <div className="w-24 h-1 bg-white rounded-full"></div>
              <p className="text-white mt-6 max-w-2xl text-2xl leading-relaxed opacity-90">
                Os Centros Especializados em Reabilitação (CER) são unidades de
                saúde focadas em oferecer tratamentos especializados e
                diagnósticos precisos.
              </p>
            </header>

            <ul aria-label="lista dos tipos de cer" className="space-y-4">
              {cerTypesData.map((cer) => (
                <li
                  aria-label={`cer ${cer.id}, ${cer.desc}`}
                  key={cer.id}
                  className="group flex items-center p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div
                    aria-hidden="true"
                    className="bg-[color-mix(in_srgb,var(--cor-bg-1),white_90%)] text-[color-mix(in_srgb,var(--cor-bg-1),black_30%)] p-3 rounded-xl mr-4 group-hover:bg-[var(--cor-bg-1)] group-hover:text-white transition-all duration-300 flex-shrink-0"
                  >
                    <Building2 size={48} />
                  </div>
                  <div>
                    <h3 id="cer-id" aria-hidden="true" className="font-bold text-black text-2xl">
                      CER {cer.id}
                    </h3>
                    <p id="cer-descricao" aria-hidden="true" className="inline text-black text-xl font-medium">
                      {cer.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-white/10 rounded-full blur-3xl opacity-20 -z-10"></div>
            <img
              className="rounded-3xl shadow-2xl border-[12px] border-white/30 backdrop-blur-md object-cover w-full h-auto"
              src={cerImageCover}
              alt="Ilustração de pessoas em reabilitação"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
