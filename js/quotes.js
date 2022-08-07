// 랜덤 명언 화면에 보이기
// 명언 배열
const quotes = [
    {
        quote: "Look inside yourself, you are more than what you have become.",
        author: "The Lion King",
    },
    {
        quote: "Today's special mements are tomorrow's memories.",
        author: "Aladdin",
    },
    {
        quote: "You can't get what you want just by wishing for it.",
        author: "The princess and the Frog",
    },
    {
        quote: "Venture outside your comfort zone. The rewards are worth it.",
        author: "Tangled",
    },
    {
        quote: "Our fate lives within us, you only have to be brave enough to see it.",
        author: "Brave",
    },
    {
        quote: "The flower that blooms in adversity is the most rare and beautiful of all.",
        author: "Mulan",
    },
    {
        quote: "To love someone, you have to love yourself first.",
        author: "Beauty and the beast",
    },
    {
        quote: "Remember you're the one who can fill the world with sunshine.",
        author: "Snow white",
    },
    {
        quote: "If you really want to have something you can get it, but you have to try, try and try again.",
        author: "The Little Mermaid",
    },
    {
        quote: "Success is not given for free. You have to be able to do anything for your goals",
        author: "Coco",
    },
]

// HTML에서 element받아오기
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 랜덤 명언 추출
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 랜덤 명언 화면에 출력
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;