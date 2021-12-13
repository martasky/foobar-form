import "/sass/style.scss";
import {prepareObjects} from "/modules/prepare-objects.js"
export function getJSONfiles() {
    let barInfo;
    let urlBeers = "https://foo-bar-project.herokuapp.com/beertypes";
    let urlBar = "https://foo-bar-project.herokuapp.com/";
    function loadJSON() {
      fetch(urlBeers)
        .then((response) => response.json())
        .then((jsonData) => {
          prepareObjects(jsonData, barInfo);
        });
    }
  
    fetch(urlBar)
      .then((response) => response.json())
      .then((jsonData) => {
        barInfo = jsonData;
        loadJSON();
      });
  }