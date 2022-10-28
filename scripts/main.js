function showSlides(num) {
    var numSlider = num;
    var slides = document.getElementsByClassName("sliderElement");
    var puntos = document.getElementsByClassName("punto");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    numSlider++;
    if (numSlider > slides.length) {
        numSlider = 1;
    }
    for (let i = 0; i < puntos.length; i++) {
        puntos[i].className = puntos[i].className.replace(" active", "")

    }
    slides[numSlider - 1].style.display = "block";
    puntos[numSlider - 1].className += " active";
    setTimeout(showSlides, 5000, numSlider);

}

function slider() {
    var slideIndex = 0;
    showSlides(slideIndex);
}

function galeria() {
    var ventana = document.getElementById("ventana");
    var fotos = document.getElementsByClassName("fotos")
    var imgAmpliada = document.getElementById("img")
    var span = document.getElementsByClassName("close")[0];

    for (let i = 0; i < fotos.length; i++) {
        fotos[i].addEventListener("click", evt => {
            ventana.style.display = "block"
            imgAmpliada.src = evt.currentTarget.src
        })
    }
    span.addEventListener("click", evt => {
        ventana.style.display = "none";
    })
}


function main() {
    slider();
    galeria();

}

main();
