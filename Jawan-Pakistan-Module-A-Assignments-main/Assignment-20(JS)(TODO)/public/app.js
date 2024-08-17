document.addEventListener('DOMContentLoaded', function () {
    var inputElement = document.getElementById('todo-input');
    var addButton = document.getElementById('add-button');
    var todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function () {
        var taskText = inputElement.value;
        if (taskText.trim() !== '') {
            var li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;
            todoList.appendChild(li);
            inputElement.value = '';

            var editButton = li.querySelector('.edit-button');
            var deleteButton = li.querySelector('.delete-button');

            deleteButton.addEventListener('click', function () {
                todoList.removeChild(li);
            });

            editButton.addEventListener('click', function () {
                var newTaskText = prompt('Edit task:', taskText);
                if (newTaskText !== null) {
                    li.querySelector('span').textContent = newTaskText;
                }
            });
        }
    });
});
