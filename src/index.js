import "./styles/style.scss";
import Pic from "./assets/pic.jpg";

function component() {
    const element = document.createElement("div");
    const myImage = new Image();
    myImage.src = Pic;
    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "It worked!!!!!";
    element.appendChild(heading);
    element.appendChild(myImage);
    return element;
}

document.body.appendChild(component());
