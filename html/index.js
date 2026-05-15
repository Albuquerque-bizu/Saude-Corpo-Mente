const botao = document.getElementById("iniciar");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click" , function()  {
    mensagem.innerText = "você clicou no botao!";
    botao.style.backgroundColor = "lightgreen";
})