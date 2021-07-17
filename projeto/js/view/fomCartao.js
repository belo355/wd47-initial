import { notificar } from "./notificacao.js";

const form = document.querySelector('form'); 
const caixatexto = form.querySelector('textarea'); 

form.addEventListener('submit', function(event){
  event.preventDefault(); 
  if(caixatexto.value.trim() === ''){
   notificar(); 
  }


}); 