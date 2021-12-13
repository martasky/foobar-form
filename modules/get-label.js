export function getLabel(elm) {
  let label = elm.label.replace("png", "webp");

  let imgUrl = new URL(`/assets/beer-images/${label}`, import.meta.url).href;
  return imgUrl;
}
