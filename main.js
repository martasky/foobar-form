import "./sass/style.scss";
import {getJSONfiles} from "./modules/get-files.js"
import { updateQueue } from "./modules/update-queue.js";

window.addEventListener("DOMContentLoaded", start);

function start() {
  getJSONfiles();
  setInterval(updateQueue, 5000);
  updateQueue();
}






