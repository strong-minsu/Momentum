// 랜덤 배경 이미지 화면에 보이기
const images = [
    "0.jpg", "1.jpg", "2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 이미지를 html에 적용하기
// 만들어진 것은 html에는 없지만 존재함
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// body에 추가
document.body.appendChild(bgImage)
const backgroundImage = document.querySelector("img");
backgroundImage.style.maxWidth = "100%";