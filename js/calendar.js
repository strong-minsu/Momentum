let today = new Date(); //현재의 날짜

todayYear = today.getFullYear();

todayMonth = today.getMonth() + 1; // 월은 0부터 시작하기때문에 + 1을 해줘야지 해당 달의 월이 나온다.
		
today_yearMonth = todayYear + " - " + todayMonth;
	
document.getElementById("yearMonth").innerHTML= today_yearMonth;

let firstDate = new Date(today.getFullYear(), today.getMonth(),1);
let lastDate = new Date(today.getFullYear(), today.getMonth()+1,0);
let day = firstDate.getDay();
let calendar = document.getElementById("calendar_table");
let week = Math.ceil(lastDate.getDate()/7) + 1;
function buildCalendar(){
			let leftDays = 7; // setDays 와 반비례 
			let setDays = 1;// leftDays 와 반비례 
			for(i = 1; i < week; i++){
				let row = calendar.insertRow();
				while(day != 0){
					row.insertCell().innerHTML = "";
					day -= 1; 
					leftDays -= 1;
				} // 1주
				let nextMonthDate = 1;
				while(leftDays != 0){
					if(setDays > lastDate.getDate()){
						row.insertCell().innerHTML = nextMonthDate;
						leftDays -= 1;
						nextMonthDate += 1;
					}else{
						row.insertCell().innerHTML = setDays;
						setDays +=1;
						leftDays -= 1;
					}
				}
				leftDays = 7;
			}
}
buildCalendar();