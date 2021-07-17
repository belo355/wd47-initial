const divMsg = document.createElement('div'); 
divMsg.classList.add('formNovoCartao-msg'); 
divMsg.addEventListener('animationend', () => divMsg.remove()); 


/**
 * Mostrar mensagens de notificacao para o usuario
 * @param {string} mensagem Mensagem a ser exibida ao usuario
 * @return {void}
 */
export function notificar(mensagem){
  divMsg.textContent = mensagem; 
  document.body.append(divMsg); 
}

