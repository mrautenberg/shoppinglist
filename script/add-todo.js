// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

// Functions
function addTodo(e) {
  e.preventDefault();

  // Generate Todo (which shall contain li, check, trash btn)
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Generate li
  const newTodo = document.createElement("li");
  // assign the new todo the value of the input
  newTodo.innerText = todoInput.value;
  // add classlist with styling
  newTodo.classList.add("todo-item");
  // add new todo as a child of the todo div, a new li within the todo div
  todoDiv.appendChild(newTodo);

  // Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  // add trashbutton to todo div
  todoDiv.appendChild(trashButton);

  // Append Todo To List
  todoList.appendChild(todoDiv);

  // Clear Todo Input Value
  todoInput.value = "";
}

// Delete and Check Todo
function deleteTodo(e) {
  // Create item of the event object, i.e. what we click on
  const item = e.target;

  // Delete todo
  if (item.classList[0] === "trash-btn") {
    // We remove the todo by removing the parent element of the btn
    const todo = item.parentElement;

    // Animation
    todo.remove();
  }
}
