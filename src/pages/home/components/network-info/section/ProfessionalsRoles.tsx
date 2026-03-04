import { useState } from "react";
import { ChevronDown, Filter, X } from "lucide-react";
import professionals from "../../../../../data/professionals-functions.json";

export default function ProfessionalsRoles() {
    // Agora o estado é um array para suportar múltiplas seleções
    const [activeFilters, setActiveFilters] = useState<number[]>([]);
    const [openProf, setOpenProf] = useState<string | null>(null);

    const filterOptions = [
        { id: 1, label: "Física" },
        { id: 2, label: "Auditiva" },
        { id: 3, label: "Visual" },
        { id: 4, label: "Intelectual" },
        { id: 5, label: "TEA" },
    ];

    // Lógica de filtro: Se o array estiver vazio, mostra todos. 
    // Se houver filtros, mostra se o profissional tem PELO MENOS UM dos IDs selecionados.
    const filteredProfessionals = activeFilters.length === 0
        ? professionals
        : professionals.filter((prof) => 
            prof.service.some(id => activeFilters.includes(id))
          );

    const toggleFilter = (id: number) => {
        setOpenProf(null); // Fecha o accordion ao filtrar para evitar confusão visual
        setActiveFilters((prev) =>
            prev.includes(id) 
                ? prev.filter((item) => item !== id) 
                : [...prev, id]
        );
    };

    const clearFilters = () => {
        setActiveFilters([]);
        setOpenProf(null);
    };

    return (
        <section className="px-6 py-24 pt-0 bg-white font-sans">
            <div className="mx-auto max-w-6xl">
                
                {/* Cabeçalho */}
                <div className="text-left mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-slate-900 leading-tight">
                        Equipe Multiprofissional
                    </h2>
                    <div className="w-20 h-1.5 bg-orange-500 rounded-full mb-6"></div>
                    
                    {/* Área de Filtro Intuitiva */}
                    <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl">
                        <div className="flex items-center gap-2 mb-4 text-blue-800 font-semibold uppercase text-sm tracking-wider">
                            <Filter size={18} />
                            <span>Filtrar por Especialidade:</span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-3">
                            {filterOptions.map((option) => {
                                const isActive = activeFilters.includes(option.id);
                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => toggleFilter(option.id)}
                                        className={`
                                            px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 border-2
                                            ${isActive 
                                                ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-200" 
                                                : "bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"}
                                        `}
                                    >
                                        {option.label}
                                        {isActive && <X size={14} className="inline ml-2 mb-0.5" />}
                                    </button>
                                );
                            })}

                            {activeFilters.length > 0 && (
                                <button
                                    onClick={clearFilters}
                                    className="ml-2 text-slate-400 hover:text-red-500 text-sm font-medium transition-colors"
                                >
                                    Limpar tudo
                                </button>
                            )}
                        </div>
                        <p className="text-slate-500 text-xs mt-4 italic">
                            * Você pode selecionar múltiplas opções simultaneamente.
                        </p>
                    </div>
                </div>

                {/* Grid de Profissionais */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    {filteredProfessionals.length > 0 ? (
                        filteredProfessionals.map((prof) => {
                            const isOpen = openProf === prof.professional;

                            return (
                                <div
                                    key={prof.professional}
                                    className={`border rounded-xl transition-all duration-300 h-fit ${
                                        isOpen 
                                        ? "border-orange-300 shadow-lg ring-1 ring-orange-100 scale-[1.01]" 
                                        : "border-slate-100 bg-slate-50/50 hover:border-slate-200"
                                    }`}
                                >
                                    <button
                                        onClick={() => setOpenProf(isOpen ? null : prof.professional)}
                                        className="w-full text-left px-6 py-5 flex items-center justify-between select-none"
                                    >
                                        <span className={`font-bold transition-colors ${isOpen ? "text-orange-600" : "text-slate-800"}`}>
                                            <span className={`inline-block w-2 h-2 rounded-full mr-3 ${isOpen ? "bg-orange-500" : "bg-blue-400"}`} />
                                            {prof.professional}
                                        </span>
                                        <ChevronDown
                                            className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-500" : "text-slate-400"}`}
                                            size={20}
                                        />
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                        <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-50 bg-white rounded-b-xl">
                                            {prof.description}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-full py-12 text-center text-slate-400 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                            Nenhum profissional encontrado para essa combinação de filtros.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
