const password = document.getElementById('pass');
const copy = document.getElementById('copy');
const generateButton = document.getElementById('generateButton');
const passwordLength = document.getElementById('passwordLength');

const stringMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const stringMinusculas = "abcdefghijklmnopqrstuvwxyz";
const stringNumeros = "0123456789";
const stringSimbolos = "!@#$%^&*()-_=+[]{};:'<>?";
const allStrings = stringMayusculas + stringMinusculas + stringNumeros + stringSimbolos;

//generar la contraseña en función de los caracteres que quiero:

function generatePassword() {
    let pass = "";

    while (parseInt(passwordLength.value) > pass.length) {
        pass += allStrings[Math.floor(Math.random() * allStrings.length)];
    }
    password.value = pass;
}

generateButton.addEventListener("click", generatePassword);

//copiar la contraseña al portapapeles

function copyPassword() {
    password.select();
    navigator.clipboard.writeText(password.value);
    alert('Contraseña copiada al portapapeles');
}

copy.addEventListener('click', copyPassword);