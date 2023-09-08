// JavaScript to display current day of the week and UTC time
const daysOfTheWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const currentDay = daysOfTheWeek[today.getUTCDay()];
const currentUTCTime = today.getTime();
// Get current time in hours and minutes format
const hours = today.getUTCHours();
const minutes = today.getUTCMinutes();

//Determine if its AM or PM
const amPm= hours >= 12 ? 'PM' : 'AM';

//Date Update
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = (`Current Day: ${currentDay}`);
document.querySelector('[data-testid = currentUTCTime]').textContent = (`Current UTC Time: ${hours}:${minutes} ${amPm} `);