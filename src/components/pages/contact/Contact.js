import React from "react";
import { FormattedMessage } from "react-intl";
import './Contact.css';

const Contact = () => {
    return(
        <div name="contact" className="container">
            <div className="contact__container">
                <div className="contact__data">
                    <h2 className="contact__data__subtitle">
                        <FormattedMessage 
                        id="contact.title"
                        defaultMessage="Contact Me" />
                    </h2>
                    <p>
                        <FormattedMessage
                        id="contact.desc"
                        defaultMessage="contact me" />
                    </p>

                    <span href=""><i className="fas fa-phone" /> +54 9 11 6305-7597</span>
                    <span href=""><i className="fas fa-envelope" /> ulimontenegro23@gmail.com </span>
                    <span ><i className="fab fa-linkedin-in" /> Ulises Montenegro </span>
                </div>

                <form action="https://formspree.io/f/mbjbpplg" method="POST" className="contact__form">
                    <input type="text" name="name" placeholder="Name" className="contact__form__input" />
                    <input type="email" name="email" required placeholder="Email" className="contact__form__input" />
                    <input type="message" name="message" required placeholder="Message" className="contact__form__input contact__form__textarea" />
                    <button type="submit" className="contact__form__btn">
                        <FormattedMessage 
                        id="contact.btn"
                        defaultMessage="Send" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;