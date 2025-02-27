// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigo = [];
// Creo el array de la lista completa de amigos

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");  
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo){
        alert("Debes ingresar un nombre");
        return;
    }

     // Verifico si el nombre ya está en la lista
     if (amigo.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido agregado. Por favor, ingresa un nombre diferente.");
        return;
    }

    if (amigo.includes(nombreAmigo.toLowerCase())) {
        alert("Este nombre ya ha sido agregado. Por favor, ingresa un nombre diferente.");
        return;
    }
    // Esto hará que los nombres sean sensibles a mayúsculas y minúsculas

    // Aqui debe agregarse el amigo a la lista
    amigo.push(nombreAmigo);
    console.log(amigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
    // Llamo a la función para que renderice la lista de amigos

}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigo.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}


