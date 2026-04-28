const nameInput = document.getElementById('name-input');
const urlInput = document.getElementById('url-input');
const addLinkButton = document.getElementById('add-button');
const linksContainer = document.getElementById('li-container');
const clearButton = document.getElementById('clearButton');

/* GUARDAR EN EL LOCAL STORAGE Y AÑADIR AL DOM -------------------------------------------*/

let marcadores = JSON.parse(localStorage.getItem('misMarcadores')) || [];

function renderizarMarcadores() {
    linksContainer.innerHTML = '';

    marcadores.forEach((marcador, index) => {
        const link = document.createElement('li');
        link.innerHTML = `<div class="styleBox"><a href="${marcador.url}" class="links" target="_blank" rel="noopener noreferrer">${marcador.name}</a><button class="deleteButton" data-index="${index}">x</button></div>`;
        linksContainer.appendChild(link);
    });
}

function guardarMarcador() {
    const name = nameInput.value;
    let url = urlInput.value;

    if (name === "" || url === "") return;
    if (!url.startsWith('http')) url = `https://${url}`;

    const nuevoMarcador = { name: name, url: url };

    marcadores.push(nuevoMarcador);
    localStorage.setItem('misMarcadores', JSON.stringify(marcadores));
    nameInput.value = '';
    urlInput.value = '';
    renderizarMarcadores();
}

addLinkButton.addEventListener("click", guardarMarcador);

renderizarMarcadores();

/* BORRAR MARCADORES GUARDADOS ----------------------------------------------------*/
/* Todos los enlaces */
function limpiar() {
    localStorage.clear();
    marcadores = [];
    renderizarMarcadores();
}

clearButton.addEventListener("click", limpiar);

/* Solo uno */

function borrarLink(index) {
    marcadores.splice(index, 1); //"ve a esta posición y elimina 1 elemento"
    localStorage.setItem('misMarcadores', JSON.stringify(marcadores));
    renderizarMarcadores();
}

linksContainer.addEventListener("click", function (e) { //se lo pongo al padre porque sino deletebutton no existe cuando cargamos la función
    if (e.target.classList.contains('deleteButton')) {     // Si el elemento clicado tiene la clase 'deleteButton'
        const index = e.target.getAttribute('data-index'); // Obtenemos el índice que guardamos antes en el HTML
        borrarLink(index);
    }
});

