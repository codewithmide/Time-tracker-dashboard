const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const firstHour = document.getElementById("first-hour");
const firstPW = document.getElementById("first-prev-week");

daily.addEventListener("click", () => {
    let firstDaily = "5hrs";
    let firstPrevWeek = "Last week - 7hrs" 
    firstHour.innerHTML = firstDaily;
    firstPW.innerHTML = firstPrevWeek;
});