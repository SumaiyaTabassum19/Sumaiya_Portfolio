import { useEffect, useState } from "react";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {

    const [theme, setTheme] = useState(() => {
        return (
            localStorage.getItem("theme") ||
            "light"
        );
    });


    useEffect(() => {

        document.documentElement.setAttribute(
            "data-theme",
            theme
        );

        localStorage.setItem(
            "theme",
            theme
        );

    }, [theme]);


    const toggleTheme = () => {

        setTheme((currentTheme) =>
            currentTheme === "light"
                ? "dark"
                : "light"
        );

    };


    return (
        <BrowserRouter>

            <Navbar
                theme={theme}
                toggleTheme={toggleTheme}
            />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<AboutPage />}
                />

                <Route
                    path="/skills"
                    element={<SkillsPage />}
                />

                <Route
                    path="/experience"
                    element={<ExperiencePage />}
                />

                <Route
                    path="/education"
                    element={<EducationPage />}
                />

                <Route
                    path="/contact"
                    element={<ContactPage />}
                />

                <Route
                    path="/projects"
                    element={<ProjectsPage />}
                />

            </Routes>

        </BrowserRouter>
    );
}


export default App;