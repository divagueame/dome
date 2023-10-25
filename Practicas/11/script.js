const fondo = document.querySelector('body');
const botonCambiarFondo = document.getElementById('cambiarFondo');
let fondoActual = 1;

botonCambiarFondo.addEventListener('click', () => {
    if (fondoActual === 1) {
        fondo.style.backgroundImage = 'url("gato3.jpg")';
        fondoActual = 2;
    } else if (fondoActual === 2) {
        fondo.style.backgroundImage = 'url("gato5.jpg")';
        fondoActual = 3;
    } else {
        fondo.style.backgroundImage = 'url("gato1.jpg")';
        fondoActual = 1;
    }
});
