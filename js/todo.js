const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODO_KEY = "todos";

// toDos가 항상 비어있는 상태로 시작하면 localstorege가 매번 초기화 된다.
let toDos = [];

// localStorage에 todolist element save
function saveToDo(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

// to do element delete
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}

// to do element paint
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "✗";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button); 
    toDoList.appendChild(li);
}

// to do element submit
function handleToDoSubmit(event){
    event.preventDefault();
    // toDoInput의 value를 복사함 newTodo로
    const newTodo = toDoInput.value + " ";
    toDoInput.value = "";

    // todo element 작성시 toDos array에 object로 push
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


// function displayToDoList(item){
//     console.log(item);
// }
// is same => ((item)=> console.log("this is the turn of ", item)) 

const saveToDos = localStorage.getItem(TODO_KEY);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    // 각각의 배열 요소에 대해 paintToDo 실행
    parsedToDos.forEach(paintToDo);
}

