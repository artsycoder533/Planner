function renderNavbar() {
	const header = createElement("header");
	const nav = createElementWithClass("nav", "nav");
	const navHeader = createElementWithClass("div", "nav__header");
	const navText = createTextElement("h1", "nav__text", "Planner");
	const navLinks = createElementWithClass("ul", "nav__links");
	const li = createElement("li");
	const navLink = createLink("a", "nav__link", "index.html", "Home");
	navHeader.appendChild(navText);
	nav.appendChild(navHeader);
	navLinks.appendChild(li);
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

function createLink(type, classList, src, text) {
	const element = document.createElement(type);
	element.classList.add(classList);
	element.src = src;
	element.textContent = `${text}`;
	return element;
}
function createElement(type) {
	const element = document.createElement(type);
	return element;
}
function createElementWithClass(type, classList) {
	const element = document.createElement(type);
	element.classList.add(classList);
	return element;
}

function createTextElement(type, classList, text) {
	const element = document.createElement(type);
	element.classList.add(classList);
	element.textContent = `${text}`;
	return element;
}

export { renderContainer, renderContent, renderNavbar, renderAside };