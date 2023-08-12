document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                ${taskText}
                <button class="deleteButton">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';

            const deleteButton = li.querySelector('.deleteButton');
            deleteButton.addEventListener('click', function () {
                li.remove();
            });
        }
    });
});
