let carouselContainer = document.querySelector(".carousel"); 
let carousel = document.querySelector(".carousel__flex"); 
let carouselItems = document.querySelectorAll(".carousel__item"); 
let arrows = document.querySelectorAll(".arrow"); 
let currentPicture = document.querySelector(".carousel__center");
let main = document.querySelector("main"); 

let padding = main.clientWidth > 500 ? 30 : 15;

carousel.style.transform = `translatex(-${carousel.clientWidth * 2 + (padding * 2)}px)`; 

window.addEventListener("resize", function() {
    let padding = main.clientWidth > 500 ? 30 : 15; 
    let currentPicture = document.querySelector(".carousel__center");
    let index = Number(currentPicture.getAttribute("data-index")); 
    if (index >= 1 && index <= 3) {
        carousel.style.transform = `translatex(-${(carousel.clientWidth * index) + (padding * index)}px)`;
    }
    if (index === 4) {
        carousel.style.transform = `translatex(-${(carousel.clientWidth * index) + (padding * (index-1))}px)`;
    }
    if (index === 0) {
        carousel.style.transform = `translatex(0px)`; 
    }
})

arrows[0].addEventListener("click", function() {
    let currentPicture = document.querySelector(".carousel__center");
    let padding = main.clientWidth > 500 ? 30 : 15; 
    if (!currentPicture.previousElementSibling) {
        return  
    }
    let index = Number(currentPicture.getAttribute("data-index")) - 1; 
    if (index >= 0) {
        carousel.style.transform = `translatex(-${(carousel.clientWidth * index) + (padding * index)}px)`; 
        currentPicture.classList.remove("carousel__center"); 
        currentPicture.previousElementSibling.classList.add("carousel__center"); 
        return; 
    }
    if (index === -1) {
        carousel.style.transform = `translatex(0px)`; 
        currentPicture.classList.remove("carousel__center"); 
        currentPicture.previousElementSibling.classList.add("carousel__center"); 
    }
})

arrows[1].addEventListener("click", function() {
    let currentPicture = document.querySelector(".carousel__center");
    let padding = main.clientWidth > 500 ? 30 : 15; 
    if (!currentPicture.nextElementSibling) {
        return  
    }
    let index = Number(currentPicture.getAttribute("data-index")) + 1; 
    if (index < 4) {
        carousel.style.transform = `translatex(-${(carousel.clientWidth * index) + (padding * index)}px)`; 
        currentPicture.classList.remove("carousel__center"); 
        currentPicture.nextElementSibling.classList.add("carousel__center"); 
        return; 
    }
    if (index === 4) {
        carousel.style.transform = `translatex(-${(carousel.clientWidth * index) + (padding * (index))}px)`; 
        currentPicture.classList.remove("carousel__center"); 
        currentPicture.nextElementSibling.classList.add("carousel__center"); 
    }
}); 