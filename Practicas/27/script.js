// script.js - Este archivo manejará la carga dinámica de contenido en la página principal.

document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector("main");
    
    // Función para cargar el contenido de la página mediante AJAX
    function cargarContenido(url) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        
        xhr.onload = function () {
            if (xhr.status === 200) {
                main.innerHTML = xhr.responseText;
            }
        };

        xhr.send();
    }

    // Manejar la navegación
    document.querySelectorAll("nav a").forEach(function (enlace) {
        enlace.addEventListener("click", function (event) {
            event.preventDefault();
            cargarContenido(enlace.getAttribute("href"));
        });
    });

    // Cargar el primer ejemplo por defecto
    cargarContenido("ejemplo1.html");
});
