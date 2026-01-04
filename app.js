async function loadAiring() {
  const list = document.getElementById('airing-list');
  const anime = await getAiring();

  anime.forEach(a => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${a.images.webp.image_url}">
      <h3>${a.title}</h3>
    `;
    list.appendChild(div);
  });
}

async function loadNews() {
  const list = document.getElementById('news-list');
  const news = await getNews();

  news.forEach(n => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${n.link}" target="_blank">${n.title}</a>`;
    list.appendChild(li);
  });
}

loadAiring();
loadNews();
