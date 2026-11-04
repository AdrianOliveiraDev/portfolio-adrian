// 1. Modo escuro: liga e desliga a classe "escuro" no body
const botaoTema = document.querySelector("#tema");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  if (document.body.classList.contains("escuro")) {
    botaoTema.textContent = "☀️ Modo claro";
  } else {
    botaoTema.textContent = "🌙 Modo escuro";
  }
});

// 2. Ano do rodapé sempre atualizado
document.querySelector("#ano").textContent = new Date().getFullYear();
