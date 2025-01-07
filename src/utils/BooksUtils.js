export function getImgUrl(img) {
  return new URL(`../assets/book-covers/${img}`, import.meta.url).href;
}
