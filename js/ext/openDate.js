import config from "../config.js";

// Get local time
let date = new Date().toLocaleString("en-us", {
  timeZone: config.timeZone,
});
date = new Date(date);
const localDate = Number(`${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`);

// Script start here
if (config.openDate != false) {
  date = new Date(config.openDate);
  const openDate = Number(`${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`);

  if (localDate > openDate) {
    location.href = "../../pages/late.html";
  } else if (localDate < openDate) {
    location.href = "../../pages/soon.html";
  }
}
