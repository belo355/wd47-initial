import { getCartoesServer } from "../services/ceepService.js"; 

const mural = document.querySelector('.mural');
const cartaoModelo = document.querySelector('#template-cartao').content.firstElementChild; 
let numeroCartao = 0; 

//TODO: TRADUZIR TODO O DESENVOLVIMENTO FEITO HOJE 

window.addEventListener('load', async() => {
  const cartoes = await getCartoesServer(); 

  for(let cartao of cartoes){
    addCartao(cartao.conteudo, cartao.cor); 
  }
}); 

/**
 * adiciona um novo cartao no mural
 * @param {string} conteudo Texto do cartao que sera criado
 * @param {string} cor Cor atribuida ao cartao (default amarelo)
 * @return {void}
 */
export function addCartao(conteudo, cor=''){
  numeroCartao++; 
  const cartao = cartaoModelo.cloneNode(true); 
  cartao.innerHTML = cartao.innerHTML.replaceAll('{{NUMERO_CARTAO}}', numeroCartao).replace('{{CONTEUDO_CARTAO}}', conteudo); 
  cartao.style.backgroundColor = cor; 
  mural.append(cartao);                

}

/**
 * Retorna lista de cartoes do mural
 * @returns {Array}
 */
export function getCartoes(){
  const cartoes = mural.querySelectorAll('.cartao'); 
  const listaCartoes = Array.from(cartoes).map(cartao => {
      return {
      conteudo : cartao.querySelector('.cartao-conteudo').textContent, 
      cor: cartao.style.backgroundColor 
    }
  }); 
  return listaCartoes; 
}

export function toggleLayout() {
  mural.classList.toggle("mural--linha");
}

  mural.addEventListener('click', function(event) {

    //TODO ENTENDER PQ NAO FUNCIONA DELETE
    if (event.target.classList.contains('.opcoesDoCartao-remove')){
       const cartao = event.target.closest('.cartao'); 
       cartao.remove(); 
    }
  });

  mural.addEventListener('change', function(event){
    if(event.target.type === 'radio'){
      const cartao = event.target.closest('.cartao'); 
      cartao.style.backgroundColor = event.target.value; 
    }
  }); 

  mural.addEventListener('keypress', function(event){
    let isLabel = event.target.tagName === 'LABEL'; 

    if(isLabel && (event.key === 'Enter' || event.key === ' ')){
      event.target.click(); 
    }

  }); 

