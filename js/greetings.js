// 사용자 이름 받기
//html에서 emlemt 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting  = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// hello username을 출력하고 greeting의 class에 hiddenclassname를 지운다.
function paintGreetings(username){
    // greeting.innerText = "Hello " + username;와 같은 역할
    // ~스트링 ${변수}~ 로 사용하면(백틱기호) +와 ""없이 문장 완성 가능
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 자바스크립트가 가장먼저 확인함
// localStorage => 작은 DB
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    //sho the greeting
    paintGreetings(savedUsername);
    
}