document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'task-item';
            
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            listItem.appendChild(taskSpan);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });
            listItem.appendChild(deleteBtn);

            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
