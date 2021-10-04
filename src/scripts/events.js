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

    });
}



export { addEvents };