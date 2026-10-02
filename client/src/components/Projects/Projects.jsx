import { motion } from "framer-motion";
import {
    FiBookOpen,
    FiShoppingBag,
    FiUsers,
    FiGithub,
    FiArrowUpRight
} from "react-icons/fi";

import "./Projects.css";

function Projects() {

    const projects = [
        {
            title: "BookShelf",
            icon: <FiBookOpen />,
            description:
                "A web-based book management system that allows users to browse and manage books through a simple and organized interface.",
            technologies: [
                "PHP",
                "MySQL",
                "HTML",
                "CSS",
                "JavaScript"
            ],
            github:
                "https://github.com/SumaiyaTabassum19/BookShelf-"
        },

        {
            title: "Floral Shop",
            icon: <FiShoppingBag />,
            description:
                "A full-stack floral shop application where users can browse products, manage their cart, place orders, and interact with an admin dashboard.",
            technologies: [
                "React",
                "Node.js",
                "Express.js",
                "MySQL"
            ],
            github:
                "https://github.com/SumaiyaTabassum19/floral-shop"
        },

        {
            title: "Student Management System",
            icon: <FiUsers />,
            description:
                "A student management application with CRUD functionality for organizing student information through a simple and user-friendly interface.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "CRUD",
                "Local Storage"
            ],
            github:
                "https://github.com/SumaiyaTabassum19/StudentManagementSystem"
        }
    ];

    return (
        <section className="section projects-section">

            <div className="container">

                <div className="section-title">

                    <span className="section-label">
                        MY WORKS
                    </span>

                    <h2>
                        Projects I've{" "}
                        <span className="gradient-text">
                            built
                        </span>
                    </h2>

                    <p>
                        A collection of projects that showcase my
                        development skills and practical experience.
                    </p>

                </div>


                <div className="projects-grid">

                    {projects.map((project, index) => (

                        <motion.article
                            className="project-card"
                            key={project.title}

                            initial={{
                                opacity: 0,
                                y: 30
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            viewport={{
                                once: true,
                                amount: 0.2
                            }}

                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                        >

                            <div className="project-icon">
                                {project.icon}
                            </div>


                            <div className="project-content">

                                <h3>
                                    {project.title}
                                </h3>


                                <p>
                                    {project.description}
                                </p>


                                <div className="project-technologies">

                                    {project.technologies.map(
                                        (technology) => (
                                            <span key={technology}>
                                                {technology}
                                            </span>
                                        )
                                    )}

                                </div>


                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link"
                                >

                                    <FiGithub />

                                    View on GitHub

                                    <FiArrowUpRight />

                                </a>

                            </div>

                        </motion.article>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projects;