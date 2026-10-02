import { motion } from "framer-motion";

import {
    FiBriefcase,
    FiBookOpen
} from "react-icons/fi";

import "./Experience.css";


function Experience() {

    const experiences = [
        {
            year: "Academic",
            icon: <FiBookOpen />,
            title: "Teaching Assistant",
            organization:
                "International Islamic University Chittagong",
            description:
                "Supported students with academic activities, learning guidance, and course-related tasks."
        },
        {
            year: "Professional",
            icon: <FiBriefcase />,
            title: "Graphic Design",
            organization:
                "Professional Experience",
            description:
                "Worked on creative digital materials, visual communication, and design-related tasks."
        }
    ];


    return (
        <section
            id="experience"
            className="section experience-section"
        >

            <div className="container">

                <div className="section-title">

                    <span className="section-label">
                        EXPERIENCE
                    </span>

                    <h2>
                        My professional{" "}
                        <span className="gradient-text">
                            journey
                        </span>
                    </h2>

                    <p>
                        Experiences that helped develop my
                        technical and professional skills.
                    </p>

                </div>


                <div className="timeline">

                    {experiences.map(
                        (item, index) => (

                            <motion.div
                                className="timeline-item"
                                key={item.title}

                                initial={{
                                    opacity: 0,
                                    x: -25
                                }}

                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}

                                viewport={{
                                    once: true
                                }}

                                transition={{
                                    duration: 0.5,
                                    delay:
                                        index * 0.1
                                }}
                            >

                                <div className="timeline-dot">
                                    {item.icon}
                                </div>


                                <div className="timeline-content">

                                    <span className="timeline-year">
                                        {item.year}
                                    </span>

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <h4>
                                        {item.organization}
                                    </h4>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>

                            </motion.div>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}

export default Experience;