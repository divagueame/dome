function updateDateTime() {
    var now = new Date();
    var datetimeElement = document.getElementById("datetime");
    datetimeElement.innerHTML = now.toLocaleString();
}

// Call the function initially and then set it to update every second
updateDateTime();
setInterval(updateDateTime, 1000);

const imagen = document.querySelector(".cambio")
console.log(imagen['src'])
//No cambiar nada mas arriba

//No cambiar esta line
console.log(imagen.src)


let images = ["img/3.jpeg", "img/4.jpeg", "img/8.jpeg"]




for (let i = 0; i < images.length; i++) {
    console.log(images[i]);

    setTimeout(() => {
        imagen.src = images[i];

    }, 3000 * i);
};





