export class TodoList {
    constructor() {
        this.tasks = []; 
    }

    addTask(task) {
        this.tasks.push({ task, completed: false });
    }

    markTaskComplete(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].completed = true;
        } else {
            console.log('Invalid task index');
        }
    }

    listTasks() {
        return this.tasks.map((task, index) => {
            return `${index + 1}. ${task.task} - ${task.completed ? 'Completed' : 'Incomplete'}`;
        }).join('\n');
    }
}
