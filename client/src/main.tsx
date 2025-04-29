import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set the title for the website
document.title = "Adventure Diary | Travel Blog";

const emojiFavicon = document.createElement("link");
emojiFavicon.rel = "icon";
emojiFavicon.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧭 </text></svg>";
document.head.appendChild(emojiFavicon);

// Add the Google Fonts
const googleFontsLink = document.createElement("link");
googleFontsLink.rel = "stylesheet";
googleFontsLink.href = "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;500;700&display=swap";
document.head.appendChild(googleFontsLink);

// Add Font Awesome
const fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
document.head.appendChild(fontAwesomeLink);

createRoot(document.getElementById("root")!).render(<App />);
