const ul = document.querySelector("ul");

async function fetchUserList() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка:", error.message);
    return [];
  }
}

window.addEventListener("load", async () => {
  const data = await fetchUserList();
  data.forEach((element) => {
    ul.insertAdjacentHTML(
      "beforeend",
      `
		<li>
		имя сотрудника ${element.name}
		</li>`
    );
  });
});
