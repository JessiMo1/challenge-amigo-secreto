// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo(){
    let caja = document.getElementById("amigo");
     let nombre = caja.value.trim();

     if (nombre === ""){
        alert("Por favor, ingresa un nombre valido ");
        return;
     } 

     nombres.push(nombre);
     actualizarLista();
     caja.value = "";
      caja.focus();


}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
     lista.innerHTML= "";

     nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
     });
}

function sortearAmigo(){
    if (nombres.length === 0 ){
        document.getElementById("resultado").innerText = "No hay nombres para sortear";
        return;
    }
    let amigoSorteado = nombres[Math.floor(Math.random()*nombres.length)];
    document.getElementById("resultado").innerText=`Amigo Sorteado ${amigoSorteado}`;
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciarJuego(){
    // limpiar caja 
   nombres =[];
   document.getElementById("listaAmigos").innerHTML="";
   document.getElementById("resultado").innerHTML="";
   document.getElementById("amigo").value ="";
    

    document.querySelector('#reiniciar').setAttribute('disabled','true');


}
