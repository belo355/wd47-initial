const btn = document.querySelector("#btnAjuda");

btn.addEventListener("click", function () {
  const mensagens = [
    "bem vindo ao ceep",
    "click em ? para obter ajuda",
    "click botao linhas para mudar a exibicao dos cartoes",
  ];

  for (let msg of mensagens) {
    alert(msg);
  }
});
