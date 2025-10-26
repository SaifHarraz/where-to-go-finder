import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Set initial direction based on stored language preference
const storedLanguage = localStorage.getItem('language') || 'ar';
document.documentElement.dir = storedLanguage === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = storedLanguage;

createRoot(document.getElementById("root")!).render(<App />);
