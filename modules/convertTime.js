export function hourFromMs(time) {
    let minutes = Math.floor((time / (1000 * 60)) % 60),
      hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    if (hours <= 0 && minutes <= 0) {
      return "00:00";
    } else {
      return hours + ":" + minutes;
    }
  }