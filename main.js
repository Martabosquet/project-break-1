// Detectamos si estamos en la carpeta HTML o en la raíz para adaptar las rutas
const isHtmlFolder = window.location.pathname.includes('/HTML/');
const imgPath = isHtmlFolder ? '../img/' : './img/';
const htmlPath = isHtmlFolder ? './' : './HTML/';

// BACKGROUNDS
let backgrounds = []
backgrounds[0] = imgPath + 'adam-birkett-PAV672H43Gs-unsplash.jpg'
backgrounds[1] = imgPath + 'alyona-yankovska-gfJ_5-5e0wU-unsplash.jpg'
backgrounds[2] = imgPath + 'annie-spratt-fFxUOS69bho-unsplash.jpg'
backgrounds[3] = imgPath + 'dose-juice-sTPy-oeA3h0-unsplash.jpg'
backgrounds[4] = imgPath + 'ethan-hoover-Gd436JT_Gyg-unsplash.jpg'
backgrounds[5] = imgPath + 'mae-mu-9z-veIxii6k-unsplash.jpg'
backgrounds[6] = imgPath + 'nicolette-meade-RL3F99l0XYE-unsplash.jpg'
backgrounds[7] = imgPath + 'timothy-klingler-7A-qQiV7i38-unsplash.jpg'
backgrounds[8] = imgPath + 'bharath-kumar-rFsA98sht3M-unsplash.jpg'
backgrounds[9] = imgPath + 'the-walters-art-museum-2vseuo54GvA-unsplash.jpg'
backgrounds[10] = imgPath + 'pawel-czerwinski-Kg2SSR9wyGU-unsplash.jpg'
backgrounds[11] = imgPath + 'bharath-kumar-7Gfn4QxxUYY-unsplash.jpg'
backgrounds[12] = imgPath + 'natalie-kinnear-iXsezhIynRc-unsplash.jpg'

function cambiarFondo() {
    const indiceAleatorio = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url(${backgrounds[indiceAleatorio]})`;
}

setInterval(cambiarFondo, 30000);
cambiarFondo();

// FOOTER BUTTONS
const footer = `
        <nav id="navigation-footer">
            <ul>
                <li><a href="${htmlPath}digital-clock.html"><img src="${imgPath}reloj.png" alt="icono del dibujo de un reloj"></a></li>
                <li><a href="${htmlPath}key-generator.html"><img src="${imgPath}candado.png" alt="icono del dibujo de un candado"></a></li>
                <li><a href="${htmlPath}link-collect.html"><img src="${imgPath}enlace.png" alt="icono del dibujo de un enlace"></a></li>
                <li><a href="${htmlPath}weather.html"><img src="${imgPath}nube.png" alt="icono del dibujo de una nube"></a></li>
            </ul>
        </nav>
`;

const siteFooter = document.querySelector('footer');
if (siteFooter) {
    siteFooter.innerHTML = footer;
}

// GO HOME BUTTON
const goHome = document.getElementById("goHome");
if (goHome) {
    goHome.addEventListener("click", () => {
        window.location.href = isHtmlFolder ? "../index.html" : "./index.html";
    });
}