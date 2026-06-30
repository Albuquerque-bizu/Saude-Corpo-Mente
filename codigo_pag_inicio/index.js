
const paginas = document.querySelectorAll('.pagina');
const btnAnterior = document.getElementById('btnAnterior');
const btnProximo = document.getElementById('btnProximo');

const indicadorPagina = document.getElementById('indicadorPagina');
let paginaAtual = 0;
function atualizarPagina(){
    
    paginas.forEach(pagina=> {
    pagina.style.display = 'none';
    
    });    

    paginas[paginaAtual].style.display = 'block';
    indicadorPagina.textContent = 
    'Página ${paginaAtual + 1} de ${paginas.length}';
    
    btnAnterior.disabled =(paginaAtual === 0);
    btnProximo.disabled = (paginaAtual === paginas.length - 1);
  }   

    btnProximo.addEventListener ( "click", ()  => {

      if (paginaAtual < paginas.length - 1){
        
        paginaAtual ++ ;
        atualizarPagina();
      }
      
    });
   
     btnAnterior.addEventListener (  "click" , ()  => 
     {

      if (paginaAtual > 0) {
         paginaAtual--;
         atualizarPagina();


      }

      });



      


    
