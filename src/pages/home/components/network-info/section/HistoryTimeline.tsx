import { Circle, Calendar } from "lucide-react";
import timelineData from "@/data/timeline-history.json";

const circleColors = [
  "bg-[var(--cor-1)]",
  "bg-[var(--cor-1)]",
  "bg-[var(--cor-1)]",
  "bg-[var(--cor-1)]",
  "bg-[var(--cor-1)]",
];

export default function HistoryTimeline() {

  return (
    <section
      id="history-rcpd"
      className="px-6 py-20 bg-gradient-to-b from-blue-50/30 to-white relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">
            História da Rede de Cuidado à Pessoa com Deficiência (RCPD)
          </h2>
          <div className="w-24 h-1 bg-[var(--cor-5)] rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Uma jornada de evolução e compromisso com os direitos das Pessoas
            com Deficiência
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-[var(--cor-5)]" />

          {timelineData.map((item, index) => (
            <div key={item.id} className="relative flex items-center mb-10">
              {/* Mobile Layout */}
              <div className="md:hidden flex items-start gap-4 w-full">
                <div className="relative flex-shrink-0">
                  <div
                    className={`flex items-center justify-center w-14 h-14 ${circleColors[index]} rounded-full border-4 border-white shadow-lg z-10`}
                  >
                    <Circle
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:border-[var(--cor-1)] transition-all hover:shadow-xl"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-5 h-5 text-black" />
                      <h3 className="text-xl font-bold text-black">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 font-medium mb-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div
                className={`hidden md:flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
              >
                {index % 2 === 0 && (
                  <>
                    <div className="w-5/12 pr-8">
                      <div
                        className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:border-[var(--cor-1)] transition-all hover:shadow-xl"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-5 h-5 text-black" />
                          <h3 className="text-xl font-bold text-black">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 font-medium mb-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div
                        className={`flex items-center justify-center w-14 h-14 ${circleColors[index]} rounded-full border-4 border-white shadow-lg z-10 hover:scale-110 transition-transform`}
                      >
                        <Circle
                          className="w-7 h-7 text-white"
                          fill="currentColor"
                        />
                      </div>
                    </div>

                    <div className="w-5/12"></div>
                  </>
                )}

                {index % 2 === 1 && (
                  <>
                    <div className="w-5/12"></div>

                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div
                        className={`flex items-center justify-center w-14 h-14 ${circleColors[index]} rounded-full border-4 border-white shadow-lg z-10 hover:scale-110 transition-transform`}
                      >
                        <Circle
                          className="w-7 h-7 text-white"
                          fill="currentColor"
                        />
                      </div>
                    </div>

                    <div className="w-5/12 pl-8">
                      <div
                        className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:border-[var(--cor-1)] transition-all hover:shadow-xl"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-5 h-5 text-black" />
                          <h3 className="text-xl font-bold text-black">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 font-medium mb-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
