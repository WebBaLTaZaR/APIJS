const ulEl = document.querySelectorAll("ul");
const form = document.forms.products;
form.selectForm.addEventListener("change", function (e) {
  ulEl.forEach((li) => {
    li.classList.add("hidden");
  });
  ulEl.forEach((li) => {
    if (form.selectForm.value === li.id) {
      li.classList.remove("hidden");
    }
  });
});
