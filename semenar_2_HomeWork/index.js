"use strict";
const dogs = document.querySelectorAll(".dogs");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const radioButtons = document.querySelectorAll("input[name='slider']");
let currentIndex = 0;
right.addEventListener("click", function (e) {
  dogs[currentIndex].classList.add("hidden");
  currentIndex++;
  if (currentIndex >= dogs.length) {
    currentIndex = 0;
  }
  radioButtons.forEach((radio, index) => {
    radio.checked = index === currentIndex;
  });
  dogs[currentIndex].classList.remove("hidden");
});
left.addEventListener("click", function (e) {
  dogs[currentIndex].classList.add("hidden");
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = dogs.length - 1;
  }
  radioButtons.forEach((radio, index) => {
    radio.checked = index === currentIndex;
  });
  dogs[currentIndex].classList.remove("hidden");
});
radioButtons.forEach((radio, index) => {
  radio.addEventListener("change", function (e) {
    dogs[currentIndex].classList.add("hidden");
    currentIndex = index;
    dogs[currentIndex].classList.remove("hidden");
  });
});
