import { TodoList } from './todo.js';

const myTodoList = new TodoList();

myTodoList.addTask('Learn ES6 Modules');
myTodoList.addTask('Write a blog post');
myTodoList.addTask('Build a Todo App');

myTodoList.markTaskComplete(0);
myTodoList.markTaskComplete(1); 

console.log(myTodoList.listTasks());
