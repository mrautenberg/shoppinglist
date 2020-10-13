// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Functions

// Add todo function
const addTodo = (e) => {
  // Prevent form from submitting
  e.preventDefault();

  // Todo div (which shall contain li, check and trash btn)
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // Create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  // add newTodo as a child of the todoDiv, a li within the div
  todoDiv.appendChild(newTodo);

  // Add todo to LS
  saveLocalTodos(todoInput.value);

  // Trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  // add trashButton as a child of the todoDiv, a button within the div
  todoDiv.appendChild(trashButton);

  // Append todo to list to list
  todoList.appendChild(todoDiv);

  // Clear Todo Input Value
  todoInput.value = '';
};

function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === 'trash-btn') {
    // e.target.parentElement.remove();
    const todo = item.parentElement;
    todo.classList.add('fall');
    //at the end
    removeLocalTodos(todo);
    todo.addEventListener('transitionend', (e) => {
      todo.remove();
    });
  }
}
// Save to local storage
const saveLocalTodos = (todo) => {
  // check -- if things already there
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Get todos function
const getTodos = () => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach(function (todo) {
    // Todo div (which shall contain li, check and trash btn)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    // add newTodo as a child of the todoDiv, a li within the div
    todoDiv.appendChild(newTodo);

    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    // add trashButton as a child of the todoDiv, a button within the div
    todoDiv.appendChild(trashButton);

    // Append todo to list to list
    todoList.appendChild(todoDiv);
  });
};

const removeLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  // what element to remove and how many
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
};

// ANIMATION!

// Event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
