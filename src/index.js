import "./styles/style.scss";
import Pic from "./assets/pic.jpg";
import { renderContainer, renderContent, renderNavbar, renderAside } from "./scripts/createUI.js";


//window.addEventListener("DOMContentLoaded", renderNavbar());

document.body.appendChild(renderNavbar());
const container = renderContainer();
document.body.appendChild(container);

container.appendChild(renderAside());
container.appendChild(renderContent());
