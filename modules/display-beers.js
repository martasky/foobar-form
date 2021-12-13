import { setEventListeners } from "/modules/event-listeners.js";
export function displayBeers(currentTaps, barInfo) {
  currentTaps.forEach((beer) => {
    const clone = document
      .querySelector("template#beers")
      .content.cloneNode(true);
    const chosenBeer = beer.name.replaceAll(" ", "-");

    clone.querySelector(".beer_name").textContent = beer.name;
    clone
      .querySelector(".read_more")
      .setAttribute("id", `${beer.name.replaceAll(" ", "-")}`);
    clone.querySelector(".beer_type_name").textContent = `${beer.category},`;
    clone.querySelector(".beer_alkohol").textContent = `${beer.alc}%`;
    clone.querySelector(".beer_price").textContent = `${beer.price} kr`;
    clone.querySelector(".beer_img img").src = beer.label;
    clone.querySelector("input[type=checkbox").id = beer.name;
    clone.querySelector("label").for = beer.name;
    clone.querySelector(".beer_img img").alt = `Logo of the beer ${beer.name}`;
    clone
      .querySelector('input[type="checkbox"')
      .setAttribute("id", `${chosenBeer}-chosen`);

    document.querySelector(".beer_cards_wrapper").appendChild(clone);
  });

  setEventListeners(currentTaps, barInfo);
}
