import { createElementWithClass} from "./createUI.js";

function renderForm() {
    const form = createElementWithClass("form", "modal__form");
    const closeBtn = createElementWithClass("button", "form__closeBtn");
    const titleLabel = createFormElement("label", "for", "title", "form__label");
    const titleInput = createFormElement("input", "type", "text", "form__input");
    const descriptionLabel = createFormElement("label", "for", "description", "form__label");
    const descriptionInput = createFormElement("input", "type", "textarea", "form__description");
    const dueDateLabel = createFormElement("label", "for", "dueDate", "form__label");
    const dueDateInput = createFormElement("input", "type", "date", "form__input");
    const priorityLabel = createFormElement("label", "for", "priority", "form__label");
    const selectPriority = createFormElement("select", "name", "priority", "form__select");
    const lowPriority = createFormOption("option", "value", "normal", "Normal");
    const highPriority = createFormOption("option", "value", "high", "High");
    const projectLabel = createFormElement("label", "for", "project", "form__label");
    const selectProject = createFormElement("select", "name", "project", "form__select");
    const projectName = createFormOption("option", "value", "default", "Defeault");
    const createBtn = createElementWithClass("button", "form__createBtn");
    
    selectPriority.append(lowPriority, highPriority);
    selectProject.append(projectName);
    form.append(closeBtn, titleLabel, titleInput, descriptionLabel, descriptionInput, dueDateLabel, dueDateInput, priorityLabel, selectPriority, projectLabel, selectProject, createBtn);
    return form;
}

function createFormElement(type, attribute, attributeType, className) {
    const element = document.createElement(type);
    element.setAttribute(attribute, attributeType);
    element.classList.add(className);
    return element;
}


function createFormOption(type, attribute, attributeType, text) {
    const element = document.createElement(type);
    element.setAttribute(attribute, attributeType);
    //element.classList.add(className);
    element.textContent = text;
    return element;
}

export { renderForm };