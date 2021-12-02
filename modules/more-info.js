import { closeMoreInfo } from "./close-info";

export function moreInfo(id, beer) {
  console.log(beer.name);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  //display pop up
  document.querySelector(".beer_details").classList.add("show");
  //hide .beers-wrapper
  document.querySelector(".beers-wrapper").classList.add("hide");

  //add event listener
  document
    .querySelector(".back_circle")
    .addEventListener("click", closeMoreInfo);

  //populate pop up
  document.querySelector(".beer_header img").src = beer.label;
  document.querySelector(
    ".beer_header img"
  ).alt = `Logo of the beer ${beer.name}`;
  document.querySelector(".beer_header div h1").innerHTML = beer.name;
  document.querySelector(".beer_type").innerHTML = beer.category;
  document.querySelector(".alcohol").innerHTML = beer.alc;
  document.querySelector(".overall").textContent =
    beer.description.overallImpression;
  document.querySelector("#aroma p").textContent = beer.description.aroma;
  document.querySelector("#appearance p").textContent =
    beer.description.appearance;
  document.querySelector("#flavour p").textContent = beer.description.flavor;
  document.querySelector("#mouthfeel p").textContent =
    beer.description.mouthfeel;
}
