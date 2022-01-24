// DEFINIMOS VARIABLES
let jugadores=[];
let preguntaActiva=false;
let juegoActivo=false;

let ready = () => {
    juegoActivo=!juegoActivo;    

    if(juegoActivo) 
    {
        document.getElementById("signoready").classList.remove("notready");
        document.getElementById("signoready").classList.add("ready");
    }
             
    
    else
    {
        document.getElementById("signoready").classList.remove("ready");
        document.getElementById("signoready").classList.add("notready");
        

    }
   
    
}

let vaciaJuego = () =>
{
    jugadores=[];
    document.getElementById("lista").innerHTML='';
    client.say('soyMonsieur', `Admin ha vaciado a todos los jugadores!`);
}