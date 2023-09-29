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

let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * (170 / slides.length)}%)`;
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


