import { Todos } from "./todos.js";
import { renderAside, renderTodo } from "./renderUI";

function addEvents() {
    const addBtn = document.getElementById("add");
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".form__closeBtn");
    const createTodo = document.querySelector(".form__createBtn");

    addBtn.addEventListener("click", () => {
        modal.classList.add("show");
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    createTodo.addEventListener("click", (e) => {
        e.preventDefault();
        getFormInput();
        modal.classList.remove("show");
    });
}

function getFormInput() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const project = document.getElementById("project").value;
   // console.table(title, description, dueDate, priority, project);
    const id = Math.random();
    const todo = new Todos(title, description, dueDate, priority, project, id);
    renderTodo(title);
    clearForm(title, description, dueDate, priority, project);
}

function clearForm(title, description, dueDate, priority,project, id) {
    document.getElementById("title").value = "";
    description = "";
    dueDate = "";
    priority = "";
    project = "";
    id = "";
}

export { addEvents };