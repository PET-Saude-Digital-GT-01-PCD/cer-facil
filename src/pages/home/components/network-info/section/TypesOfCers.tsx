import { Building2 } from "lucide-react";

export default function TypesOfCers() {
  return (
    <section id="types-of-cer-deficiencies" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho da Seção */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="text-left mb-16">
              {/* Texto principal agora em Branco para contraste no Verde */}
              <h2 className="text-4xl font-bold mb-4 text-white">
                Conheça os Diferentes <br /> Tipos de CERs
              </h2>
              <div className="w-24 h-1 bg-white rounded-full"></div>
              <p className="text-white mt-6 max-w-2xl text-lg leading-relaxed opacity-90">
                Os Centros Especializados em Reabilitação (CER) são unidades de
                saúde focadas em oferecer tratamentos especializados e
                diagnósticos precisos.
              </p>
            </div>

            {/* Cards dos CERs com Ícones em tons de Verde */}
            <div className="space-y-4">
              {[
                {
                  id: "II",
                  desc: "Atendimento a duas modalidades de reabilitação.",
                },
                {
                  id: "III",
                  desc: "Organizado para oferecer três modalidades de reabilitação.",
                },
                {
                  id: "IV",
                  desc: "Maior complexidade: Auditiva, Física, Intelectual e Visual.",
                },
              ].map((cer) => (
                <div
                  key={cer.id}
                  className="group flex items-center p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Ícone em Verde Esmeralda Escuro */}
                  <div className="bg-[color-mix(in_srgb,var(--cor-bg-1),white_90%)] text-[color-mix(in_srgb,var(--cor-bg-1),black_30%)] p-3 rounded-xl mr-4 group-hover:bg-[var(--cor-bg-1)] group-hover:text-white transition-all duration-300">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg">
                      CER {cer.id}
                    </h3>
                    <p className="text-[color-mix(in_srgb,var(--cor-bg-1),black_20%)] text-sm font-medium">
                      {cer.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-white/10 rounded-full blur-3xl opacity-20 -z-10"></div>
            <img
              className="rounded-3xl shadow-2xl border-[12px] border-white/30 backdrop-blur-md"
              src="https://conclinica.com.br/wp-content/uploads/2025/09/atendimento-humanizado-na-saude.png"
              alt="Equipe médica"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
