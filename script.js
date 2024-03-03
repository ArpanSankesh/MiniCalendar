const Date = document.querySelector('.date')
const Day = document.querySelector('.day')
const Month = document.querySelector('.Month')
const Year = document.querySelector('.Year')

const weekDays = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]

const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const today = new Date();

Date.innerHTML = today.getDate();
Day.innerHTML = weekDays[today.getDay()];
Month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();

