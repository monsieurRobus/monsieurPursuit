// Conectamos con el chat
const client = new tmi.Client({
    options: {debug:true },
    identity: {
        username: 'mostachiBot',
        password: 'oauth:0e226q7tj9oizdfubinawf8hfj9lgl'
    },
    channels: [ 'soyMonsieur' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    if(self) return;

    // ENTRAMOS EN EL JUEGO
    if(message.toLowerCase().includes("!respuesta") && juegoActivo){

        //POR HACER
        //MIRAR EL MODO DE JUEGO
        // 1. SI ES CON EL CHAT, MIRAR SI EL JUGADOR YA HA RESPONDIDO, SI NO, ALMACENAMOS SU RESPUESTA (por hacer)
        
        if(jugadores.length<1)
        {
            meteJugador(tags.username,message,channel);
            
        }
        else
        {


            for(var i=0;i<jugadores.length;i++)
            {

                let element = jugadores[i];
                if(element[0]===tags.username)
                {
                    var repetido = true; 
                }
                else
                {
                    var repetido = false;
                }
            }

            if (repetido)
                client.say(channel, `@${tags.username}`+", ya has respondido a esta pregunta!!"  );  
            else
                meteJugador(tags.username,message,channel);
            
              
        }

        }

    else if(message.toLowerCase().includes("!respuesta") && !juegoActivo) 
    {
        client.say(channel, `@${tags.username}, monsieurPursuit no está activo!`);
    }
        
});

//En funcion del boton que presionemos en el elemento de la lista, sumaremos puntos o borraremos la respuesta si no es valida

var eventoJugador  = (ev) => {
    
    let usuario=ev.path[1].id;
    let evento=ev.path[0].id;
    let puntuacion = 0;
    let jugadorAux= []
    switch(evento)
    {
        case 'acierto':

            puntuacion = document.getElementById("puntosAcierto").value;
            alert("Se lleva "+puntuacion+" puntos el nota");

            break;

        case 'empate':

            puntuacion = document.getElementById("puntosEmpate").value;
            alert("Se lleva "+puntuacion+" puntos el nota");

            break;

        case 'borrar':
            ev.path[1].remove();
            for(var i=0;i<jugadores.length;i++){
                console.log(jugadores[i]);
                if(jugadores[i][0]==usuario)
                {
                  jugadores.splice(i,1);
                }
               
            }
    }
    
    return false;

}

var actualizarVentana = () =>{

    document.reload();
}

var meteJugador = (usuario,mensaje,canal) => {
    client.say(canal, `@${usuario} ha respondido "${mensaje.split("!respuesta ")[1]}"`);
    let respuesta = [];
    respuesta.push(usuario);
    respuesta.push(mensaje.split("!respuesta "));
    jugadores.push(respuesta);
    var botonAcierto = document.createElement("button");
    botonAcierto.innerHTML="&#9989;";
    botonAcierto.id="acierto";
    var botonEmpate = document.createElement("button");
    botonEmpate.innerHTML="&#128279;";
    botonEmpate.id="empate";
    var botonBorrar = document.createElement("button");
    botonBorrar.innerHTML ="&#10060;";
    botonBorrar.id="borrar";
    var spanB = document.createElement("span");
    spanB.id = usuario;
    spanB.innerHTML=""+usuario+": "+mensaje.split("!respuesta ")[1]+"  ";         
    var elemLi = document.createElement("li");
    elemLi.id = usuario;          
    elemLi.appendChild(spanB);
    elemLi.appendChild(botonAcierto);
    elemLi.appendChild(botonEmpate);
    elemLi.appendChild(botonBorrar);
    document.getElementById("lista").appendChild(elemLi);
}