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

addLinkButton.addEventListener("click", async function () {
    const name = nameInput.value.trim();
    let url = urlInput.value.trim();

    if (name === "" || url === "") return;
    if (!url.startsWith('http')) url = `https://${url}`;

    const nuevoMarcador = { name: name, url: url };

    try {
        marcadores.push(nuevoMarcador);
        localStorage.setItem('misMarcadores', JSON.stringify(marcadores));

        nameInput.value = '';
        urlInput.value = '';

        await renderizarMarcadores();
        console.log("Marcador guardado con éxito");

    } catch (error) {
        console.error("Error al guardar el marcador:", error);
    }
});

renderizarMarcadores();

/* BORRAR MARCADORES GUARDADOS ----------------------------------------------------*/
/* Todos los enlaces */
clearButton.addEventListener("click",
    function () {
        localStorage.clear();
        marcadores = [];
        renderizarMarcadores();
    }
);

/* Solo uno */

function borrarLink(index) {
    marcadores.splice(index, 1); //"ve a esta posición y elimina 1 elemento"
    localStorage.setItem('misMarcadores', JSON.stringify(marcadores));
    renderizarMarcadores();
}

linksContainer.addEventListener("click",
    function (e) { //se lo pongo al padre porque sino deletebutton no existe cuando cargamos la función
        if (e.target.classList.contains('deleteButton')) {
            const index = e.target.getAttribute('data-index');
            borrarLink(index);
        }
    }
);

