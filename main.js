const userInput = document.querySelector('#input-data')
const submitBtn = document.querySelector('#btn-submit')
const todosList = document.querySelector('#todos-list')
submitBtn.addEventListener('click', addTodo)
todosList.addEventListener('click', deleteTodo)

function addTodo(e) {
    e.preventDefault()
    const divTodo = document.createElement('div')
    const todos = document.createElement('span')
    const btnDone = document.createElement('button')
    const btnDelete = document.createElement('button')
    
    divTodo.appendChild(todos)
    divTodo.appendChild(btnDone)
    divTodo.appendChild(btnDelete)

    divTodo.classList.add('todoList')

    todos.textContent = userInput.value

    btnDone.innerHTML = '<i class="fas fa-check"></i>';
    btnDelete.innerHTML = '<i class="fas fa-trash-alt"></i>'

    btnDelete.classList.add('delete')
    btnDone.classList.add('done')

    saveData(userInput.value)

    userInput.value = '';
    todosList.appendChild(divTodo)
}

function deleteTodo(e) {
    const todo = e.target;
    if (todo.classList[0] === "delete") {
        const todoDel = todo.parentElement;
        todoDel.remove();
    }
    if (todo.classList[0] === "done") {
        const todoArchive = todo.parentElement;
        todoArchive.classList.toggle('done');
    }
}

function saveData(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}