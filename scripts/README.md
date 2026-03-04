# Scripts para busca de CERs na Paraíba

Scripts para buscar informações sobre os CERs (pb).

### cers-paraiba.ts
Contém os dados estáticos de todos os CERs da Paraíba organizados por modalidade de atendimento. 
- Código CNES
- Nome  
- Modalidades oferecidas (auditiva, física, intelectual, visual). 

É basicamente uma base de dados local com as informações básicas de cada centro. Eu fiz isso pensando no futuro, ou tentar fazer a busca por meio da desgraça da SOAP lá.

### search-all-cers.ts
Script que faz requisições para a API de dados abertos do CNES e busca informações detalhadas de cada CER da Paraíba. Retorna dados como endereço completo, telefone, email e outras informações administrativas. Usa a API REST que é mais simples que a SOAP.
- Observação: Ten uma carambolada de dados faltando 

# Outra hora tento a do SOAP.