"use strict";
const add = document.querySelector(".add");
const article = document.querySelector(".article");

articLesData.forEach((element) => {
  article.insertAdjacentHTML(
    "beforeend",
    `<div class = articleItem>
	<h2 class="main">${element.title}</h2>
      <p class="text">${element.content}</p>
      <button class="edit">редактировать</button>
      <button class="remove">удалить</button>
	</div>
	`
  );
});
add.addEventListener("click", () => {
  article.insertAdjacentHTML(
    "beforeend",
    `<div class = articleItem>
	<h2 class="main">Новая статья</h2>
      <p class="text">Введите содержание статьи...</p>
      <button class="edit">редактировать</button>
      <button class="remove">удалить</button>
	  </div>`
  );
});
const edit = document.querySelectorAll(".edit");
const remove = document.querySelectorAll(".remove");

article.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove")) {
    const articleItem = event.target.closest(".articleItem");
    articleItem.remove();
  } else if (event.target.classList.contains("edit")) {
    const articleItem = event.target.closest(".articleItem");
    const main = articleItem.querySelector(".main");
    const text = articleItem.querySelector(".text");
    main.textContent = prompt("Введите новый заголовок:");
    text.textContent = prompt("Введите новое содержание:");
  }
});
