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


let images = [ "img/3.jpeg", "img/4.jpg", "img/5.jpg" ]

function changeimg (img, imagepath){
    img.src=imagepath;
}
setTimeout(() => {
    changeimg(imagen,"img/8.jpeg" )
}, 3000);