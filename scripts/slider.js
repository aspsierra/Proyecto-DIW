function showSlides(num) {
    var numSlider = num;
    var slides = document.getElementsByClassName("sliderElement");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    numSlider++;
    if (numSlider > slides.length) {
        numSlider = 1;
    }
    slides[numSlider - 1].style.display = "block";
    setTimeout(showSlides, 2000, numSlider);

}

function slider() {
    var slideIndex = 0;
    showSlides(slideIndex);
}

slider()