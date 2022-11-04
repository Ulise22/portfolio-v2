import React from "react";
import './Contact.css';

const Contact = () => {
    return(
        <div className="container">
            <div className="contact__container">
                <div className="contact__data">
                    <h2 className="contact__data__subtitle">Contact Me</h2>
                    <p>You can contact with me leaving a message, or by my social media so we can start working together.</p>

                    <span href=""><i className="fas fa-phone" /> +54 9 11 6305-7597</span>
                    <span href=""><i className="fas fa-envelope" /> ulimontenegro23@gmail.com </span>
                    <span ><i className="fab fa-linkedin-in" /> Ulises Montenegro </span>
                </div>

                <form action="https://formspree.io/f/mbjbpplg" method="POST" className="contact__form">
                    <input type="text" name="name" placeholder="Enter your name!" className="contact__form__input" />
                    <input type="email" name="email" required placeholder="Enter your email!" className="contact__form__input" />
                    <input type="message" name="message" required placeholder="Enter your message!" className="contact__form__input contact__form__textarea" />
                    <button type="submit" className="contact__form__btn">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;