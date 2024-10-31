"use strict";
const question = document.querySelector(".question");
const button = document.querySelector("button");

button.addEventListener("click", function (e) {
  const selectOption1 = document.querySelector('input[name="answer1"]:checked');
  const selectOption2 = document.querySelector('input[name="answer2"]:checked');
  const selectOption3 = document.querySelector('input[name="answer3"]:checked');
  if (selectOption1 && selectOption2 && selectOption3) {
    if (document.querySelector(".result")) {
      document.querySelector(".result").innerText = "";
    }
    button.insertAdjacentHTML(
      "afterend",
      `
		<div class = 'result'>Ваш результат: ${selectOption1.value}, ${selectOption2.value}, ${selectOption3.value}</div>`
    );
  } else {
    button.insertAdjacentHTML(
      "afterend",
      `
		  <div>Нельзя оставлять поле пустым!</div>`
    );
  }
});
