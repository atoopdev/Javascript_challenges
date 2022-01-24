const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide);

document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide);

function moveToNextSlide(){
    console.log("next slide");
    slides[slidePosition].classList.remove("carousel-item-visible");
        // check if at end of slides
    if(slidePosition == totalSlides - 1){
        console.log("End of slides");
        // reset slide position back to beginning
        slidePosition = 0;
    } else{
        slidePosition++;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide(){
    console.log("prev slide");
}