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
      className="px-6 py-20 bg-gradient-to-b from-white to-blue-50/30 relative"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-left mb-12">
          <h2 className="font-bold text-4xl mb-4 text-black">
            O que é a Rede de Cuidado à Pessoa com Deficiência (RCPD)?
          </h2>
          <div className="w-24 h-1 bg-[var(--cor-3)] rounded-full"></div>
        </div>

        <div className="space-y-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 flex flex-col items-center text-center">
                  <feature.icon className="w-16 h-16 text-[var(--cor-3)] mb-4" />
                  <h3 className="font-bold text-2xl">{feature.title}</h3>
                </div>
              </div>
              <div className={`${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="text-lg leading-relaxed text-gray-700">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
