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


        /*
        client.say(channel, `@${tags.username}, estas dentro!`);
        jugadores.push(tags.username);
        var botonBorrar = document.createElement("button");
        botonBorrar.innerHTML ="&#10060;";
        var spanB = document.createElement("span");
        spanB.id = tags.username;
        spanB.innerHTML=""+tags.username;         
        var elemLi = document.createElement("li");
        elemLi.id = tags.username;          
        elemLi.appendChild(spanB);
        elemLi.appendChild(botonBorrar);
        document.getElementById("lista").appendChild(elemLi);
        console.log(elemLi);
        botonBorrar.addEventListener('click',borrarUser(""+tags.username));
        */
        }

    else if(message.toLowerCase().includes("!respuesta") && !juegoActivo) 
    {
        client.say(channel, `@${tags.username}, monsieurPursuit no está activo!`);
    }
        
});

let borrarUser  = (usuario) => {
    
    for(var i=0;i<jugadores.length;i++){
        if(jugadores[i]==usuario)
        {
          alert("dentro");
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
    var botonBorrar = document.createElement("button");
    botonBorrar.innerHTML ="&#10060;";
    var spanB = document.createElement("span");
    spanB.id = usuario;
    spanB.innerHTML=""+usuario+": "+mensaje.split("!respuesta ")[1]+"  ";         
    var elemLi = document.createElement("li");
    elemLi.id = usuario;          
    elemLi.appendChild(spanB);
    elemLi.appendChild(botonBorrar);
    document.getElementById("lista").appendChild(elemLi);
}