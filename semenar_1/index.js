"use strict";

window.addEventListener("resize", () => {
  console.log(`ширина экрана изменилась ${window.innerWidth}`);
  console.log(`высота экрана изменилась ${window.innerHeight}`);
});
// window,
//   addEventListener("beforeunload", (event) => {
//     event.preventDefault();
//     event.returnValue = "";
//   });
const back = document.querySelector(".back");
const forward = document.querySelector(".forward");
back.addEventListener("click", () => {
  history.back();
});
forward.addEventListener("click", () => {
  history.forward();
});
const add = document.querySelector(".add");
const clone = document.querySelector(".clone");
const remove = document.querySelector(".remove");

const list = document.querySelector(".list");
let count = 1;
add.addEventListener("click", () => {
  list.insertAdjacentHTML(
    "beforeend",
    `
		<div class="box">${count}</div>`
  );
  count += 1;
});

clone.addEventListener("click", () => {
  try {
    const boxes = document.querySelectorAll(".box");
    if (boxes.length == 0) {
      throw new Error("Отсутствуют элементы для копирования");
    }
    let lastBox = boxes[boxes.length - 1];
    const cloneBox = lastBox.cloneNode(true);
    list.appendChild(cloneBox);
  } catch (error) {
    alert(error.message);
  }
});
remove.addEventListener("click", () => {
  try {
    const boxes = document.querySelectorAll(".box");
    if (boxes.length == 0) {
      throw new Error("Нет объектов для удаления");
    }
    let lastBox = boxes[boxes.length - 1];
    lastBox.remove();
  } catch (error) {
    alert(error.message);
  }
});
