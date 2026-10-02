import { useState } from "react";

import {
    Link,
    useLocation
} from "react-router-dom";

import {
    FiMenu,
    FiX,
    FiSun,
    FiMoon
} from "react-icons/fi";

import "./Navbar.css";


function Navbar({ theme, toggleTheme }) {

    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();


    const navLinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Skills",
            path: "/skills"
        },
        {
            name: "Experience",
            path: "/experience"
        },
        {
            name: "Education",
            path: "/education"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ];


    const handleClick = () => {

        setMenuOpen(false);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };


    return (
        <header className="navbar">

            <div className="container navbar-container">

                <Link
                    to="/"
                    className="navbar-logo"
                    onClick={handleClick}
                >
                    STS<span>.</span>
                </Link>


                <nav className="navbar-links">

                    {navLinks.map((link) => (

                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={handleClick}
                            className={
                                location.pathname === link.path
                                    ? "active"
                                    : ""
                            }
                        >
                            {link.name}
                        </Link>

                    ))}

                </nav>


                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    title="Toggle theme"
                >
                    {theme === "light"
                        ? <FiMoon />
                        : <FiSun />
                    }
                </button>


                <button
                    className="mobile-menu-button"
                    onClick={() =>
                        setMenuOpen(!menuOpen)
                    }
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen
                        ? <FiX />
                        : <FiMenu />
                    }
                </button>

            </div>


            <div
                className={`mobile-menu ${
                    menuOpen
                        ? "mobile-menu-open"
                        : ""
                }`}
            >

                {navLinks.map((link) => (

                    <Link
                        key={link.name}
                        to={link.path}
                        onClick={handleClick}
                        className={
                            location.pathname === link.path
                                ? "active"
                                : ""
                        }
                    >
                        {link.name}
                    </Link>

                ))}


                <button
                    className="mobile-theme-button"
                    onClick={toggleTheme}
                >
                    {theme === "light" ? (
                        <>
                            <FiMoon />
                            Dark Mode
                        </>
                    ) : (
                        <>
                            <FiSun />
                            Light Mode
                        </>
                    )}
                </button>

            </div>

        </header>
    );
}


export default Navbar;