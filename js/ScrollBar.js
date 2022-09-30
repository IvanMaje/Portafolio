const progress = document.getElementById('progressBar');
                     
window.onscroll = function(){
    let totalHeight = document.body.scrollHeight - window.innerHeight; 
    // A la longitud vertical del body le
    // resto la longitud de la ventana
    // para saber cual va a ser el maximo
    // de pixeles que se puede desplazar 
    // la pagina verticalmente.          

    let progressHeight = (window.pageYOffset / totalHeight) * 100; 
    // A la cantidad de pixeles que se
    // desplazo verticalmente lo divido                                                               
    // por la cantidad maxima de pixeles
    // que se puede desplazar(Como maximo
    // el resultado da 1). Al multiplicarlo
    // por 100 obtengo el porcentaje desplazado.

    progress.style.height = progressHeight + "%";
    console.log(document.body.scrollHeight);
    console.log(window.innerHeight);
    console.log(totalHeight);
    console.log("--------------------------");
    
}


