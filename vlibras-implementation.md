A implementação do VLibras em páginas web é feita inserindo um código JavaScript específico antes do fechamento da tag </body>. Este código cria o widget que traduz automaticamente os conteúdos do site para a Língua Brasileira de Sinais (Libras) por meio de um avatar 3D.

Código para Implementação Web
Copie e cole o seguinte trecho no final do seu arquivo HTML, imediatamente antes de </body>:

<div vw class="enabled">
  <div vw-access-button class="active"></div>
</div>
<script type="text/javascript">
  new window.VLibras.Widget('https://vlibras.gov.br/app');
</script>

Implementação em Frameworks (React)
Para projetos em React, recomenda-se o uso da biblioteca não-oficial @djpfs/react-vlibras para facilitar a integração.

Instalação:
npm install -S @djpfs/react-vlibras

# ou

yarn add @djpfs/react-vlibras

Uso no componente:
import VLibras from '@djpfs/react-vlibras';

function App() {
return (

<div className="App">
<VLibras forceOnload={true} />
<header>
<h1>Teste</h1>
</header>
</div>
);
}
