import "./styles/style.scss";
import Pic from "./assets/pic.jpg";
import { renderNavbar, renderAside } from "./scripts/createUI.js";


//window.addEventListener("DOMContentLoaded", renderNavbar());

document.body.appendChild(renderNavbar());
document.body.appendChild(renderAside());
