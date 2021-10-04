import { createElementWithClass } from "./createUI.js";
import { renderForm } from "./form.js";

function renderModal() {
    const section = createElementWithClass("section", "modal");
    const div = createElementWithClass("div", "modal__container");
    const form = renderForm();
    div.appendChild(form);
    section.appendChild(div);
    return section;
}

export { renderModal };