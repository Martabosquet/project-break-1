const displayClock = document.getElementById("clock");
const displayDate = document.getElementById("date");
const displayMessage = document.getElementById("message");
const weekDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]; //empieza en domingo

const getMessage = (hour) => {
    if (hour <= 7) return "Es hora de descansar. Apaga y sigue mañana";
    if (hour <= 12) return "Buenos días, desayuna fuerte y a darle al código";
    if (hour <= 14) return "Echa un rato más pero no olvides comer";
    if (hour <= 16) return "Espero que hayas comido";
    if (hour <= 18) return "Buenas tardes, el último empujón";
    if (hour <= 22) return "Esto ya son horas extras, piensa en parar pronto";
    return "Buenas noches, es hora de pensar en parar y descansar";
};

function updateClock() {
    const now = new Date();

    //RELOJ DIGITAL
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    hour = hour < 10 ? "0" + hour : hour; //ternario: si es menor que 10, ponle un cero delante, sino como está
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    displayClock.textContent = `${hour}:${minute}:${second}`;

    // FECHA
    const day = now.getDate();
    const month = now.getMonth() + 1; // empieza en 0
    const year = now.getFullYear();
    const dayOfWeek = now.getDay();

    const dayOutput = day < 10 ? '0' + day : day;
    const monthOutput = month < 10 ? '0' + month : month;
    const dayOfWeekOutput = weekDays[dayOfWeek];
    displayDate.textContent = `${dayOfWeekOutput}, ${dayOutput}/${monthOutput}/${year}`;

    //MENSAJE

    displayMessage.textContent = getMessage(hour).toUpperCase();
}

//inicializar todo
setInterval(updateClock, 1000);
updateClock();