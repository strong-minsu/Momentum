const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const secondes = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${secondes}`;
}
// 바로 실행
getClock()
// 첫 실행 이후 매초마다 실행
setInterval(getClock, 1000);
