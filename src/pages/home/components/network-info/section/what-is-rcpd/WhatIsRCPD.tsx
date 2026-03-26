import { Heart, Users, Shield, type LucideIcon } from "lucide-react";

interface RcpdFeature {
  id: string;
  title: string;
  desc:
    | string
    | {
        intro: string;
        list: string[];
        outro: string;
      };
  icon: LucideIcon;
}

const featuresData: RcpdFeature[] = [
  {
    id: "cuidado-todas-idades",
    title: "Cuidado para Todas as Idades",
    icon: Heart,
    desc: "A Rede foi criada  para garantir que as pessoas com deficiência tenham um atendimento de qualidade e mais acessível  no SUS. O objetivo é oferecer acompanhamento completo para as todas as idades.",
  },
  {
    id: "prevencao",
    title: "Prevenção",
    icon: Shield,
    desc: {
      intro: "O trabalho da Rede foca em três frentes:",
      list: [
        "evitar doenças (prevenção)",
        "diagnosticar deficiências o quanto antes para iniciar o tratamento (identificação precoce)",
        "contribuir na recuperação da autonomia (reabilitação).",
      ],
      outro:
        "Tudo isso é pensado respeitando as necessidades específicas de cada tipo de deficiência.",
    },
  },
  {
    id: "disponivel-todas-pessoas",
    title: "Disponível Para Todas as Pessoas com Deficiência",
    icon: Users,
    desc: "A Rede busca garantir  que o atendimento seja adequado e acessível para todos, superando barreiras e promovendo a inclusão. Assim, todas as pessoas com deficiência podem ter oportunidades iguais para  cuidar da saúde com dignidade e respeito às necessidades de cada um.",
  },
];

export default function WhatIsRCPD() {
  return (
    <section
      aria-labelledby="rcpd"
      id="what-is-rcpd"
      className="px-6 py-20 relative bg-[var(--cor-bg-1)]"
    >
      <div className="mx-auto max-w-6xl">
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

        <div className="space-y-16">
          {featuresData.map((feature, idx) => {
            const Icon = feature.icon;
            const isEven = idx % 2 === 0;

            return (
              <article
                key={feature.id}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={isEven ? "md:order-1" : "md:order-2"}>
                  <div className="bg-white p-10 rounded-2xl shadow-2xl flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
                    <Icon
                      aria-hidden="true"
                      className="w-20 h-20 text-[color-mix(in_srgb,var(--cor-bg-1),black_20%)] mb-4"
                    />
                    <h3 className="font-bold text-[var(--cor-bg-1)] text-3xl">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                <div className={isEven ? "md:order-2" : "md:order-1"}>
                  {typeof feature.desc === "string" ? (
                    <p className="text-2xl leading-relaxed text-white font-medium">
                      {feature.desc}
                    </p>
                  ) : (
                    <div className="text-2xl leading-relaxed text-white font-medium">
                      <h4>{feature.desc.intro}</h4>
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
