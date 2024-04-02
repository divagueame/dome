function hiddenBanner() {

    let element = document.getElementById("overlay");
    element.classList.add("hidden");
}

document.getElementById("consent-button").addEventListener("click", hiddenBanner);

const imagen = document.querySelector(".cambio")
console.log(imagen['src'])
//No cambiar nada mas arriba

//No cambiar esta line
console.log(imagen.src)


let images = ["img/gato1.jpg","img/perro.jpg", "img/gatos2.webp", "img/perro1.jpg"]

for (let i = 0; i < images.length; i++) {
    setTimeout(() => {
        imagen.src = images[i];
    }, 3000 * i);
};

function startImageLoop() {
    let currentIndex = 0;
    setInterval(() => {
        imagen.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }, 3000);
}
startImageLoop();