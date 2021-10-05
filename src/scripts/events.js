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
        
    });
}

function getFormInput() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const project = document.getElementById("project").value;
    console.table(title, description, dueDate, priority, project);
}

export { addEvents };