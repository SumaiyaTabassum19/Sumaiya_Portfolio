import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import "./ThemeToggle.css";

function ThemeToggle() {

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {

        if (darkMode) {
            document.documentElement.setAttribute(
                "data-theme",
                "dark"
            );

            localStorage.setItem("theme", "dark");

        } else {

            document.documentElement.setAttribute(
                "data-theme",
                "light"
            );

            localStorage.setItem("theme", "light");
        }

    }, [darkMode]);

    return (
        <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
        >
            {darkMode ? <FiSun /> : <FiMoon />}
        </button>
    );
}

export default ThemeToggle;