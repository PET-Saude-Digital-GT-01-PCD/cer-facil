// CNES codes for all CERs in Paraíba state with their rehabilitation modalities

const PARAIBA_CER_CODES = [
  "5925207", // CENTRO DE REABILITACAO ANTONIO DE SOUZA MARANHAO | hearing, physical
  "9585370", // CENTRO ESPECIALIZADO EM REABILITACAO CER IV | hearing, physical, intellectual, visual
  "2608073", // CER CENTRO DE REABILITACAO DR JOSE DACIO | hearing, physical
  "2362619", // CER IV CENTRO ESP EM REABILITACAO CAMPINA GRANDE | hearing, physical, intellectual, visual
  "2343479", // FUNAD | hearing, physical, intellectual, visual
  "2612747", // APAE | physical, intellectual
  "2606364", // CENTRO DE ESPECIALIDADES DR MARIA DALUZ MARQUES BARRETO | physical, intellectual
  "6528880", // CENTRO DE REABILITACAO CER II | physical, intellectual
  "3871002", // CENTRO DE REABILITACAO E CUIDADO DA PESSOA COM DEFICIENCIA | physical, intellectual
  "3015610", // CENTRO ESPECIALIZADO EM REABILITACAO CER II | physical, intellectual
  "3360415", // CER III CENTRO ESPECIALIZADO EM REAaLBILITACAO MARIA MOURA | physical, intellectual, visual
  "9562966", // CER III DOUTOR ALOYSIO PEREIRA LIMA | physical, intellectual, visual
  "2609061", // POLICLINICA ESPECIALIDADES E REABILITACAO DR ANTONIO QUINHO | physical, intellectual
  "2755718"  // INSTITUTO DOS CEGOS DA PARAIBA | intellectual, visual
];

//
async function fetchEstablishmentData(cnesCode: string) {
  try {
    const response = await fetch(`https://apidadosabertos.saude.gov.br/cnes/estabelecimentos/${cnesCode}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const establishmentData = await response.json();
    console.log(`Data for ${cnesCode} received successfully!`);

    return establishmentData;
  } catch (error) {
    console.error(`Error fetching ${cnesCode}:`, error.message);
    return null;
  }
}

async function fetchAllParaibaCERs() {
  for (const cnesCode of PARAIBA_CER_CODES) {
    const establishment = await fetchEstablishmentData(cnesCode);

    if (establishment) {
      console.log(`\n--- ${establishment.nome_fantasia || 'Name not available'} ---`);
      console.log(`CNES Code: ${establishment.codigo_cnes}`);
      console.log(`Legal Name: ${establishment.nome_razao_social || 'N/A'}`);
      console.log(`Address: ${establishment.endereco_estabelecimento || 'N/A'}, ${establishment.numero_estabelecimento || ''} - ${establishment.bairro_estabelecimento || 'N/A'}`);
      console.log(`Phone: ${establishment.numero_telefone_estabelecimento || 'N/A'}`);
      console.log(`Email: ${establishment.endereco_email_estabelecimento || 'N/A'}`);
      console.log(`Administrative Level: ${establishment.descricao_esfera_administrativa || 'N/A'}`);
    }

    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

async function main() {
  await fetchAllParaibaCERs();
}

main();
