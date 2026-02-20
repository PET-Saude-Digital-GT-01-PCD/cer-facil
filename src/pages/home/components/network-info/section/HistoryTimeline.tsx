import { Circle } from "lucide-react";
import timelineData from "@/data/timeline-history.json";

const detailedMessages = [
  "A Rede de Apoio à Pessoa com Deficiência foi estruturada no Brasil a partir da necessidade de superar um modelo de cuidado fragmentado, no qual os atendimentos eram pontuais e pouco articulados entre si.",
  "Em 2012, no âmbito do Sistema Único de Saúde (SUS), a Rede de Cuidado à Pessoa com Deficiência (RCPD) foi oficialmente instituída como parte da Rede de Atenção à Saúde (RAS), integrada ao Plano Nacional dos Direitos da Pessoa com Deficiência — o Viver sem Limite.",
  "Desde então, a rede vem sendo ampliada e aprimorada, incorporando novos serviços, fortalecendo a atenção básica, os centros especializados de reabilitação e a articulação com outras políticas públicas.",
  "Essa evolução reflete uma mudança de perspectiva: do cuidado centrado apenas na deficiência para um cuidado centrado na pessoa e em seus direitos.",
  "Hoje, a rede segue em constante construção, adaptando-se às demandas sociais, territoriais e às diferentes realidades das pessoas com deficiência no país.",
];

export default function HistoryTimeline() {
  return (
    <section id="history-rcpd" className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-left mb-12">
          História da Rede de Cuidado à Pessoa com Deficiência{" "}
        </h2>

        <div className="relative">
          {/* Linha vertical central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300" />

          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Conteúdo à esquerda (pares) */}
              {index % 2 === 0 && (
                <>
                  <div className="w-5/12 pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                        {detailedMessages[index]}
                      </p>
                    </div>
                  </div>

                  {/* Ícone central */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div
                      className={`flex items-center justify-center w-12 h-12 ${item.color} rounded-full border-4 border-white z-10`}
                    >
                      <Circle
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  <div className="w-5/12"></div>
                </>
              )}

              {/* Conteúdo à direta (ímpares) */}
              {index % 2 === 1 && (
                <>
                  <div className="w-5/12"></div>

                  {/* Ícone central */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div
                      className={`flex items-center justify-center w-12 h-12 ${item.color} rounded-full border-4 border-white z-10`}
                    >
                      <Circle
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  <div className="w-5/12 pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                        {detailedMessages[index]}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
