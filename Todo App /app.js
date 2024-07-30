const list = document.querySelector(".list");
const input = document.querySelector('input')
let toDoItems = [
];
let todoInput = "";
function handleInput(event) {
  todoInput = event.target.value;
}
function addToDoItems() {
  if(!todoInput){
    return
  }
  const toDoItem = {
    id: Math.floor(Math.random()*1000),
    task: todoInput,
  };
  toDoItems.push(toDoItem);
  input.value =''
  todoInput=""
  renderToDoItems();
 
}
function deleteTodoItem(id) {
  toDoItems = toDoItems.filter((item) => item.id !== id);
  renderToDoItems();
}
function renderToDoItems() {
  list.innerHTML = toDoItems
    .map(
      (item) =>
        ` <li>
  ${item.task}
  <button class="todo__delete" onclick=" deleteTodoItem(${item.id})">x</button>
  </li> `
    )
    .join("");
}

renderToDoItems();
