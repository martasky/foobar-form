export function getLabel(elm) {
  let label = elm.label.replace("png", "webp");

  let imgUrl = "/assets/beer-images/" + label;
  return imgUrl;
}
