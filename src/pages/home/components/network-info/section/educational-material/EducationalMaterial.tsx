import { useState } from "react";

import {
  BookOpen,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Users,
  Briefcase,
} from "lucide-react";

import {
  userMaterials,
  professionalMaterials,
} from "./EducationalMaterial.data.ts";

export default function MaterialEducational() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"user" | "professional">("user");

  const materials =
    activeTab === "user" ? userMaterials : professionalMaterials;
  const currentMaterial = materials[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % materials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + materials.length) % materials.length);
  };

  const handleTabChange = (tab: "user" | "professional") => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <section id="educational-material" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <header className="text-left mb-8">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">
            Material Educativo
          </h1>
          <div className="w-24 h-1 bg-[var(--cor-bg-1)] rounded-full"></div>
          <p
            className="text-slate-600 mt-4 max-w-4xl text-2xl leading-relaxed focus-within:border-[var(--cor-bg-1)] focus-within:border-5"
            tabIndex={0}
          >
            Acesse publicações, guias e cartilhas sobre direitos, saúde e
            inclusão das pessoas com deficiência.
          </p>
        </header>

        {/* Abas */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => handleTabChange("user")}
            className={`text-xl flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "user"
                ? "bg-[var(--cor-bg-1)] text-white shadow-lg"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Users className="w-8 h-8" />
            Usuário
          </button>
          <button
            onClick={() => handleTabChange("professional")}
            className={`text-xl flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "professional"
                ? "bg-[var(--cor-bg-1)] text-white shadow-lg"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Briefcase className="w-8 h-8" />
            Profissional
          </button>
        </div>

        {/* Carrossel / Card Principal */}
        <div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="p-6 flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <BookOpen className="w-10 h-10 text-[var(--cor-bg-1)] flex-shrink-0 mt-1" />
                    <h3 className="my-auto font-bold text-gray-900 text-2xl">
                      {currentMaterial.title}
                    </h3>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed mb-6 text-justify">
                    {currentMaterial.description}
                  </p>
                </div>
                <a
                  href={currentMaterial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl inline-flex items-center gap-2 bg-[var(--cor-bg-1)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[color-mix(in_srgb,var(--cor-bg-1),black_20%)] transition-colors duration-300 w-fit"
                >
                  Acessar Material
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
              <div className="w-full md:w-[280px] flex-shrink-0">
                <img
                  src={currentMaterial.image}
                  alt={currentMaterial.title}
                  className="w-full h-[380px] object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Controles (Anterior / Próximo) */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-md font-semibold hover:bg-slate-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Material anterior"
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex === materials.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-[var(--cor-bg-1)] text-white-700 rounded-md font-semibold hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Próximo material"
            >
              Próximo
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicadores (Dots) */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {materials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-[var(--cor-bg-1)] w-8"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Ir para material ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
