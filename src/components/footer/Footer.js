import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__social">
                <div className="footer__social__container">
                    <a href="https://www.linkedin.com/in/ulises-montenegro-295719221/" target="_Blank" className="footer__social__item">
                        <i className="fab fa-linkedin fa-2x" />
                    </a>
                    <a href="https://github.com/Ulise22" target="_Blank" className="footer__social__item">
                        <i className="fab fa-github fa-2x" />
                    </a>
                    <a href="mailto:ulimontenegro23@gmail.com" className="footer__social__item">
                        <i className="fas fa-envelope fa-2x" />
                    </a>
                </div>
            </div>

            <div className="footer__end">
                <h4 className="footer__end__phrase">"-When we are no longer able to change a situation, we are challenged to change ourselves.-"</h4>
            </div>
        </div>
    )
}

export default Footer;