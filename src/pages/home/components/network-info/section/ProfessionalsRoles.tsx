
import { useState } from "react";
import professionals from "../../../../../data/professionals-functions.json";

export default function ProfessionalsRoles() {
    const [activeFilter, setActiveFilter] = useState<number | null>(null);

    const filteredProfessionals = activeFilter === null
        ? professionals
        : professionals.filter((prof) => prof.service.includes(activeFilter));

    function handleFilterClick(serviceId: number) {
        setActiveFilter((prev) => (prev === serviceId ? null : serviceId));
    }

    return (
        <>
        <h2 className="font-bold text-3xl mt-6 text-center">Saiba Mais Sobre os Profissionais Que Trabalham nos CERs</h2>

        <div id="filter" className="p-16 grid grid-cols-12 grid-rows-1 place-items-center">

            <p className="col-span-7">Você quer saber mais sobre os profissionais que trabalham na reabilitação de quais deficiências? (clique nas imagens ao lado para selecionar)</p>

            {/* Física */}
            <svg
                onClick={() => handleFilterClick(1)}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={`lucide lucide-accessibility h-20 w-20 cursor-pointer transition-all duration-200 ${activeFilter === 1 ? "stroke-orange-500 scale-125" : "stroke-current hover:stroke-orange-400"
                    }`}
                aria-label="Filtrar: Física"
            ><circle cx="16" cy="4" r="1"></circle><path d="m18 19 1-7-6 1"></path><path d="m5 8 3-3 5.5 3-2.36 3.5"></path><path d="M4.24 14.5a5 5 0 0 0 6.88 6"></path><path d="M13.76 17.5a5 5 0 0 0-6.88-6"></path></svg>

            {/* Auditiva */}
            <svg
                onClick={() => handleFilterClick(2)}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={`lucide lucide-ear h-20 w-20 cursor-pointer transition-all duration-200 ${activeFilter === 2 ? "stroke-orange-500 scale-125" : "stroke-current hover:stroke-orange-400"
                    }`}
                aria-label="Filtrar: Auditiva"
            ><path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"></path><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"></path></svg>

            {/* Visual */}
            <svg
                onClick={() => handleFilterClick(3)}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={`lucide lucide-eye h-20 w-20 cursor-pointer transition-all duration-200 ${activeFilter === 3 ? "stroke-orange-500 scale-125" : "stroke-current hover:stroke-orange-400"
                    }`}
                aria-label="Filtrar: Visual"
            ><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>

            {/* Intelectual */}
            <svg
                onClick={() => handleFilterClick(4)}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={`lucide lucide-brain h-20 w-20 cursor-pointer transition-all duration-200 ${activeFilter === 4 ? "stroke-orange-500 scale-125" : "stroke-current hover:stroke-orange-400"
                    }`}
                aria-label="Filtrar: Intelectual"
            ><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>

            {/* TEA */}
            <svg
                onClick={() => handleFilterClick(5)}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={`lucide lucide-puzzle h-20 w-20 cursor-pointer transition-all duration-200 ${activeFilter === 5 ? "stroke-orange-500 scale-125" : "stroke-current hover:stroke-orange-400"
                    }`}
                aria-label="Filtrar: TEA"
            ><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path></svg>

        </div>

        {/* This is the professionals' area of expertise div */}
        <div id="professionals-area-of-expertise-container" className="p-16 pt-4 pb-24 grid grid-cols-2 gap-4">
            {filteredProfessionals.map((prof) => (
                <details
                    key={prof.professional}
                    className="border border-orange-500 rounded-lg shadow-sm overflow-hidden self-start"
                >
                    <summary className="cursor-pointer px-6 py-4 font-semibold list-none flex items-center justify-between select-none hover:bg-orange-50 transition-colors">
                        {prof.professional}
                        <span className="text-orange-500 text-xl leading-none">&#x25BE;</span>
                    </summary>
                    <p className="px-6 py-4 text-sm border-t border-orange-200">{prof.description}</p>
                </details>
            ))}
        </div>
        </>
    )

}
