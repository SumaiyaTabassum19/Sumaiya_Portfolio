import { motion } from "framer-motion";

import {
    FiCode,
    FiDatabase,
    FiBookOpen,
    FiLayers
} from "react-icons/fi";

import "./About.css";

function About() {

    const highlights = [
        {
            icon: <FiCode />,
            title: "Web Development",
            text: "Building responsive and user-friendly web applications."
        },
        {
            icon: <FiDatabase />,
            title: "Backend & Database",
            text: "Working with Node.js, PHP, MySQL and REST APIs."
        },
        {
            icon: <FiBookOpen />,
            title: "Research",
            text: "Exploring machine learning and speech-related research."
        },
        {
            icon: <FiLayers />,
            title: "Continuous Learning",
            text: "Always improving technical and problem-solving skills."
        }
    ];

    return (
        <section
            id="about"
            className="section about-section"
        >

            <div className="container">

                <div className="section-title">

                    <span className="section-label">
                        ABOUT ME
                    </span>

                    <h2>
                        Turning ideas into{" "}
                        <span className="gradient-text">
                            meaningful solutions
                        </span>
                    </h2>

                    <p>
                        A little more about my background and interests.
                    </p>

                </div>


                <div className="about-grid">

                    <motion.div
                        className="about-content"
                        initial={{
                            opacity: 0,
                            x: -30
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            duration: 0.6
                        }}
                    >

                        <p className="about-intro">
                            I am a Computer Science graduate with
                            an interest in software development,
                            web technologies, machine learning,
                            and research.
                        </p>

                        <p>
                            I enjoy developing practical solutions
                            that combine clean design, efficient
                            programming, and a good user experience.
                        </p>

                        <p>
                            I value communication, teamwork,
                            continuous learning, and adapting
                            to new technologies.
                        </p>


                        <div className="about-stats">

                            <div className="stat-item">
                                <strong>5+</strong>
                                <span>Years Teaching</span>
                            </div>

                            <div className="stat-item">
                                <strong>CSE</strong>
                                <span>Graduate</span>
                            </div>

                            <div className="stat-item">
                                <strong>ML</strong>
                                <span>Research</span>
                            </div>

                        </div>

                    </motion.div>


                    <div className="about-highlights">

                        {highlights.map((item, index) => (

                            <motion.div
                                className="highlight-card"
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.08
                                }}
                            >

                                <div className="highlight-icon">
                                    {item.icon}
                                </div>

                                <div>
                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.text}
                                    </p>
                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;