let backgrounds = []

backgrounds[0] = '../img/adam-birkett-PAV672H43Gs-unsplash.jpg'
backgrounds[1] = '../img/alyona-yankovska-gfJ_5-5e0wU-unsplash.jpg'
backgrounds[2] = '../img/annie-spratt-fFxUOS69bho-unsplash.jpg'
backgrounds[3] = '../img/dose-juice-sTPy-oeA3h0-unsplash.jpg'
backgrounds[4] = '../img/ethan-hoover-Gd436JT_Gyg-unsplash.jpg'
backgrounds[5] = '../img/gaelle-marcel-_xG7Rkf0OIs-unsplash.jpg'
backgrounds[6] = '../img/judah-guttmann-t69fIZXxrwQ-unsplash.jpg'
backgrounds[7] = '../img/mae-mu-9z-veIxii6k-unsplash.jpg'
backgrounds[8] = '../img/nicolette-meade-RL3F99l0XYE-unsplash.jpg'
backgrounds[9] = '../img/repentand-seekchristjesus-nqSUnXINsp4-unsplash.jpg'
backgrounds[10] = '../img/timothy-klingler-7A-qQiV7i38-unsplash.jpg'
backgrounds[11] = '../img/wyman-h-6v7x_U3AQzQ-unsplash.jpg'


function cambiarFondo() {
    const indiceAleatorio = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url(${backgrounds[indiceAleatorio]})`;
}

setInterval(cambiarFondo, 30000);

cambiarFondo();