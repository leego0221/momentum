const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // 배열 수정이 중간중간 필요해서 const에서 let으로 수정

/** 배열을 localStorage 내에 string 자체로 저장 */
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function checkToDo(event) {
  const contentSpan = event.target.parentElement.children[0];
  contentSpan.classList.toggle("check");
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove(); // 이를 실행해도 밑에서 li.id 접근 가능(화면에서만 지우는 것)
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // id값 비교 후 같으면 제외함
  saveToDos(); // save를 해줘야 localStorage에 반영이 됨
}
/* [].filter(filterFunc): 배열 내에 요소를 확인해서
 * return값이 true면 그대로 유지, false면 제외한 뒤 새로운 배열을 만드는 함수 */
/* arrow function: 익명 함수의 형태 중 하나 */

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const checkButton = document.createElement("button");
  checkButton.innerText = "✅";
  checkButton.id = "check-btn";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❎";
  deleteButton.id = "delete-btn";
  checkButton.addEventListener("click", checkToDo);
  deleteButton.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(checkButton);
  li.appendChild(deleteButton);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }; // delete 기능을 위해 id를 새로 추가함으로써 object로 수정
  toDos.push(newTodoObj); // object를 넣고
  paintToDo(newTodoObj); // object를 넣음
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // 리스트 불러옴

if (savedToDos !== null) {
  // 기존 작성된 내용이 있으면
  const parsedToDos = JSON.parse(savedToDos); // localStorage 내 string을 배열로 바꾼 뒤 저장
  toDos = parsedToDos; // 새로고침 후 덮어써짐 방지와 기존 데이터 유지를 위함
  parsedToDos.forEach(paintToDo); // 함수형 프로그래밍 그런 건가
}
