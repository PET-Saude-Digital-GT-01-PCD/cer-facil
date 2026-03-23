import { useState, useMemo } from "react";
import { ChevronDown, Filter, X, Accessibility, Ear, Eye, Brain, Puzzle, LucideIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FilterOption {
  id: number;
  label: string;
  icon: LucideIcon;
}

const filterOptionsData: FilterOption[] = [
  { id: 1, label: "Física", icon: Accessibility },
  { id: 2, label: "Auditiva", icon: Ear },
  { id: 3, label: "Visual", icon: Eye },
  { id: 4, label: "Intelectual", icon: Brain },
  { id: 5, label: "TEA", icon: Puzzle },
];

interface Professional {
  professional: string;
  description: string;
  service: number[];
}

const professionalsData: Professional[] = [
  {
    professional: "Fisioterapeuta",
    description:
      "Profissional responsável por avaliar e tratar alterações de movimento e postura...",
    service: [1, 4, 5],
  },
  {
    professional: "Terapeuta Ocupacional",
    description:
      "Ajuda a pessoa a ter mais independência para realizar atividades do cotidiano, como se vestir, comer ou trabalhar. Ele cria oficinas, adapta o ambiente e treina o uso de aparelhos que facilitam a rotina do paciente.",
    service: [1, 3, 4, 5],
  },
  {
    professional: "Enfermeiro",
    description:
      "Faz consultas, curativos e administra remédios, cuidando de perto da evolução do paciente. Ele organiza os cuidados diários, orienta a família e lidera a equipe de enfermagem para garantir um atendimento seguro.",
    service: [1, 2, 3, 4, 5],
  },
  {
    professional: "Técnico de Enfermagem",
    description:
      "Oferece cuidado direto no dia a dia, ajudando o paciente a se recuperar e ter mais qualidade de vida, sempre com um olhar humano e apoiando os outros profissionais de saúde.",
    service: [1, 2, 3, 4, 5],
  },
  {
    professional: "Psicólogo",
    description:
      "Realiza avaliações e sessões de terapia para cuidar da saúde mental e emocional. Ele conversa com o paciente e a família, ajuda a entender os sentimentos e orienta sobre como lidar com os desafios.",
    service: [1, 2, 3, 4, 5],
  },
  {
    professional: "Assistente Social",
    description:
      "Identifica as necessidades sociais do paciente e ajuda a garantir seus direitos, ligando-o a serviços como escola e auxílios do governo. Ele trabalha para que a pessoa seja incluída na sociedade e incentiva a participação no tratamento.",
    service: [1, 2, 3, 4, 5],
  },
  {
    professional: "Fonoaudiólogo",
    description:
      "Cuida de tudo que envolve a comunicação (fala, audição e voz) e também de problemas para mastigar ou engolir alimentos. Ele faz testes, emite laudos e realiza terapias para melhorar a forma como o paciente se comunica e se alimenta.",
    service: [1, 2, 4, 5],
  },
  {
    professional: "Nutricionista",
    description:
      "Acompanha o peso e a saúde alimentar, criando dietas personalizadas para as necessidades de cada um. Ele ensina sobre alimentação saudável e ajuda no treinamento de como comer melhor no dia a dia.",
    service: [1, 2, 3, 4, 5],
  },
  {
    professional: "Ortoptista",
    description:
      'Funciona como um "fisioterapeuta para os olhos", tratando problemas como o estrabismo (olhos desalinhados) ou a visão dupla para melhorar o conforto visual.',
    service: [3],
  },
  {
    professional: "Pedagogo",
    description:
      "Especialista em ensino que cria formas diferentes de ajudar crianças e adultos a aprenderem melhor, superando dificuldades com materiais e aulas adaptadas.",
    service: [4, 5],
  },
  {
    professional: "Psicopedagogo",
    description:
      "Une a psicologia e a educação para entender por que alguém tem dificuldade de aprender. Ele cria estratégias personalizadas para ajudar pessoas com deficiência a ganharem novos conhecimentos na escola ou no dia a dia.",
    service: [4, 5],
  },
  {
    professional: "Musicoterapeuta",
    description:
      "Usa a música, como o ritmo e o canto, para ajudar no bem-estar emocional e na recuperação física, sendo muito útil no cuidado do autismo e da coordenação motora.",
    service: [1, 4, 5],
  },
  {
    professional: "Arteterapeuta",
    description:
      "Usa a arte (desenho, pintura, criação) para ajudar o paciente a se expressar e se recuperar. O importante aqui não é a beleza do desenho, mas como a arte ajuda a pessoa a se sentir melhor.",
    service: [1, 4, 5],
  },
  {
    professional: "Massoterapeuta",
    description:
      "Especialista em massagens que ajudam a aliviar dores, reduzir o estresse e melhorar a circulação do corpo, trazendo relaxamento e bem-estar.",
    service: [1],
  },
  {
    professional: "Profissional de Educação Física",
    description:
      "Ajuda na recuperação do corpo através de exercícios físicos planejados, complementando o trabalho da fisioterapia para que a pessoa ganhe mais fôlego e disposição.",
    service: [1, 4, 5],
  },
  {
    professional: "Psicomotricista",
    description:
      "Estuda como o movimento do corpo está ligado às emoções e ao pensamento. Ele usa atividades motoras para ajudar a pessoa a ter mais autoconhecimento e autonomia.",
    service: [1, 4, 5],
  },
  {
    professional: "Protético Ocular",
    description:
      'Cria próteses personalizadas (como o "olho de vidro") para quem perdeu o globo ocular, devolvendo a estética do rosto e ajudando na autoestima e na proteção do olho.',
    service: [3],
  },
  {
    professional: "Técnico de Orientação e Mobilidade",
    description:
      "Ensina pessoas cegas ou com baixa visão a andar sozinhas com segurança, usando a bengala e treinando os outros sentidos, como o tato e a audição.",
    service: [3],
  },
  {
    professional: "Técnico Oftálmico",
    description:
      "Dá suporte técnico no cuidado dos olhos, ajudando o paciente a entender como usar lentes e aparelhos visuais indicados pelo médico.",
    service: [3],
  },
];

export default function ProfessionalsRoles() {
  const [activeFilters, setActiveFilters] = useState<number[]>([]);
  const [openProf, setOpenProf] = useState<string | null>(null);

  const filteredProfessionals = useMemo(() => {
    if (activeFilters.length === 0) return professionalsData;

    return professionalsData.filter((prof) =>
      prof.service.some((id) => activeFilters.includes(id)),
    );
  }, [activeFilters]);

  const iniciais = filteredProfessionals.slice(0, 6);
  const restantes = filteredProfessionals.slice(6);

  const toggleFilter = (id: number) => {
    setOpenProf(null);
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setOpenProf(null);
  };

  return (
    <section
      aria-labelledby="prof-roles"
      className="px-6 py-24 pt-0 font-sans bg-[--var(bg-color-1)]">
      <div className="mx-auto max-w-6xl">
        <header className="text-left mb-12">
          <h2 id="prof-roles" className="text-4xl font-bold mb-4 text-white leading-tight">
            Equipe Multiprofissional
          </h2>
          <div className="w-20 h-1.5 bg-white rounded-full mb-6"></div>

          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
            <div
              aria-label="filtro por especialidade"
              className="flex items-center gap-2 mb-4 text-black font-semibold uppercase text-xl tracking-wider"
            >
              <Filter size={18} />
              <span>Filtrar por Especialidade:</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {filterOptionsData.map((option) => {
                const Icon = option.icon;
                const isActive = activeFilters.includes(option.id);

                return (
                  <button
                    role="checkbox"
                    aria-checked={isActive}
                    key={option.id}
                    onClick={() => toggleFilter(option.id)}
                    className={`focus-within:border-10 focus-within:border-[var(--cor-destaque)] cursor-pointer flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xl transition-all duration-200 border-2 ${
                      isActive
                        ? "bg-[var(--cor-bg-1)] border-[var(--cor-bg-1)] text-white shadow-md"
                        : "bg-white border-[var(--cor-bg-1)]/30 text-[var(--cor-bg-1)] hover:border-[var(--cor-bg-1)]"
                    }`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                    <span>{option.label}</span>
                    {isActive && <X size={14} className="ml-1" />}
                  </button>
                );
              })}

              {activeFilters.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] cursor-pointer ml-2 text-slate-400 hover:text-red-500 text-xl font-medium transition-colors"
                >
                  Limpar tudo
                </button>
              )}
            </div>
          </div>
        </header>

        {filteredProfessionals.length > 0 ? (
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
              {iniciais.map((prof) => (
                <ProfessionalCard
                  key={prof.professional}
                  prof={prof}
                  isOpen={openProf === prof.professional}
                  onToggle={() =>
                    setOpenProf(
                      openProf === prof.professional ? null : prof.professional,
                    )
                  }
                />
              ))}
            </div>

            {restantes.length > 0 && (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="grid-restante" className="border-none">
                  <AccordionContent className="overflow-visible">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                      {restantes.map((prof) => (
                        <ProfessionalCard
                          key={prof.professional}
                          prof={prof}
                          isOpen={openProf === prof.professional}
                          onToggle={() =>
                            setOpenProf(
                              openProf === prof.professional
                                ? null
                                : prof.professional,
                            )
                          }
                        />
                      ))}
                    </div>
                  </AccordionContent>

                  <div className="flex justify-center mt-12">
                    <AccordionTrigger className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] cursor-pointer text-xl flex gap-3 items-center text-white px-8 py-4 font-bold transition-all border-white/40 rounded-full hover:bg-white hover:text-[var(--cor-bg-1)] data-[state=open]:hidden shadow-lg [&>svg]:w-6 [&>svg]:h-6">
                      Ver mais
                    </AccordionTrigger>
                  </div>
                </AccordionItem>
              </Accordion>
            )}
          </div>
        ) : (
          <div className="py-12 text-center text-slate-400 bg-white/5 rounded-xl border-2 border-dashed border-white/20">
            Nenhum profissional encontrado para os filtros selecionados.
          </div>
        )}
      </div>
    </section>
  );
}

