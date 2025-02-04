let input = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

let amigos = [];

function renderizarLista() {
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function adicionarAmigo() {
    if (input.value.trim() === '') {
        alert('Digite um nome, por favor!');
        return;
    }

    amigos.push(input.value.trim());
    input.value = '';
    resultado.innerHTML = '';
    renderizarLista();
}

function sortearAmigos() {
    if (amigos.length === 0) {
        alert('Adicione amigos para sortear!');
        return;
    }

    let sorteado = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `O amigo sorteado foi: <strong>${amigos[sorteado]}</strong>`;
    lista.innerHTML = ''
    amigos = [];
}
