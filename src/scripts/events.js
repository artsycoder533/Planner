function addEvents() {
    const addBtn = document.getElementById("add");
    const modal = document.querySelector(".modal");

    addBtn.addEventListener("click", () => {
        modal.classList.add("show");
    });

    modal.addEventListener("click", () => {
        modal.classList.remove("show");
    })
}

function openModal() {
    
}

export { addEvents };