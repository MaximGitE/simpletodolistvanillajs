let todoList = [];
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoListElement = document.getElementById('todo-list');

addTodoBtn.addEventListener('click', addTodo);

function addTodo() {
    const newTodo = todoInput.value.trim();
    if (newTodo !== '') {
        todoList.push(newTodo);
        todoInput.value = '';
        renderTodoList();
    }
}

function renderTodoList() {
    todoListElement.innerHTML = '';
    todoList.forEach((todo, index) => {
        const todoElement = document.createElement('li');
        todoElement.innerHTML = `
            <span>${todo}</span>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        todoListElement.appendChild(todoElement);
    });

    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', deleteTodo);
    });
}

function deleteTodo(e) {
    const index = e.target.dataset.index;
    todoList.splice(index, 1);
    renderTodoList();
}