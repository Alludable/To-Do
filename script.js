//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const form = document.getElementById('form');

//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions

function addTodo(event) {
    //Prevents input from submitting
    event.preventDefault();
    //Null Input Field Check
    if (todoInput.value.length === 0) {
        {
        alert('Please enter a reminder')
        return false;
        }
        return true;
    }
    //Enter Reminder Prompt
    if (todoInput.value ==='' || todoInput.value == null) {
        messages.push('Please enter a reminder')
    }
    //ToDo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Completed Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Delete Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-thin fa-x"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append To List
    todoList.appendChild(todoDiv);
    //Clear ToDo Input Value
    todoInput.value = '';
}    

    function deleteCheck(e) {
      const item = e.target;
      //Delete Selected Item
      if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //Fall Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }    


    //Check Off Selected Item
    if(item.classList[0] === 'complete-btn') {
      const todo = item.parentElement;
      todo.classList.toggle('completed');
    }

}