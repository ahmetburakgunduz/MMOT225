const url =
  "http://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=830880a96fba47ef8f2b8016fd60a13e";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}