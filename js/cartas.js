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

