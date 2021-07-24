import { saveCartoesServer } from "../services/CeepService.js";
import { salvarCartoesStore } from "../storage/db.js";
import { getCartoes } from "./mural.js";
import { notificar } from './notificacao.js'; 

const btnSync = document.querySelector('#btnSync'); 

btnSync.addEventListener('click', async() => {  
  btnSync.classList.replace('botaoSync--sincronizado', 'botaoSync--esperando'); 
  btnSync.disabled = true; 
  let mensagem = ''; 
  const lisCartoesMural = getCartoes(); 
  try{
    mensagem = await saveCartoesServer(lisCartoesMural); 
  }catch(e){
    mensagem = await salvarCartoesStore(lisCartoesMural); 
  }

  notificar(mensagem); 

  btnSync.disabled = false; 
  btnSync.classList.replace('botaoSync--esperando', 'botaoSync--sincronizado'); 
});  