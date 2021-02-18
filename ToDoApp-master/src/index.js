import './styles.css';

import {
    Todo,
    TodoList
} from './classes/index.js'
import {
    crearTodoHtml,
    pendientes
} from './js/componentes.js'

export const todoList = new TodoList();

todoList.todos.forEach(todo => {
    crearTodoHtml(todo);
});

pendientes(todoList.cantidadPendientes())

// console.log('todos',todoList.todos);