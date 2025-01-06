export function getImgUrl(img) {
  return new URL(`../assets/movie-covers/${img}`, import.meta.url).href;
}
