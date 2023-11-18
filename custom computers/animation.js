const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  currentSlide = index;
}

showSlide(0);

prevButton.addEventListener('click', () => {
  if (currentSlide === 0) {
    showSlide(slides.children.length - 1);
  } else {
    showSlide(currentSlide - 1);
  }
});

nextButton.addEventListener('click', () => {
  if (currentSlide === slides.children.length - 1) {
    showSlide(0);
  } else {
    showSlide(currentSlide + 1);
  }
});
