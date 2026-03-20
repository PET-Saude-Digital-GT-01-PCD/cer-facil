import React, { useEffect } from 'react';

const VLibras: React.FC = () => {
  useEffect(() => {
    // Evita carregar o script múltiplas vezes se o componente remontar
    if (document.getElementById('vlibras-script')) {
      if (window.VLibras && window.VLibras.Widget) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
      return;
    }

    const script = document.createElement('script');
    script.id = 'vlibras-script';
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;

    script.onload = () => {
      if (window.VLibras) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
    };

    document.body.appendChild(script);

    return () => {
      // Opcional: remover o script ao desmontar
      // document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="vlibras-container">
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    </div>
  );
};

export default VLibras;