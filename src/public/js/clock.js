const today = moment().format('MMM DD, YYYY');
const fecha_registro = document.getElementById('fecha_registro');
const hora_registro = document.getElementById('hora_registro');

new_clock = () => {
    let clock = new Date();
    let hour = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();

    let print_clock = hour + ":" + minutes + ":" + seconds;

    fecha_registro.innerHTML = today;
    hora_registro.innerHTML = print_clock;
    setTimeout(new_clock, 1000);
}

new_clock();