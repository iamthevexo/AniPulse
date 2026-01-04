const JIKAN_API = 'https://api.jikan.moe/v4';
const ANN_RSS = 'https://www.animenewsnetwork.com/all/rss.xml';
const TMDB_API_KEY = '7ece6cd8cadf387aaa333a390503d8d2'; // Replace with your TMDB API Key

// Fetching Airing Anime
async function fetchAiringAnime() {
  const response = await fetch(`${JIKAN_API}/season/now`);
  const data = await response.json();
  return data.data.slice(0, 100);  // Get the first 10 airing anime
}

// Fetching Upcoming Anime
async function fetchUpcomingAnime() {
  const response = await fetch(`${JIKAN_API}/season/upcoming`);
  const data = await response.json();
  return data.data.slice(0, 10);  // Get the first 10 upcoming anime
}

// Fetching Anime News (RSS)
async function fetchAnimeNews() {
  const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(ANN_RSS)}`);
  const xmlText = await response.text();
  const xml = new DOMParser().parseFromString(xmlText, 'text/xml');
  const items = Array.from(xml.querySelectorAll('item')).slice(0, 5);
  return items.map(item => ({
    title: item.querySelector('title').textContent,
    link: item.querySelector('link').textContent
  }));
}

// Fetching Revenue from TMDB (by Anime Title)
async function fetchRevenue(animeTitle) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${animeTitle}&api_key=${TMDB_API_KEY}`);
  const data = await response.json();
  return data.results[0] || {};  // Return the first result
}
