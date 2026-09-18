import { motion } from "framer-motion";
import {
    FiArrowRight,
    FiDownload,
    FiGithub,
    FiLinkedin
} from "react-icons/fi";

import "./Hero.css";

function Hero() {
    return (
        <section id="home" className="hero">

            {/* Background Effects */}
            <div className="hero-background">
                <div className="gradient-circle circle-one"></div>
                <div className="gradient-circle circle-two"></div>
            </div>

            <div className="container hero-container">

                {/* LEFT SIDE */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >

                    <p className="hero-greeting">
                        Hello, I'm
                    </p>

                    <h1>
                        <span>Sumaiya Tabassom</span>{" "}
                        <span className="gradient-text">
                            Sanzida
                        </span>
                    </h1>

                    <h2>
                        Full Stack Developer
                    </h2>

                    <p className="hero-description">
                        I build modern web applications and explore
                        machine learning solutions with a passion for
                        technology, research, and continuous learning.
                    </p>

                    <div className="hero-buttons">

                        <a
                            href="#projects"
                            className="primary-button"
                        >
                            View My Work
                            <FiArrowRight />
                        </a>

                        <a
                            href="/resume.pdf"
                            className="secondary-button"
                            download
                        >
                            Download CV
                            <FiDownload />
                        </a>

                    </div>

                    <div className="hero-socials">

                        <a
                            href="https://github.com/SumaiyaTabassum19"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FiGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/sumaiya-tabassom-sanzida-332ab0269/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>

                    </div>

                </motion.div>


                {/* RIGHT SIDE - PROFILE IMAGE */}
                <motion.div
    className="hero-image"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
>
    <div className="profile-wrapper">

        <div className="profile-decoration decoration-one"></div>
        <div className="profile-decoration decoration-two"></div>

        <div className="profile-card">

            <div className="profile-border">

                <img
                    src="/profile.jpg"
                    alt="Sumaiya Tabassom Sanzida"
                    className="profile-photo"
                />

            </div>

        </div>

    </div>
</motion.div>

            </div>

        </section>
    );
}

export default Hero;