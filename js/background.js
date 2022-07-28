// 랜덤 배경 이미지 화면에 보이기
const centerImage = document.querySelector("#center");
const loginSituation = document.querySelector("#login-form");
const logoutSituation = document.querySelector("#logout-form");
const images = [
    "0.jpg", "1.jpg", "2.jpg"
]
const loginImages = [
    "3.jpg", "4.jpg", "5.jpg"
]

const landomNumber = Math.floor(Math.random() * images.length)
const chosenImage = images[landomNumber];
const chosenLoginImage = loginImages[landomNumber];

// 이미지를 html에 적용하기 (background 이미지가 아닌 img요소로 추가)
// 만들어진 것은 html에는 없지만 존재함
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.classList.add("bgimage");
// document.body.appendChild(bgImage)
// const backgroundImage = document.querySelector("bgimage");

// background이미지로 추가하기
if(loginSituation.classList.contains("hidden")){
    // console.log(loginSituation.classList.contains("hidden"));
    centerImage.style.background = `url(img/${chosenLoginImage}) no-repeat top`;
    centerImage.style.backgroundSize = "cover";
}else{
    // console.log(loginSituation.classList.contains("hidden"));
    centerImage.style.background = `url(img/${chosenImage}) no-repeat top`;
    centerImage.style.backgroundSize = "cover";
}
