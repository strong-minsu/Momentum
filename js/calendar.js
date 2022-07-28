const day = document.querySelector("h3#calendar");
const calendarYearMonth = document.querySelector("#calender-yearmonth");
const date = new Date();
const nowDate = date.getDate();
const nowMonth = date.getMonth() + 1
const nowYear = date.getFullYear();
// year은 2022 -> string사이즈 4  -> 즉 padStart 4부터 적용
day.innerText = 
`${String(nowYear).padStart(4, "0")}-${String(nowMonth).padStart(2, "0")}-${String(nowDate).padStart(2, "0")}`;

// 윤년 검사
// let leapYear;
// if(((nowYear%4===0) && (nowYear%100!=0))|| (nowYear%400===0)){
//   leapYear = true;
// }else{
//   leapYear = false;
// }
// console.log(`윤년인가요? = ${leapYear}`);

//  달력에 월-년 출력
calendarYearMonth.innerText = `${String(nowYear).padStart(4, "0")}-${String(nowMonth).padStart(2, "0")}`;