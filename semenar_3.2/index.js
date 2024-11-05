const photoContainer = document.querySelector("#photo-container");
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
  photos.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo.urls.small; // URL для небольшого изображения
    img.alt = photo.alt_description || "Фото";
    photoContainer.appendChild(img);
  });
}

// Событие для бесконечной прокрутки
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
  ) {
    page++;
    loadMorePhotos();
  }
});

// Загрузка первой партии фотографий при загрузке страницы
loadMorePhotos();
