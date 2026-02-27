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
                            <p className="text-gray-600 mt-4 max-w-2xl">
                                Os Centros Especializados em Reabilitação (CER) são unidades de saúde focadas em oferecer tratamentos especializados e diagnósticos precisos. Eles funcionam como centros de referência: quando um posto de saúde percebe que alguém precisa de um cuidado mais específico para sua deficiência, essa pessoa é encaminhada para um CER. Lá, o atendimento é feito por vários profissionais ao mesmo tempo, garantindo que o paciente receba todo o suporte necessário em um só lugar.
                            </p>
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
                        { title: "Deficiência Física", icon: <Accessibility className="w-10 h-10" />, text: "É quando uma pessoa possui alterações no corpo que podem comprometer a mobilidade, a força ou a coordenação dos movimentos. Isso pode ser de nascimento ou causado por acidentes e doenças." },
                        { title: "Deficiência Auditiva", icon: <Ear className="w-10 h-10" />, text: "É a perda parcial ou total da audição. Nessas situações, algumas pessoas precisam usar aparelhos auditivos para ouvir melhor." },
                        { title: "Deficiência Visual", icon: <Eye className="w-10 h-10" />, text: "Vai desde a \"baixa visão\" (quando a pessoa enxerga com muita dificuldade, mesmo usando óculos) até a cegueira total. O apoio pode envolver o uso de Braille, bengalas ou tecnologias de voz." },
                        { title: "Deficiência Intelectual", icon: <Brain className="w-10 h-10" />, text: "Tem a ver com dificuldades no aprendizado e na compreensão de tarefas do dia a dia. Algumas pessoas podem precisar de mais tempo ou de formas diferentes para aprender a se comunicar, estudar e interagir com os outros." },
                        { title: "TEA (Autismo)", icon: <Puzzle className="w-10 h-10" />, text: "Não é uma doença, mas uma forma diferente de o cérebro lidar com as informações. Isso pode afetar a maneira como a pessoa interage socialmente, como ela se comunica e como ela percebe estímulos sensoriais (como sons e luzes). Cada pessoa com TEA é única e tem suas próprias habilidades e desafios." },
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
