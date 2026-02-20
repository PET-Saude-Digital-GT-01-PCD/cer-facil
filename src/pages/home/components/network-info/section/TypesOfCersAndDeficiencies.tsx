
export default function TypesOfCersAndDeficiencies() {

    return (
        <section>
            <div className="w-full h-auto p-16 pt-24 grid grid-cols-2 grid-rows-1 gap-8 place-items-center">
                <div>
                    <h2 className="font-bold text-3xl pb-4 mb-6 text-left">Conheça os Diferentes Tipos de CERs</h2>
                    <p className="mb-8">Os CER são classificados de acordo com a composição das modalidades de reabilitação que oferecem: CER II, CER III e CER IV. Eles podem ser organizados com a composição de duas, três ou quatro modalidades de reabilitação, que incluem: auditiva, física, intelectual e visual. Se constituem como serviços de atenção ambulatorial especializada, de abrangência regional e acesso regulado, que oferecem diagnóstico, tratamento, concessão, adaptação e manutenção de Tecnologia Assistiva, sendo referência para a Rede de Atenção à Saúde (RAS).</p>

                    <p className="hover:bg-orange-50 border border-orange-500 rounded-lg my-4 p-4 shadow-sm">CER II <br /> O CER II é projetado para atender a duas modalidades de reabilitação.</p>
                    <p className="hover:bg-orange-50 border border-orange-500 rounded-lg my-4 p-4 shadow-sm">CER III <br /> O CER III é organizado para oferecer três modalidades de reabilitação.</p>
                    <p className="hover:bg-orange-50 border border-orange-500 rounded-lg my-4 p-4 shadow-sm">CER IV <br /> O CER IV é a tipologia de maior complexidade, sendo organizado para atender às quatro modalidades de reabilitação: Auditiva, Física, Intelectual e Visual.</p>
                </div>

                <img className="rounded-lg" src="https://conclinica.com.br/wp-content/uploads/2025/09/atendimento-humanizado-na-saude.png" alt="médicos analisando os dados de um paciente em um tablet" />
            </div>

            <h2 className="font-bold text-3xl mt-6 text-center">Conheça Um Pouco Mais Sobre Cada Tipo de Deficiência</h2>

            <div className="w-full h-auto p-16 grid grid-cols-2 grid-rows-3 gap-8">

                <div className="hover:bg-orange-50 duration-200 w-130 h-auto justify-self-end border rounded-lg border-orange-500 shadow-sm px-8 py-16">
                    <h3 className="pb-8 font-bold text-center text-lg">Deficiência Física</h3>
                    <div className="grid grid-cols-4 grid-rows-1">
                        <p className="col-span-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-accessibility h-full w-full text-primary" aria-hidden="true"><circle cx="16" cy="4" r="1"></circle><path d="m18 19 1-7-6 1"></path><path d="m5 8 3-3 5.5 3-2.36 3.5"></path><path d="M4.24 14.5a5 5 0 0 0 6.88 6"></path><path d="M13.76 17.5a5 5 0 0 0-6.88-6"></path></svg>
                    </div>
                </div>

                <div className="hover:bg-orange-50 duration-200 w-130 h-auto justify-self-start border rounded-lg border-orange-500 shadow-sm px-8 py-16">
                    <h3 className="pb-8 font-bold text-center text-lg">Deficiência Auditiva</h3>
                    <div className="grid grid-cols-4 grid-rows-1">
                        <p className="col-span-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ear h-full w-full text-primary" aria-hidden="true"><path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"></path><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"></path></svg>
                    </div>
                </div>

                <div className="hover:bg-orange-50 duration-200 w-130 h-auto justify-self-end border rounded-lg border-orange-500 shadow-sm px-8 py-16">
                    <h3 className="pb-8 font-bold text-center text-lg">Deficiência Visual</h3>
                    <div className="grid grid-cols-4 grid-rows-1">
                        <p className="col-span-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye h-full w-full text-primary" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </div>
                </div>

                <div className="hover:bg-orange-50 duration-200 w-130 h-auto justify-self-start border rounded-lg border-orange-500 shadow-sm px-8 py-16">
                    <h3 className="pb-8 font-bold text-center text-lg">Deficiência Intelectual</h3>
                    <div className="grid grid-cols-4 grid-rows-1">
                        <p className="col-span-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain h-full w-full text-primary" aria-hidden="true"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
                    </div>
                </div>

                <div className="hover:bg-orange-50 duration-200 w-130 h-auto mx-auto border rounded-lg border-orange-500 shadow-sm px-8 py-16 col-span-2">
                    <h3 className="pb-8 font-bold text-center text-lg">Transtorno do Espectro Autista (TEA)</h3>
                    <div className="grid grid-cols-4 grid-rows-1">
                        <p className="col-span-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-puzzle h-full w-full text-primary" aria-hidden="true"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path></svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
