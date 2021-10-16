var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


const input = document.querySelector('input')
const minBtn = document.querySelector('#min')
const plusBtn = document.querySelector('#plus')
const minValue = 0
const maxValue = 12

function checkButton() {
  if (input.value == minValue) {
    minBtn.disabled = true
    plusBtn.disabled = false
  } else if (input.value == maxValue) {
    minBtn.disabled = false
    plusBtn.disabled = true
  } else {
    minBtn.disabled = false
    plusBtn.disabled = false
  }
}

// Set button when first loaded
window.addEventListener('DOMContentLoaded', checkButton)

// Set button when input was changed
input.addEventListener('input', checkButton)


// Add listener when button has clicked
minBtn.addEventListener('click', () => {
  input.value = Number(input.value) - 1
  checkButton()
})

plusBtn.addEventListener('click', () => {
  input.value = Number(input.value) + 1
  checkButton()
})
