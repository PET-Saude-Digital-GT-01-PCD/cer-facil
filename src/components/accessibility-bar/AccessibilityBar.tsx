import React from 'react';

export default function AccessibilityBar() {
  // Exemplo de âncoras focadas nos pontos principais
  const links = [
    { id: 'welcome', label: 'conteúdo principal' },
    { id: 'what-is-rcpd', label: 'o que é a rede de cuidado à pessoa com deficiência' },
    { id: 'att-level', label: 'níveis de atenção' },
    { id: 'cer-types', label: 'tipos de CER' },
    { id: 'types-of-deficiencies', label: 'tipos de pessoas atendidas pelos CER' },
    { id: 'cers-card', label: 'rede estadual de reabilitação da paraíba' },
    { id: 'hist-timeline', label: 'história da rede de cuidado a pessoa com deficiência' },
    { id: 'prof-roles', label: 'equipe multiprofissional' },
    { id: 'edu-mat', label: 'material educativo' },
    { id: 'footnote', label: 'rodapé' }
  ];

  const handleSkip = (e : React.MouseEvent<HTMLAnchorElement>, id : string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Importante para SPAs: força o foco no elemento de destino
      element.setAttribute('tabindex', '-1');
      element.focus();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav aria-label="Atalhos de acessibilidade" className="fixed top-[-100] left-0 z-50">
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={(e) => handleSkip(e, link.id)}
          accessKey={(links.indexOf(link) + 1).toString()} // Atribui accesskey de 1 a 9
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};