
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
                  document.getElementById("lista").innerHTML+='<li id="'+tags.username+'">'+tags.username+'<button>&#10060;</button></li>';
                  }

                  
          });