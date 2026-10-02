import { motion } from "framer-motion";

import {
    FiAward,
    FiBook
} from "react-icons/fi";

import "./Education.css";


function Education() {

    const education = [
        {
            icon: <FiAward />,
            degree:
                "BSc in Computer Science & Engineering",
            institution:
                "International Islamic University Chittagong",
            period:
                "2020 – 2025",
            description:
                "Studied computer science fundamentals, software development, databases, networking, algorithms, and machine learning."
        },
        {
            icon: <FiBook />,
            degree:
                "Higher Secondary Certificate",
            institution:
                "Girls College Chattogram",
            period:
                "2018 – 2019",
            description:
                "Higher secondary education with a science background."
        },
        {
            icon: <FiBook />,
            degree:
                "Dakhil – Science",
            institution:
                "Baitush Sharaf Adarsha Kamil Madrasah",
            period:
                "2016 – 2017",
            description:
                "Secondary-level education with a science background."
        }
    ];


    return (
        <section
            id="education"
            className="section education-section"
        >

            <div className="container">

                <div className="section-title">

                    <span className="section-label">
                        EDUCATION
                    </span>

                    <h2>
                        Academic{" "}
                        <span className="gradient-text">
                            background
                        </span>
                    </h2>

                    <p>
                        My educational journey in computer science
                        and related studies.
                    </p>

                </div>


                <div className="education-grid">

                    {education.map(
                        (item, index) => (

                            <motion.article
                                className="education-card"
                                key={item.degree}

                                initial={{
                                    opacity: 0,
                                    y: 25
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
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

                                <div className="education-icon">
                                    {item.icon}
                                </div>


                                <span className="education-period">
                                    {item.period}
                                </span>


                                <h3>
                                    {item.degree}
                                </h3>


                                <h4>
                                    {item.institution}
                                </h4>


                                <p>
                                    {item.description}
                                </p>

                            </motion.article>

                        )
                    )}

                </div>

            </div>

        </section>
    );
}


export default Education;