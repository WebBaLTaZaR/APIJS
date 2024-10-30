"use strict";
const header = document.querySelector(".header");

header.addEventListener("mouseover", function (e) {
  if (e.target.className === "menu") {
    e.target.style.backgroundColor = "#0652CA";
  }
});
header.addEventListener("mouseout", function (e) {
  if (e.target.className === "menu") {
    e.target.style.backgroundColor = "#2C2C2C";
  }
});
header.addEventListener("click", function (e) {
  if (e.target.className === "menu") {
    e.target.style.backgroundColor = "#8FB6FF";
  }
});
