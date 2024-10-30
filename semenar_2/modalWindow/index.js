"use strict";
const openModalWindow = document.querySelector(".openModalWindow");
const modalWindow = document.querySelector(".modalWindow");
const closed = document.querySelector(".closed");

openModalWindow.addEventListener("click", function (e) {
  modalWindow.classList.remove("hidden");
});
closed.addEventListener("click", function (e) {
  modalWindow.classList.add("hidden");
});
