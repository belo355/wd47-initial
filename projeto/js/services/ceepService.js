import usuarioLogado from "../storage/loginUsuario.js";

const CEEP_API_URL = "http://wd47-ceep.herokuapp.com";

/**
 * Retonar a lista de instruções de ajuda cadastradas no back da app
 * @returns {Promisse<Array}
 */
export async function getInstrucoes() {
  const response = await fetch(CEEP_API_URL + "/get-instrucoes.php");
  const dadosCarregados = await response.json();
  return dadosCarregados.instrucoes;
}

/**
 * Salvar cartoes no backend da apps
 * @param {Array} listCartoes Lista de cartoes
 * @return {Promisse<string>}
 */
export async function saveCartoesServer(listCartoes) {
  const infoUsuario = {
    usuario: usuarioLogado,
    cartoes: listCartoes,
  };

  try {
    const response = await fetch(CEEP_API_URL + '/salvar-cartoes.php', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(infoUsuario) 
    });

    const dadosRetornados = await response.json();

    if (dadosRetornados.quantidade == 1) {
      return "Cartao salvo com sucesso!";
    } else {
      return dadosRetornados.quantidade + " cartões salvos com sucesso!";
    }
  } catch (error) {
    console.error(error);
    return "Erro ao enviar informacoes para o servidor!";
  }
}

/**
 * Retonar a lista de cartoes salvos no back
 * @returns {Promisse<Array}
 */
 export async function getCartoesServer() {
  let user = usuarioLogado;  
  const response = await fetch(CEEP_API_URL + '/get-cartoes.php?usuario=' + user);
  const dadosCartoes = await response.json(); 
  return dadosCartoes.cartoes ?? []; 
}