function ProfessionalCard({
  prof,
  isOpen,
  onToggle,
}: {
  prof: Professional;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-xl transition-all duration-300 h-fit bg-white ${
        isOpen
          ? "border-[var(--cor-bg-1)] shadow-xl ring-1 ring-emerald-50 scale-[1.01]"
          : "border-slate-100 shadow-sm hover:border-emerald-200 hover:shadow-md"
      }`}
    >
      <button
        onClick={onToggle}
        className="focus-within:border-10 focus-within:border-[var(--cor-destaque)] w-full text-left px-6 py-5 flex items-center justify-between select-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--cor-bg-1)] focus:ring-offset-2"
        aria-expanded={isOpen}
      >
        <span
          className={`font-bold text-xl transition-colors flex items-center ${
            isOpen ? "text-[var(--cor-bg-1)]" : "text-slate-800"
          }`}
        >
          <span
            className="inline-block flex-shrink-0 w-2.5 h-2.5 rounded-full mr-3 bg-[var(--cor-bg-1)]"
            aria-hidden="true"
          />
          {prof.professional}
        </span>
        <ChevronDown
          className={`transition-transform duration-300 flex-shrink-0 ml-2 ${
            isOpen ? "rotate-180 text-[var(--cor-bg-1)]" : "text-slate-400"
          }`}
          size={18}
          aria-hidden="true"
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 pt-2 text-slate-600 text-xl leading-relaxed border-t border-slate-50">
            {prof.description}
          </p>
        </div>
      </div>
    </div>
  );
}
