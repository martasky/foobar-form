export function getBeerPrice(elm) {
  let name = elm.name;
  let price = "";
  if (name == "El Hefe") {
    price = 40;
  } else if (name == "Fairy Tale Ale") {
    price = 60;
  } else if (name == "GitHop") {
    price = 60;
  } else if (name == "Hollaback Lager") {
    price = 50;
  } else if (name == "Hoppily Ever After") {
    price = 65;
  } else if (name == "Mowintime") {
    price = 30;
  } else if (name == "Row 26") {
    price = 80;
  } else if (name == "Ruined Childhood") {
    price = 70;
  } else if (name == "Sleighride") {
    price = 70;
  } else {
    price = 50;
  }
  return price;
}
