import { motion } from "framer-motion";

import {
    FiMonitor,
    FiServer,
    FiDatabase,
    FiTool,
    FiCpu
} from "react-icons/fi";

import "./Skills.css";

function Skills() {

    const skillGroups = [
        {
            icon: <FiMonitor />,
            title: "Frontend",
            skills: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "React.js",
                "Bootstrap"
            ]
        },
        {
            icon: <FiServer />,
            title: "Backend",
            skills: [
                "Node.js",
                "Express.js",
                "PHP",
                "REST API"
            ]
        },
        {
            icon: <FiDatabase />,
            title: "Database",
            skills: [
                "MySQL",
            ]
        },
        // {
        //     icon: <FiCpu />,
        //     title: "Machine Learning",
        //     skills: [
        //         "Python",
        //         "Wav2Vec 2.0",
        //         "Random Forest",
        //         "Logistic Regression",
        //         "MFCC"
        //     ]
        // },
        {
            icon: <FiTool />,
            title: "Tools",
            skills: [
                "Git",
                "GitHub",
                "VS Code",
                "XAMPP"
            ]
        }
    ];

    return (
        <section
            id="skills"
            className="section skills-section"
        >

            <div className="container">

                <div className="section-title">

                    <span className="section-label">
                        MY SKILLS
                    </span>

                    <h2>
                        Technologies I{" "}
                        <span className="gradient-text">
                            work with
                        </span>
                    </h2>

                    <p>
                        Development, database, research and
                        technical skills.
                    </p>

                </div>


                <div className="skills-grid">

                    {skillGroups.map((group, index) => (

                        <motion.div
                            className="skill-card"
                            key={group.title}
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

                            <div className="skill-card-header">

                                <div className="skill-icon">
                                    {group.icon}
                                </div>

                                <h3>
                                    {group.title}
                                </h3>

                            </div>


                            <div className="skill-tags">

                                {group.skills.map((skill) => (

                                    <span
                                        className="skill-tag"
                                        key={skill}
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;