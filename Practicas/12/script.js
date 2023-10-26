const images = ["gato7.jpg", "gato8.jpg", "gato9.jpg"];
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const image = document.querySelector(".image-container img");
    image.src = images[currentIndex];
}

setInterval(changeImage, 3000); 
