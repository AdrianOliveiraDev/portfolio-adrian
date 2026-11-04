const botaoTema = document.querySelector("#tema");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    botaoTema.textContent = "☀️ Modo claro";
  } else {
    botaoTema.textContent = "🌙 Modo escuro";
  }
});

const mobileToggle = document.querySelector(".mobile-toggle");
const navMenu = document.querySelector(".nav-menu");

mobileToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

document.querySelector("#ano").textContent = new Date().getFullYear();
