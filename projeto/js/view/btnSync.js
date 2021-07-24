import { saveCartoesServer } from "../services/CeepService.js";
import { getCartoes } from "./mural.js";
import { notificar } from './notificacao.js'; 

const btnSync = document.querySelector('#btnSync'); 

btnSync.addEventListener('click', async() => {  
  btnSync.classList.replace('botaoSync--sincronizado', 'botaoSync--esperando'); 
  btnSync.disabled = true; 

  const lisCartoesMural = getCartoes(); 
  let mensagem = await saveCartoesServer(lisCartoesMural); 
  notificar(mensagem); 

  btnSync.disabled = false; 
  btnSync.classList.replace('botaoSync--esperando', 'botaoSync--sincronizado'); 
});  