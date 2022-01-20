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
    if(message.toLowerCase() === '!mp join' && lobbyMode){
        
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
        }

    else if(!lobbyMode) 
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
