import { Building2, Accessibility, Ear, Eye, Brain, Puzzle } from 'lucide-react';

export default function TypesOfCersAndDeficiencies() {
    return (
        <section id="types-of-cer-deficiencies" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">

                {/* Cabeçalho da Seção */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <div className="text-left mb-16">
                            <h2 className="text-4xl font-bold mb-4 text-black">Conheça os Diferentes <br /> Tipos de CERs</h2>
                            <div className="w-24 h-1 bg-[var(--cor-1)] rounded-full"></div>
                            <p className="text-gray-600 mt-4 max-w-2xl">Os Centros Especializados em Reabilitação (CER) são pontos de atenção ambulatorial
                                especializada que oferecem diagnóstico e tratamento qualificado, sendo referência para a Rede de Atenção à Saúde (RAS).</p>
                        </div>

                        {/* Cards dos CERs com Layout mais Clean */}
                        <div className="space-y-4">
                            {[
                                { id: 'II', desc: 'Atendimento a duas modalidades de reabilitação.' },
                                { id: 'III', desc: 'Organizado para oferecer três modalidades de reabilitação.' },
                                { id: 'IV', desc: 'Maior complexidade: Auditiva, Física, Intelectual e Visual.' },
                            ].map((cer) => (
                                <div key={cer.id} className="group flex items-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                                    <div className="bg-blue-50 text-blue-600 p-3 rounded-lg mr-4 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                                        <Building2 size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800">CER {cer.id}</h3>
                                        <p className="text-slate-500 text-sm">{cer.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-orange-100/50 rounded-full blur-3xl opacity-30 -z-10"></div>
                        <img
                            className="rounded-2xl shadow-2xl border-8 border-white"
                            src="https://conclinica.com.br/wp-content/uploads/2025/09/atendimento-humanizado-na-saude.png"
                            alt="Equipe médica"
                        />
                    </div>
                </div>

                {/* Seção de Deficiências */}
                <div className="text-left mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-black">Tipos de Deficiência</h2>
                    <div className="w-24 h-1 bg-[var(--cor-1)] rounded-full"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl">Entenda as particularidades de cada modalidade atendida pela rede de cuidados.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Deficiência Física", icon: <Accessibility className="w-10 h-10" />, text: "Alteração completa ou parcial de um ou mais segmentos do corpo humano." },
                        { title: "Deficiência Auditiva", icon: <Ear className="w-10 h-10" />, text: "Perda bilateral, parcial ou total, de quarenta e um decibéis (dB) ou mais." },
                        { title: "Deficiência Visual", icon: <Eye className="w-10 h-10" />, text: "Cegueira ou baixa visão, afetando o desempenho visual de forma significativa." },
                        { title: "Deficiência Intelectual", icon: <Brain className="w-10 h-10" />, text: "Funcionamento intelectual inferior à média, com limitações associadas." },
                        { title: "TEA (Autismo)", icon: <Puzzle className="w-10 h-10" />, text: "Deficiências persistentes na comunicação e na interação social." },
                    ].map((item, idx) => (
                        <div key={idx} className={`bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-orange-200 transition-all ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                            <div className="text-orange-500 mb-6 flex justify-center">{item.icon}</div>
                            <h3 className="font-bold text-xl text-slate-800 mb-3 text-center">{item.title}</h3>
                            <p className="text-slate-600 text-sm text-center leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
