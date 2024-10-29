"use strict";
const lessons = document.querySelector(".lessons");
table.forEach((element) => {
  lessons.insertAdjacentHTML(
    "beforeend",
    `
    <div class="lesson">
      <div>Наименование занятия: <span class="lessonName">${element.name}</span></div>
      <div>Время занятия: <span class="lessonTime">${element.time}</span></div>
      <div>Свободных мест осталось: <span class="lessonFreeQuantity">${element.freeQuantityRecord}</span></div>
      <button class="record">Записаться</button>
      <button class="cancelRecord" disabled>Отменить запись</button>
    </div>
    `
  );
});
const maxQuantities = new Map();
lessons.addEventListener("click", (event) => {
  const lesson = event.target.closest(".lesson");
  if (!lesson) return;
  const lessonFreeQuantity = lesson.querySelector(".lessonFreeQuantity");
  let quantity = parseInt(lessonFreeQuantity.textContent, 10);
  if (!maxQuantities.has(lesson)) {
    maxQuantities.set(lesson, quantity);
  }
  const maxQuantity = maxQuantities.get(lesson);
  if (event.target.classList.contains("record")) {
    if (quantity > 0) {
      quantity -= 1;
      lessonFreeQuantity.textContent = quantity;
      if (quantity <= 0) {
        event.target.disabled = true;
      }
      const cancelRecord = lesson.querySelector(".cancelRecord");
      cancelRecord.disabled = false;
    }
  } else if (event.target.classList.contains("cancelRecord")) {
    if (quantity < maxQuantity) {
      quantity += 1;
      lessonFreeQuantity.textContent = quantity;
      if (quantity >= maxQuantity) {
        event.target.disabled = true;
      }
      const record = lesson.querySelector(".record");
      record.disabled = false;
    }
  }
});
