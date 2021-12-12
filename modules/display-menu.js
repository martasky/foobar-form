import { hourFromMs } from "/modules/convertTime.js";
export function displayMenu(queue, timestamp) {
  const today = new Date(timestamp);
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  const closingDate = new Date(year, month, day, 22);
  const closingTime = closingDate.getTime();
  const remainingTime = closingTime - timestamp;
  const timeUntilClosure = hourFromMs(remainingTime);

  document.querySelector("#people_queue").textContent = queue;
  document.querySelector("#remaining_time").textContent = timeUntilClosure;
}
