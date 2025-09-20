// Array para almacenar los nombres de los amigos
let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido añadido.');
        limpiarCaja();
        return;
    }

    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarListaAmigos() {
    let listaHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        listaHTML += `<li>${amigos[i]}</li>`;
    }
    asignarTextoElemento('#listaAmigos', listaHTML);
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Agrega al menos 2 amigos para poder sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    asignarTextoElemento('#resultado', `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`);
}