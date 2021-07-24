import { notificar } from "./notificacao.js";
import { addCartao } from "./mural.js";

const form = document.querySelector("form");
const caixatexto = form.querySelector("textarea");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (caixatexto.value.trim() === "") {
    notificar('Por favor, preencha o campo corretamente'); 
  
  } else {
    addCartao(caixatexto.value.trim());
    form.reset();
  }
});
