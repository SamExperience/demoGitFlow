import "./style.css";
import heroImg from "./assets/hero.png";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML =
  `<h1>v.0.0.1</h1><br/> <p>just a text for qwerty</p>
`;

setupCounter(document.querySelector("#counter"));
