function addEvents() {
    const addBtn = document.getElementById("add");
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".form__closeBtn");

    addBtn.addEventListener("click", () => {
        modal.classList.add("show");
    });

    // modal.addEventListener("click", () => {
    //     modal.classList.remove("show");
    // });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });
}

export { addEvents };