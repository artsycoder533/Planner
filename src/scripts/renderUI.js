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

export { renderContainer, renderContent, renderNavbar, renderAside };
