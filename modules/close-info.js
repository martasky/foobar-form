export function closeMoreInfo(){
    //close pop up
 document.querySelector(".beer_details").classList.remove("show");
 //hide .beers-wrapper
 document.querySelector(".beers-wrapper").classList.remove("hide");
}