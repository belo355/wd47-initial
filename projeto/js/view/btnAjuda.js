import { addCartao } from "./mural.js";
import { getInstrucoes } from '../services/ceepService.js'

const btn = document.querySelector("#btnAjuda");
btn.addEventListener("click", async () => {
  const mensagens = await getInstrucoes(); 
  for (let msg of mensagens) {
    addCartao(msg.conteudo, msg.cor); 
  }
});

