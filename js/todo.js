const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = []; // localStorage에 저장될 리스트를 배열에 넣기 위함

/** 리스트를 localStorage에 저장 */
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
  /* JSON.stringify()로 일단 배열 자체를 string으로 전환.
   * 원래 localStorage에 들어가는 게 string만 됨, 따라서 리스트 내용을 단순히 ","로 연결해놓음.
   * 근데 저렇게 해놓으면 배열의 속성을 잃어버리니까 원하는 결과가 아님.
   * 아직까지 뭔가 이해가 안 되는 게 있는데 다음 강의를 보면 풀릴지도? */
}

/** event 내에 target이라는 요소를 통해 무엇이 클릭됐는지 확인 가능,
 * 이후 parentElement로 상위 요소인 <li>를 가리킬 수 있음 */
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

/** newTodo 표시하는 함수 */
function paintToDo(newTodo) {
  const li = document.createElement("li"); // <li> 만들고
  const span = document.createElement("span"); // <span> 만들고
  span.innerText = newTodo; // 갖고 온 리스트를 span에 넣음.
  const button = document.createElement("button"); // <button> 만들고
  button.innerText = "❌"; // button에 x 넣음.
  button.addEventListener("click", deleteToDo); // click 이벤트 감지 시(버튼 누르면)
  li.appendChild(span); // <li><span></span></li>
  li.appendChild(button); // <li><button></button></li>
  toDoList.appendChild(li); // <ul id="todo-list"><li>...</li></ul>
}

function handleToDoSubment(event) {
  event.preventDefault(); // 기존 이벤트 막아버리고
  const newTodo = toDoInput.value; // newTodo에 리스트 하나 대입.
  toDoInput.value = ""; // 화면에 보이는 값을 비운 뒤
  toDos.push(newTodo); // array에 newTodo 하나 push함.
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubment); // submit 이벤트 감지 시
