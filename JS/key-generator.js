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

generateButton.addEventListener("click",
    function () {
        let pass = "";
        const passwordLengthInput = parseInt(passwordLength.value);

        // Asegurar q pongo uno de cada tipo mínimo:
        pass += stringMayusculas[Math.floor(Math.random() * stringMayusculas.length)];
        pass += stringMinusculas[Math.floor(Math.random() * stringMinusculas.length)];
        pass += stringNumeros[Math.floor(Math.random() * stringNumeros.length)];
        pass += stringSimbolos[Math.floor(Math.random() * stringSimbolos.length)];

        // resto de caracteres aleatorios hasta llegar al tamaño que se ha pedido:
        while (passwordLengthInput > pass.length) {
            pass += allStrings[Math.floor(Math.random() * allStrings.length)];
        }

        // barajamos la contraseña para que los primeros caracteres no sigan siempre el mismo orden
        pass = pass.split('').sort(() => 0.5 - Math.random()).join('');

        password.value = pass;
    }
);

//copiar la contraseña al portapapeles

copy.addEventListener('click',
    async function () {
        if (!password.value) return;

        try {
            await navigator.clipboard.writeText(password.value);
            alert('Contraseña copiada al portapapeles ✅');

        } catch (error) {
            console.error("Error al copiar:", error.message);
            alert('No se pudo copiar la contraseña. Por favor, inténtalo manualmente.');
        }
    }
);