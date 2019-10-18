window.onload = init;
function init(){
    botonEnvio = document.querySelector('[type="button"]');
    nuevoItem = document.querySelector('[type="text"]');
    nuevodia = document.querySelector('')
    listaeve = document.getElementById("lista");
    
    botonEnvio.addEventListener("click",anadir);
}

function anadir(e){
    evento = e || window.event;
    if (nuevoItem.value == ""){
        evento.preventDefault();
    }else{
    var lista = document.createElement("li");
    lista.innerHTML = nuevoItem.value;
    listaeve.appendChild(lista);
    nuevoItem.value = "";

    }
} 