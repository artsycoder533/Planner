import "./styles/style.scss";
import Pic from "./assets/pic.jpg";
import { renderContainer, renderNavbar, renderAside } from "./scripts/createUI.js";


//window.addEventListener("DOMContentLoaded", renderNavbar());

document.body.appendChild(renderNavbar());
const container = renderContainer();
document.body.appendChild(container);

container.appendChild(renderAside());
