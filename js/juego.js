// DEFINIMOS VARIABLES
let jugadores=[];
let lobbyMode=false;

let ready = () => {
    lobbyMode=!lobbyMode;    

    if(lobbyMode) 
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