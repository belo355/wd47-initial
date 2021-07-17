const mural = document.querySelector('.mural');

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

