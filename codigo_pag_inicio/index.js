const botao = document.getElementById("iniciar");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click" , function(){
    mensagem.innerText = "você clicou no botao!";
    window.location.href = "perguntas.html";
     

})