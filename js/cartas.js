const bc = new BroadcastChannel('tarjetaVoltear');
 
 // Funciones a transmitir de volteo y actualización de carta            
  function voltear() {
    bc.postMessage("voltea");
    //console.log(tag);
}

function actualizar() {
    var datoSeleccionado = document.getElementById("listadoPreguntas").value;
    bc.postMessage(datoSeleccionado);
    //console.log(dato)
}

function apareceCarta(a){

    if(a)
        bc.postMessage("aparece");
    else
        bc.postMessage("desaparece");
}

function revelaEnunciado(){
    bc.postMessage("revelaEnunciado");
}

var reload = document.getElementById("reload");

reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    location.reload();
});