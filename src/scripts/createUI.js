
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

export { createLink, createElement, createElementWithClass, createTextElement };