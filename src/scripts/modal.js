import { createElementWithClass } from "./createUI.js";

function renderModal() {
    const section = createElementWithClass("section", "modal");
    const div = createElementWithClass("div", "modal__container");
    section.appendChild(div);
    return section;
}

export { renderModal };