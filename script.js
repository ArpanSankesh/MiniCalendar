const DateEl = document.querySelector(".date");
const DayEl = document.querySelector(".day");
const MonthEl = document.querySelector(".month");
const YearEl = document.querySelector(".year");

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const today = new Date();

DateEl.textContent = today.getDate();
DayEl.textContent = weekDays[today.getDay()];
MonthEl.textContent = allMonths[today.getMonth()];
YearEl.textContent = today.getFullYear();
