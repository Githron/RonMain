// const image = document.querySelector("img");
const image = document.getElementById("tImgX");

function updateImageSource() {
    if (window.matchMedia("(max-width: 730px)").matches) {
        image.src = "assets/images/image-web-3-mobile.jpg";
    } else {
        image.src = "assets/images/image-web-3-desktop.jpg";
    }
}

window.addEventListener("resize", updateImageSource);

updateImageSource();
