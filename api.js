const JIKAN = 'https://api.jikan.moe/v4';
const ANN_RSS = 'https://www.animenewsnetwork.com/all/rss.xml';

async function getAiring() {
  const res = await fetch(`${JIKAN}/season/now`);
  const json = await res.json();
  return json.data.slice(0, 12);
}

async function getNews() {
  const res = await fetch(
    `https://api.allorigins.win/raw?url=${encodeURIComponent(ANN_RSS)}`
  );
  const text = await res.text();
  const xml = new DOMParser().parseFromString(text, 'text/xml');
  return [...xml.querySelectorAll('item')].slice(0, 5).map(item => ({
    title: item.querySelector('title').textContent,
    link: item.querySelector('link').textContent
  }));
}
