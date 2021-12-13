import "/sass/style.scss";
import { displayMenu } from "/modules/display-menu.js";
//we create the variable so that we can import it later on to update the order number and the orders being served
export let liveData;

export function updateQueue() {
  let urlBar = "https://foo-bar-project.herokuapp.com/";

  fetch(urlBar)
    .then((response) => response.json())
    .then((jsonData) => {
      let timestamp = jsonData.timestamp;
      let queue = jsonData.queue.length;
      liveData = jsonData;
      console.log("updating live data", liveData)
      displayMenu(queue, timestamp);
    });
}


