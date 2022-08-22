var timeleft = 30;
var isTrue= true;
var datoSucursales;

const sucursales = [
    { id:1, alias:"SP1", name:"San Pablo Uno", stateconnection:true },
    { id:2, alias:"SP2", name:"San Pablo Dos", stateconnection:true },
    { id:3, alias:"CO1", name:"Correo Uno", stateconnection:false },
    { id:4, alias:"CO2", name:"Correo Dos", stateconnection:false },
    { id:5, alias:"BOL", name:"Bolivia", stateconnection:true },
];




function addLine(texto){

let element = document.getElementById("addNewline");
element.innerHTML = texto;
}

//volver a definir check

var downloadTimer = setInterval(function(){
    if(timeleft<=0 && isTrue==true){
        isTrue=false;
        clearInterval(downloadTimer);
    }
    else{if(timeleft<=0 && isTrue==false){
        isTrue=true;
        clearInterval(downloadTimer);
    }}
},3000);



function remove(id) 
	 {
     var element = document.getElementById(id);
     return element.parentNode.removeChild(element);
	 }
   // remove("removeme");

function goOnline() {
    document.body.classList.remove('offline');
    document.body.classList.add('online');
    // Hacer algo más al ir online
}

function goOffline() {
    document.body.classList.remove('online');
    document.body.classList.add('online');
    // Hacer algo más al ir offline
}

function checkstatushtml(statusid){
var s = document.getElementById(statusid);
}

setInterval(function () {
  s.className = navigator.onLine ? 'online' : 'offline';
  s.innerHTML = navigator.onLine ? 'online' : 'offline';  
}, 250);