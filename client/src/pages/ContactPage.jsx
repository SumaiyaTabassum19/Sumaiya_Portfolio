import { useState } from "react";

import {
    FiMail,
    FiMapPin,
    FiPhone,
    FiSend
} from "react-icons/fi";

import {
    sendContactMessage
} from "../services/contactService";

import "./ContactPage.css";


function ContactPage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });


    const [status, setStatus] = useState({
        type: "",
        message: ""
    });


    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {

        const {
            name,
            value
        } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        setStatus({
            type: "",
            message: ""
        });

        setLoading(true);


        try {

            const response =
                await sendContactMessage(formData);


            setStatus({
                type: "success",
                message: response.message
            });


            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

        }

        catch (error) {

            setStatus({
                type: "error",
                message:
                    error.message ||
                    "Something went wrong. Please try again."
            });

        }

        finally {

            setLoading(false);

        }

    };


    return (
        <main className="section contact-page">

            <div className="container">

                <div className="section-title">

                    <span className="section-label">
                        GET IN TOUCH
                    </span>

                    <h1>
                        Contact Me
                    </h1>

                    <p>
                        Have a project, opportunity, or question?
                        Feel free to send me a message.
                    </p>

                </div>


                <div className="contact-grid">

                    <div className="contact-info">

                        <h2>
                            Let's Talk
                        </h2>

                        <p>
                            I'm always interested in discussing
                            new opportunities, projects,
                            and technology.
                        </p>


                        <div className="contact-info-list">

                            <div className="contact-info-item">

                                <div className="contact-icon">
                                    <FiMail />
                                </div>

                                <div>
                                    <span>Email</span>

                                    <a
                                        href="mailto:tabassumsts556@gmail.com"
                                    >
                                        tabassumsts556@gmail.com
                                    </a>
                                </div>

                            </div>


                            <div className="contact-info-item">

                                <div className="contact-icon">
                                    <FiPhone />
                                </div>

                                <div>
                                    <span>Phone</span>

                                    <p>
                                        +880 16144 15541
                                    </p>
                                </div>

                            </div>


                            <div className="contact-info-item">

                                <div className="contact-icon">
                                    <FiMapPin />
                                </div>

                                <div>
                                    <span>Location</span>

                                    <p>
                                        Chattogram, Bangladesh
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="form-row">

                            <div className="form-group">

                                <label htmlFor="name">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label htmlFor="email">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email"
                                    required
                                />

                            </div>

                        </div>


                        <div className="form-group">

                            <label htmlFor="subject">
                                Subject
                            </label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                            />

                        </div>


                        <div className="form-group">

                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                rows="7"
                                required
                            />

                        </div>


                        {status.message && (
                            <div
                                className={`form-status ${status.type}`}
                            >
                                {status.message}
                            </div>
                        )}


                        <button
                            type="submit"
                            className="contact-submit"
                            disabled={loading}
                        >

                            {loading ? (
                                "Sending..."
                            ) : (
                                <>
                                    Send Message
                                    <FiSend />
                                </>
                            )}

                        </button>

                    </form>

                </div>

            </div>

        </main>
    );
}


export default ContactPage;