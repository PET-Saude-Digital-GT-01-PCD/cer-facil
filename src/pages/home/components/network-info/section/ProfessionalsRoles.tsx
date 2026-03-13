import { useState } from "react";
import { ChevronDown, Filter, X } from "lucide-react";
import professionals from "../../../../../data/professionals-functions.json";

export default function ProfessionalsRoles() {
    const [activeFilters, setActiveFilters] = useState<number[]>([]);
    const [openProf, setOpenProf] = useState<string | null>(null);

    const filterOptions = [
        { id: 1, label: "Física" },
        { id: 2, label: "Auditiva" },
        { id: 3, label: "Visual" },
        { id: 4, label: "Intelectual" },
        { id: 5, label: "TEA" },
    ];

    const filteredProfessionals = activeFilters.length === 0
        ? professionals
        : professionals.filter((prof) => 
            prof.service.some(id => activeFilters.includes(id))
          );

    const toggleFilter = (id: number) => {
        setOpenProf(null);
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
        <section className="px-6 py-24 pt-0 font-sans">
            <div className="mx-auto max-w-6xl">
                <div className="text-left mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-white leading-tight">
                        Equipe Multiprofissional
                    </h2>
                    <div className="w-20 h-1.5 bg-white rounded-full mb-6"></div>
                    
                    <div className="bg-white border border-[color-mix(in_srgb,var(--cor-bg-3),black_30%)] p-6 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-2 mb-4 text-black font-semibold uppercase text-sm tracking-wider">
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
                                                ? "bg-[var(--cor-bg-3)] border-[var(--cor-bg-3)]/90 text-white shadow-md shadow-emerald-100" 
                                                : "bg-white border-[var(--cor-bg-3)]/30 text-[var(--cor-bg-3)]/80 hover:border-[var(--cor-bg-3)] hover:text-[var(--cor-bg-3)]"}
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
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    {filteredProfessionals.length > 0 ? (
                        filteredProfessionals.map((prof) => {
                            const isOpen = openProf === prof.professional;

                            return (
                                <div
                                    key={prof.professional}
                                    className={`border rounded-xl transition-all duration-300 h-fit bg-white ${
                                        isOpen 
                                        ? "border-[var(--cor-bg-3)] shadow-xl ring-1 ring-emerald-50 scale-[1.01]" 
                                        : "border-slate-100 shadow-sm hover:border-emerald-200 hover:shadow-md"
                                    }`}
                                >
                                    <button
                                        onClick={() => setOpenProf(isOpen ? null : prof.professional)}
                                        className="w-full text-left px-6 py-5 flex items-center justify-between select-none"
                                    >
                                        <span className={`font-bold transition-colors ${isOpen ? "text-[var(--cor-bg-3)]" : "text-slate-800"}`}>
                                            <span className={`inline-block w-2.5 h-2.5 rounded-full mr-3 bg-[var(--cor-bg-3)]/50`} />
                                            {prof.professional}
                                        </span>
                                        <ChevronDown
                                            className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--cor-bg-3)]/50" : "text-slate-400"}`}
                                            size={20}
                                        />
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                        <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-50 text-justify">
                                            {prof.description}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-full py-12 text-center text-slate-400 bg-white rounded-xl border-2 border-dashed border-slate-100 shadow-sm">
                            Nenhum profissional encontrado para essa combinação de filtros.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}