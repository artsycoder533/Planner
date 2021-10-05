import { createLink, createElement, createElementWithClass, createTextElement } from "./createUI.js";

function renderNavbar() {
	const header = createElement("header");
	const nav = createElementWithClass("nav", "nav");
	const navHeader = createElementWithClass("div", "nav__header");
	const navText = createTextElement("h1", "nav__text", "Planner");
    const navLinks = createElementWithClass("ul", "nav__links");
    const button = createTextElement("button", "nav__btn", "Add");
    button.setAttribute("id", "add");
	const li = createElement("li");
	const navLink = createLink("a", "nav__link", "index.html", "Home");
	navHeader.appendChild(navText);
	nav.appendChild(navHeader);
	navLinks.appendChild(button);
	li.appendChild(navLink);
	nav.appendChild(navLinks);
	header.appendChild(nav);
	return header;
}

function renderAside() {
	const section = createElementWithClass("section", "aside");
	const article = createElementWithClass("article", "aside__projects");
	const h2 = createTextElement("h2", "aside__label", "Projects");
	const ul = createElementWithClass("ul", "aside__list");
	article.append(h2, ul);
	section.appendChild(article);
	return section;
}

function renderContainer() {
	const section = createElementWithClass("section", "container");
	return section;
}

function renderContent() {
	const section = createElementWithClass("section", "content");
	return section;
}

function renderTodo(title) {
	const parent = document.querySelector(".aside__list");
	const element = createTextElement("li", "todo__item", title);
	const editBtn = createTextElement("button", "todo__editBtn", "Edit");
	const deleteBtn = createTextElement("button", "todo__deletebtn", "Delete");
	element.append(editBtn, deleteBtn);
	parent.appendChild(element);
	return parent;
}

export { renderContainer, renderContent, renderNavbar, renderAside, renderTodo };
