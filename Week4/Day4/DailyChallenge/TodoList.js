let taskIdCounter = 0; 
const tasks = JSON.parse(localStorage.getItem('tasks')) || []; 
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const listTasks = document.querySelector('.listTasks');

function addTask(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
   
    const newTask = {
        task_id: taskIdCounter++,
        text: taskText,
        done: false
    };
    
    tasks.push(newTask);

    taskInput.value = ''; 

    saveTasks(); 
    renderTasks(); 
}

function renderTasks() {
    listTasks.innerHTML = '';
    tasks.forEach((task) => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('taskItem');
        taskElement.setAttribute('data-task-id', task.task_id); 

        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.checked = task.done; 

        const taskLabel = document.createElement('label');
        taskLabel.textContent = task.text;

        const taskDelete = document.createElement('i');
        taskDelete.classList.add('fas', 'fa-times');
        taskDelete.onclick = () => deleteTask(task.task_id);

        if (task.done) {
            taskLabel.style.textDecoration = 'line-through';
            taskLabel.style.color = '#ff0000';
        }

        taskCheckbox.addEventListener('change', () => doneTask(task.task_id));

        taskElement.appendChild(taskCheckbox);
        taskElement.appendChild(taskLabel);
        taskElement.appendChild(taskDelete);
        listTasks.appendChild(taskElement);
    });
}

function deleteTask(task_id) {
    const taskIndex = tasks.findIndex(task => task.task_id === task_id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1); 
        saveTasks(); 
        renderTasks(); 
    }
}

function doneTask(task_id) {
    const task = tasks.find(task => task.task_id === task_id);
    if (task) {
        task.done = !task.done; 
        saveTasks(); 
        renderTasks(); 
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

taskForm.addEventListener('submit', addTask);

renderTasks();

