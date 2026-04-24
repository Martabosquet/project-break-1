//VARIABLES
const displayClock = document.getElementById("clock");
const displayDate = document.getElementById("date");
const displayMessage = document.getElementById("message");
let fechaActual = new Date();

// FUNCIÓN ACTUALIZAR

function updateClock() {
    //RELOJ DIGITAL
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    hour = hour < 10 ? "0" + hour : hour; //ternario: si es menor que 10, le antepone un cero, si no, se queda como está
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    displayClock.textContent = `${hour}:${minute}:${second}`;

    // FECHA
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // empieza en 0
    const año = fechaActual.getFullYear();
    const diaSemana = fechaActual.getDay();

    const sacarDia = dia < 10 ? '0' + dia : dia;
    const sacarMes = mes < 10 ? '0' + mes : mes;
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const diaDeLaSemana = diasSemana[diaSemana];
    displayDate.textContent = `${diaDeLaSemana}, ${sacarDia}/${sacarMes}/${año}`;


    //MENSAJE

    displayMessage.textContent = getMessage(hour).toUpperCase();

}

// MENSAJE

const getMessage = (hour) => {
    if (hour >= 0 && hour <= 7) {
        return "Es hora de descansar. Apaga y sigue mañana";
    } else if (hour > 7 && hour <= 12) {
        return "Buenos días, desayuna fuerte y a darle al código";
    } else if (hour > 12 && hour <= 14) {
        return "Echa un rato más pero no olvides comer";
    } else if (hour > 14 && hour <= 16) {
        return "Espero que hayas comido";
    } else if (hour > 16 && hour <= 18) {
        return "Buenas tardes, el último empujón";
    } else if (hour > 18 && hour <= 22) {
        return "Esto ya son horas extras, piensa en parar pronto";
    } else {
        return "Buenas noches, es hora de pensar en parar y descansar";
    }
}


//inicializar todo
setInterval(updateClock, 1000);
updateClock();