const daily = document.getElementById("daily");
const firstHour = document.getElementById("first-hour");
const firstPW = document.getElementById("first-prev-week");
const secondHour = document.getElementById("second-hour");
const secondPW = document.getElementById("second-prev-week");
const thirdHour = document.getElementById("third-hour");
const thirdPW = document.getElementById("third-prev-week");
const fourthHour = document.getElementById("fourth-hour");
const fourthPW = document.getElementById("fourth-prev-week");
const fifthHour = document.getElementById("fifth-hour");
const fifthPW = document.getElementById("fifth-prev-week");
const sixthHour = document.getElementById("sixth-hour");
const sixthPW = document.getElementById("sixth-prev-week");


daily.addEventListener("click", () => {

    let firstDaily = "5hrs";
    let firstPrevWeek = "Last week - 7hrs";

    let secondDaily = "1hr"
    let secondPrevWeek = "Last week - 2hrs";

    let thirdDaily = "0hr"
    let thirdPrevWeek = "Last week - 1hr";

    let fourthDaily = "1hr"
    let fourthPrevWeek = "Last week - 1hr";

    let fifthDaily = "1hr"
    let fifthPrevWeek = "Last week - 3hrs";

    let sixthDaily = "0hr"
    let sixthPrevWeek = "Last week - 1hr";

    firstHour.innerHTML = firstDaily;
    firstPW.innerHTML = firstPrevWeek;

    secondHour.innerHTML = secondDaily;
    secondPW.innerHTML = secondPrevWeek;

    thirdHour.innerHTML = thirdDaily;
    thirdPW.innerHTML = thirdPrevWeek;

    fourthHour.innerHTML = fourthDaily;
    fourthPW.innerHTML = fourthPrevWeek;

    fifthHour.innerHTML = fifthDaily;
    fifthPW.innerHTML = fifthPrevWeek;

    sixthHour.innerHTML = sixthDaily;
    sixthPW.innerHTML = sixthPrevWeek;
});


const weekly = document.getElementById("weekly");

weekly.addEventListener("click", () => {

    let firstWeekly = "32hrs";
    let firstPrevWeek = "Last week - 36hrs";

    let secondWeekly = "10hrs"
    let secondPrevWeek = "Last week - 8hrs";

    let thirdWeekly = "4hrs"
    let thirdPrevWeek = "Last week - 7hrs";

    let fourthWeekly = "4hrs"
    let fourthPrevWeek = "Last week - 5hrs";

    let fifthWeekly = "5hrs"
    let fifthPrevWeek = "Last week - 10hrs";

    let sixthWeekly = "2hrs"
    let sixthPrevWeek = "Last week - 2hrs";

    firstHour.innerHTML = firstWeekly;
    firstPW.innerHTML = firstPrevWeek;

    secondHour.innerHTML = secondWeekly;
    secondPW.innerHTML = secondPrevWeek;

    thirdHour.innerHTML = thirdWeekly;
    thirdPW.innerHTML = thirdPrevWeek;

    fourthHour.innerHTML = fourthWeekly;
    fourthPW.innerHTML = fourthPrevWeek;

    fifthHour.innerHTML = fifthWeekly;
    fifthPW.innerHTML = fifthPrevWeek;

    sixthHour.innerHTML = sixthWeekly;
    sixthPW.innerHTML = sixthPrevWeek;
});


const monthly = document.getElementById("monthly");

monthly.addEventListener("click", () => {

    let firstmonthly = "103hrs";
    let firstPrevWeek = "Last week - 128hrs";

    let secondmonthly = "23hrs"
    let secondPrevWeek = "Last week - 29hrs";

    let thirdmonthly = "13hrs"
    let thirdPrevWeek = "Last week - 19hrs";

    let fourthmonthly = "11hrs"
    let fourthPrevWeek = "Last week - 18hrs";

    let fifthmonthly = "21hrs"
    let fifthPrevWeek = "Last week - 23hrs";

    let sixthmonthly = "7hrs"
    let sixthPrevWeek = "Last week - 11hrs";

    firstHour.innerHTML = firstmonthly;
    firstPW.innerHTML = firstPrevWeek;

    secondHour.innerHTML = secondmonthly;
    secondPW.innerHTML = secondPrevWeek;

    thirdHour.innerHTML = thirdmonthly;
    thirdPW.innerHTML = thirdPrevWeek;

    fourthHour.innerHTML = fourthmonthly;
    fourthPW.innerHTML = fourthPrevWeek;

    fifthHour.innerHTML = fifthmonthly;
    fifthPW.innerHTML = fifthPrevWeek;

    sixthHour.innerHTML = sixthmonthly;
    sixthPW.innerHTML = sixthPrevWeek;
});