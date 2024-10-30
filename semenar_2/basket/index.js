"use strict";
const button = document.querySelector("button");

button.addEventListener("click", function (e) {
  if (e.isTrusted) {
    button.innerText = "Товар добавлен в корзину";
    setTimeout(() => {
      button.innerText = "Купить";
    }, 2000);
  } else {
    console.log("Автокликер!");
  }
});
