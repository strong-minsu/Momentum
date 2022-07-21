// 랜덤 배경 이미지 화면에 보이기
const centerImage = document.querySelector("#center");
const images = [
    "0.jpg", "1.jpg", "2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 이미지를 html에 적용하기
// 만들어진 것은 html에는 없지만 존재함
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.classList.add("bgimage");

// body에 추가
centerImage.style.background = `url(img/${chosenImage}) no-repeat top`;
centerImage.style.backgroundSize = "cover";
// document.body.appendChild(bgImage)
// const backgroundImage = document.querySelector("bgimage");