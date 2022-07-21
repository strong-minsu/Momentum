// 사용자 이름 받기
//html에서 emlemt 가져오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting  = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const logoutForm = document.querySelector("#logout-form");

const quote_form = document.querySelector("#quote");
const weather = document.querySelector("#weather");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";

// todoForm, quote, weather hidden 클래스 추가 함수
// 로그아웃 했을 때 (로그아웃 submit) hidden클래스를 추가해서 요소 화면에서 제거 
function addHIDDEN(){
    todoForm.classList.add(HIDDEN_CLASSNAME);
    quote_form.classList.add(HIDDEN_CLASSNAME);
    weather.classList.add(HIDDEN_CLASSNAME);
}
// todoForm, quote, weather hidden 클래스 삭제
// 로그인 했을 때 (이름 입력 submit) hidden클래스를 삭제 요소 화면에 display
function remoceHIDDEM(){
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    quote_form.classList.remove(HIDDEN_CLASSNAME);
    weather.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    // event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    addHIDDEN();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

function onLogoutSubmit(event){
    // event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem("todos");
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    addHIDDEN();
}

// hello username을 출력하고 greeting의 class에 hiddenclassname를 지운다.
function paintGreetings(username){
    // greeting.innerText = "Hello " + username;와 같은 역할
    // ~스트링 ${변수}~ 로 사용하면(백틱기호) +와 ""없이 문장 완성 가능
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    remoceHIDDEM();
    loginForm.style.display = "none";
}

// 자바스크립트가 가장먼저 확인함
// localStorage => 작은 DB
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    //show the greeting
    paintGreetings(savedUsername);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.addEventListener("submit", onLogoutSubmit);
}