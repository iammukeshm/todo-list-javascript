//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".todo-filter");

//Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", buttonClick);
todoFilter.addEventListener("click", filterTodo);

//Functions
function addTodo(event) {
  //Prevent Form from submitting
  event.preventDefault();
  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //List
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Completed Button
  const CompletedButton = document.createElement("button");
  CompletedButton.innerHTML = '<i class ="fas fa-check"></i>';
  CompletedButton.classList.add("completed-btn");
  todoDiv.appendChild(CompletedButton);

  //Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class ="fas fa-trash"></i>';
  deleteButton.classList.add("trash-btn");
  todoDiv.appendChild(deleteButton);

  //Append
  todoList.appendChild(todoDiv);

  //Clear Text
  todoInput.value = "";
}
function buttonClick(e) {
  const thisItem = e.target;
  //Delete
  if (thisItem.classList[0] == "trash-btn") {
    const thisTodo = thisItem.parentElement;
    thisTodo.classList.add("fall-before-delete");
    thisTodo.addEventListener("transitionend", function () {
      thisTodo.remove();
    });
    //thisTodo.remove();
  }
  //Completed
  if (thisItem.classList[0] == "completed-btn") {
    const thisTodo = thisItem.parentElement;
    thisTodo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "pending":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
