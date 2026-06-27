const paginas = document.querySelectorAll('.pagina');
const botaoproximo = document.getElementById('btnProximo');
const indicadorPagina = document.getElementById('indicadorPagina');

let paginaAtual = 0; 

function atualizarPaginacao() {
    paginas.forEach((pagina, indice) => {
        if (indice === paginaAtual) {
            pagina.classList.add('ativa'); 
        } else {
            pagina.classList.remove('ativa');
        }
    });

    indicadorPagina.textContent = `Página ${paginaAtual + 1} de ${paginas.length}`;
    botaoproximo.disabled = paginaAtual === paginas.length - 1;
}

botaoproximo.addEventListener('click', () => {
    if (paginaAtual < paginas.length - 1) {
        paginaAtual++;
        atualizarPaginacao();
    }
});
