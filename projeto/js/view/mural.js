const mural = document.querySelector('.mural');
const cartaoModelo = document.querySelector('#template-cartao').content.firstElementChild; 
let numeroCartao = 0; 

//TODO: TRADUZIR TODO O DESENVOLVIMENTO FEITO HOJE 

/**
 * adiciona um novo cartao no mural
 * @param {string} conteudo Texto do cartao que sera criado
 * @return {void}
 */
export function addCartao(conteudo){
  numeroCartao++; 
  const cartao = cartaoModelo.cloneNode(true); 
  cartao.innerHTML = cartao.innerHTML.replaceAll('{{NUMERO_CARTAO}}', numeroCartao).replace('{{CONTEUDO_CARTAO}}', conteudo); 

  mural.append(cartao);                

}

export function toggleLayout() {
  mural.classList.toggle("mural--linha");
}

  mural.addEventListener('click', function(event) {

    //TODO ENTENDER PQ NAO FUNCIONA 
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

