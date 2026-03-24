function login() {
  window.location.href = "dashboard.html";
}

function ir(pagina) {
  window.location.href = pagina;
}

function responder(correto) {
  if (correto) {
    localStorage.setItem("resultado", "Você acertou! 🎉");
  } else {
    localStorage.setItem("resultado", "Você errou 😢");
  }
  window.location.href = "resultado.html";
}

window.onload = function () {
  const res = document.getElementById("resultado");
  if (res) {
    res.innerText = localStorage.getItem("resultado");
  }
};