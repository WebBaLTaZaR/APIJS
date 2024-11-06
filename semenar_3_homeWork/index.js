const content = document.querySelector(".content");
const like = document.querySelector(".like");
const countLoves = document.querySelector(".countLoves");
let page = 1;
async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=8rRSAXTN-kpVdE2WLqdWkmZ3QjX5Gg9ZC5-ooaGMD_k`
    );

    // Проверяем, если запрос не был успешным
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return [];
  }
}

async function loadMorePhotos() {
  const photos = await fetchPhotos();
  if (photos.length > 0) {
    const randomIndex = Math.floor(Math.random() * photos.length);
    const photo = photos[randomIndex];
    content.insertAdjacentHTML(
      "beforebegin",
      `
			<img width="500px" height="500px" src="${photo.urls.small}" alt="">
			<p>${photo.alt_description}</p>`
    );
    console.log(photo);
  }
}
loadMorePhotos();
let count = 0;

like.addEventListener("click", function (e) {
  if (like.src.endsWith("love_passive.svg")) {
    like.src = "img/love_active.svg";
  }
  count += 1;
  countLoves.innerHTML = count;
});
