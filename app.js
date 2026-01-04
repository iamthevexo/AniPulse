// DOM Elements
const airingList = document.getElementById('airing-list');
const upcomingList = document.getElementById('upcoming-list');
const newsList = document.getElementById('news-list');

// Load Airing Anime
async function loadAiringAnime() {
  const airingData = await fetchAiringAnime();
  airingData.forEach(anime => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${anime.images.webp.image_url}" alt="${anime.title}">
      <h3>${anime.title}</h3>
    `;
    airingList.appendChild(card);
  });
}

// Load Upcoming Anime
async function loadUpcomingAnime() {
  const upcomingData = await fetchUpcomingAnime();
  upcomingData.forEach(anime => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${anime.images.webp.image_url}" alt="${anime.title}">
      <h3>${anime.title}</h3>
    `;
    upcomingList.appendChild(card);
  });
}

// Load Anime News
async function loadAnimeNews() {
  const newsData = await fetchAnimeNews();
  newsData.forEach(news => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="${news.link}" target="_blank">${news.title}</a>`;
    newsList.appendChild(listItem);
  });
}

// Initialize the App
async function initApp() {
  await loadAiringAnime();
  await loadUpcomingAnime();
  await loadAnimeNews();
}

// Run the App
initApp();
