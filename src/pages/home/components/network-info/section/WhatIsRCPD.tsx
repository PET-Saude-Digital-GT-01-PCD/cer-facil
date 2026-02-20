import ministerioLogo from "@/assets/images/ministerioLogo.png";

export default function WhatIsRCPD() {
  return (
    <section id="what-is-rcpd" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-bold text-3xl pb-4 mb-6 text-left">
          O que é a Rede de Cuidado à Pessoa com Deficiência?
        </h2>

        <div className="flex items-center gap-8">
          <div className="w-2/3 text-left font-normal">
            <p>
              A Rede de Cuidados à Pessoa com Deficiência tem como objetivo
              ampliar o acesso e qualificar o atendimento no Sistema Único de
              Saúde (SUS), oferecendo cuidado integral às pessoas com
              deficiência ao longo de todas as fases da vida.
            </p>

            <p className="mt-5">
              A atuação da rede envolve ações de prevenção, identificação
              precoce e reabilitação, considerando diferentes tipos de
              deficiência e necessidades de cuidado.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={ministerioLogo}
              alt="logo ministério da saúde"
              className="w-52"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
