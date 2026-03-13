import { Heart, Users, Shield } from "lucide-react";

export default function WhatIsRCPD() {
  const features = [
    {
      icon: Heart,
      title: "Cuidado Para Todas as Idades",
      desc: "A Rede existe para garantir que as pessoas com deficiência tenham um atendimento melhor e mais fácil no SUS. O objetivo é oferecer um cuidado completo e de qualidade em todas as etapas da vida, desde a infância até a velhice.",
    },
    {
      icon: Shield,
      title: "Prevenção",
      desc: "O trabalho da Rede foca em três frentes: evitar doenças (prevenção), descobrir deficiências o quanto antes para começar o tratamento cedo (identificação precoce) e ajudar na recuperação da autonomia (reabilitação). Tudo isso é feito respeitando as necessidades específicas de cada tipo de deficiência.",
    },
    {
      icon: Users,
      title: "Disponível Para Todas as Pessoas com Deficiência",
      desc: "A Rede garante que o atendimento seja justo e acessível para todos. O foco é eliminar barreiras e promover a inclusão, para que todas as pessoas com deficiência tenham as mesmas oportunidades de cuidar da sua saúde com dignidade.",
    },
  ];

  return (
    <section
      id="what-is-rcpd"
      className="px-6 py-20 relative"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-left mb-16">
          <h2 className="font-bold text-4xl mb-4 text-white">
            O que é a Rede de Cuidado à Pessoa com Deficiência (RCPD)?
          </h2>
          <div className="w-24 h-1 bg-white rounded-full"></div>
        </div>

        <div className="space-y-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div
                className={`${idx % 2 === 1 ? "md:order-2" : ""}`}
                tabIndex={0}
              >
                <div className="bg-white p-10 rounded-2xl shadow-2xl flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
                  <feature.icon aria-hidden="true" className="w-20 h-20 text-[color-mix(in_srgb,var(--cor-bg-1),black_20%)] mb-4" />
                  <h2 className="font-bold text-gray-900 text-3xl">{feature.title}</h2>
                </div>
              </div>
              <div
                className={`${idx % 2 === 1 ? "md:order-1" : ""}`}
                tabIndex={0}
              >
                <p className="text-2xl leading-relaxed text-blue-50 font-medium">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
