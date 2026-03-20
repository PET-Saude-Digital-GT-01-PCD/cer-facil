import { featuresData } from "./WhatIsRCPD.data.ts";

export default function WhatIsRCPD() {
  return (
    <section
      aria-labelledby="rcpd"
      id="what-is-rcpd"
      className="px-6 py-20 relative bg-[var(--cor-bg-1)]">
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <header className="text-left mb-16">
          <h2
            id="rcpd"
            tabIndex={-1}
            className="font-bold text-4xl mb-4 text-white outline-none focus:ring-0"
          >
            O que é a Rede de Cuidado à Pessoa com Deficiência (RCPD)?
          </h2>
          <div className="w-24 h-1.5 bg-white rounded-full"></div>
        </header>

        {/* Lista de Funcionalidades */}
        <div className="space-y-16">
          {featuresData.map((feature, idx) => {
            const Icon = feature.icon;
            const isEven = idx % 2 === 0;

            return (
              <article
                key={feature.id}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Coluna do Card (Alterna a ordem no Desktop) */}
                <div className={isEven ? "md:order-1" : "md:order-2"}>
                  <div className="bg-white p-10 rounded-2xl shadow-2xl flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
                    <Icon
                      aria-hidden="true"
                      className="w-20 h-20 text-[color-mix(in_srgb,var(--cor-bg-1),black_20%)] mb-4"
                    />
                    {/* Mudança para h3 para respeitar a hierarquia da página */}
                    <h3 className="font-bold text-slate-900 text-3xl">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Coluna do Texto (Alterna a ordem no Desktop) */}
                <div className={isEven ? "md:order-2" : "md:order-1"}>
                  {typeof feature.desc === "string" ? (
                    /* Renderiza as features antigas que ainda são apenas texto */
                    <p className="text-2xl leading-relaxed text-blue-50 font-medium">
                      {feature.desc}
                    </p>
                  ) : (
                    /* Renderiza a nossa nova feature estruturada */
                    <div className="text-2xl leading-relaxed text-blue-50 font-medium">
                      <h4>{feature.desc.intro}</h4>

                      {/* Lista com Tailwind: list-decimal cria os números, ml-8 dá o recuo, space-y-2 separa os itens */}
                      <ol className="list-decimal ml-8 my-4 space-y-2">
                        {feature.desc.list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ol>

                      <p>{feature.desc.outro}</p>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
