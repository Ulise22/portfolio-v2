import React from "react";
import logo from './../../../images/logo.png';
import resume from './Ulises Montenegro-resume.pdf';
import './Home.css';
import { FormattedMessage } from "react-intl";

const Home = () => {
    return(
        <div name="home" className="home">
            <div className="home__container container">
                <div className="home__info">
                    <h1 className="home__info__title">Ulises Montenegro</h1>
                    <h3 className="home__info__subtitle">
                        <FormattedMessage 
                        id="home.frontend"
                        defaultMessage="Frontend Developer" />
                    </h3>
                    <div className="home__info__icons">
                        <a href="https://github.com/Ulise22" target="_Blank" className="home__info__icons__item"><i className="fab fa-github fa-3x" /> </a>
                        <a href="https://www.linkedin.com/in/ulisesmontenegro/" target="_Blank" className="home__info__icons__item"><i className="fab fa-linkedin fa-3x" /> </a>
                        <a href="mailto:ulimontenegro23@gmail.com" className="home__info__icons__item"><i className="fas fa-envelope fa-3x" /> </a>
                        <a href={resume} download="Ulises Montenegro" className="home__info__btn">
                            <FormattedMessage
                            id="home.download"
                            defaultMessage="Download Resume" />
                        </a>
                    </div>
                </div>

                <div className="home__photo">
                    <img src={logo} alt="Ulises Montenegro" className="home__photo__image" />
                </div>
            </div>
        </div>
    )
}

export default Home;