import { getCartoesServer } from "../services/ceepService.js";
import { IDBSubcribeOnLoadCartoes } from "../storage/db.js";
import { notificar } from "./notificacao.js";

const mural = document.querySelector(".mural");
const cartaoModelo =
  document.querySelector("#template-cartao").content.firstElementChild;
let numeroCartao = 0;

IDBSubcribeOnLoadCartoes(function (cartoesLocais) {
  //exemplo de inscricao do observer
  console.log("Atualizar calendario ...");
});

//TODO: TRADUZIR O DESENVOLVIMENTO FEITO HOJE

/**
 * Mostrar os cartoes no mural
 * 
 */
IDBSubcribeOnLoadCartoes(async (cartoesLocais) => {
  let listaCartoes = [];

  try {
    listaCartoes = await getCartoesServer();
    if (
      cartoesLocais.length > 0 &&
      confirm("Voce possui cartoes salvos localmente. \n Deseja exibilos no mural tambem?")){
      listaCartoes.push(...cartoesLocais);
    }
  } catch (e) {
    listaCartoes = cartoesLocais; 
    if(!listaCartoes.length){
      notificar('Não ha cartões salvos localmente para serem exibidos!'); 
    }
  }

  mural.innerHTML = ''; 
  listaCartoes.forEach(cartao => {
    addCartao(cartao.conteudo, cartao.cor);
  });
});

/**
 * adiciona um novo cartao no mural
 * @param {string} conteudo Texto do cartao que sera criado
 * @param {string} cor Cor atribuida ao cartao (default amarelo)
 * @return {void}
 */
export function addCartao(conteudo, cor = "") {
  numeroCartao++;
  const cartao = cartaoModelo.cloneNode(true);
  cartao.innerHTML = cartao.innerHTML
    .replaceAll("{{NUMERO_CARTAO}}", numeroCartao)
    .replace("{{CONTEUDO_CARTAO}}", conteudo);
  cartao.style.backgroundColor = cor;
  mural.append(cartao);
}

/**
 * Retorna lista de cartoes do mural
 * @returns {Array}
 */
export function getCartoes() {
  const cartoes = mural.querySelectorAll(".cartao");
  const listaCartoes = Array.from(cartoes).map((cartao) => {
    return {
      conteudo: cartao.querySelector(".cartao-conteudo").textContent,
      cor: cartao.style.backgroundColor,
    };
  });
  return listaCartoes;
}

export function toggleLayout() {
  mural.classList.toggle("mural--linha");
}

mural.addEventListener("click", function (e) {
  //TODO ENTENDER PQ NAO FUNCIONA DELETE
  let isBtnExcluir = e.target.classList.contains(".opcoesDoCartao-remove");
  if (isBtnExcluir) {
    const cartao = e.target.closest(".cartao");
    cartao.classList.add("cartao--some");
    cartao.remove();
  }
});

mural.addEventListener("change", function (event) {
  if (event.target.type === "radio") {
    const cartao = event.target.closest(".cartao");
    cartao.style.backgroundColor = event.target.value;
  }
});

mural.addEventListener("keypress", function (event) {
  let isLabel = event.target.tagName === "LABEL";

  if (isLabel && (event.key === "Enter" || event.key === " ")) {
    event.target.click();
  }
});
