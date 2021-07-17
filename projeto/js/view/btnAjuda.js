import { addCartao } from "./mural.js";

const btn = document.querySelector("#btnAjuda");

btn.addEventListener("click", function () {
  const mensagens = [
    "Bem vindo ao CEEP",
    "Click em ? para obter ajuda",
    "Click botão linhas para mudar a exibicao dos cartoes",
  ];

  for (let msg of mensagens) {
    addCartao(msg); 
  }
});
