(() => {
	"use strict";

// STICKY HEADER
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.navbar').removeClass('bg-transparent');
        $('.navbar').addClass('bg-black'); 
    } else {
        $('.navbar').addClass('bg-transparent'); 
        $('.navbar').removeClass('bg-black');
    }
});


// PROMOS > HERO SLIDER
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const pagination = document.querySelector(".pagination");
const slideWidth = slides[0].offsetWidth;

let currentIndex = 0;

slides.forEach((slide, index) => {
  console.log(`Slide ${index + 1} width: ${slide.offsetWidth}px`);
});

function updateSlider() {
  const slideWidth = slides[0].offsetWidth + 1 * parseFloat(getComputedStyle(slides[0]).marginRight);
  slider.style.transform = `translateX(-${currentIndex * (slideWidth)}px)`;
}

function updatePagination() {
  pagination.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
      updatePagination();
    });
    if (index === currentIndex) {
      dot.classList.add("active");
    }
    pagination.appendChild(dot);
  });
}

updateSlider();
updatePagination();

})();


