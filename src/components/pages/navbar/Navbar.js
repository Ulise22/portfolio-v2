import React, {useState, useContext} from "react";
import spain from './../../../images/lang-images/spain.png';
import uk from './../../../images/lang-images/uk.jpg';
import './Navbar.css';
import { langContext } from "../../context/langContext";
import { FormattedMessage } from "react-intl";
import { Link } from "react-scroll";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const idioma = useContext(langContext);

    const toSpanish = () => idioma.changeLang("es-ES");

    const toEnglish = () => idioma.changeLang("en-UK");

    return(
        <div className="navbar">
            
            <div className="navbar__container">
                <div className="navbar__logo">
                    <h1 className="navbar__logo__um">UM</h1>
                </div>

                <div className="navbar__icon" onClick={() => setMenu(!menu)}>
                    <i className={menu ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"} />
                </div>

                <ul className={menu ? "navbar__menu active" : "navbar__menu"}>
                    <li className="navbar__menu__item">
                        <a href="/" className="navbar__menu__link">
                            <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}> 
                                <FormattedMessage
                                id="nav.home"
                                defaultMessage="Home" />
                            </Link>
                        </a>
                    </li>
                    <li className="navbar__menu__item">
                        <a href="/" className="navbar__menu__link">
                            <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>
                                <FormattedMessage 
                                id="nav.port"
                                defaultMessage="Portfolio" />
                            </Link>
                        </a>
                    </li>
                    <li className="navbar__menu__item">
                        <a href="/" className="navbar__menu__link">
                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                                <FormattedMessage
                                id="nav.contact"
                                defaultMessage="Contact" />
                            </Link>
                        </a>
                    </li>
                    <li className="navbar__menu__item" onClick={toSpanish}>
                        <img src={spain} alt="Spain" className="lang__flag" />
                    </li>
                    <li className="navbar__menu__item" onClick={toEnglish}>
                        <img src={uk} alt="United Kingdom" className="lang__flag" />
                    </li>                     

                </ul>
            </div>

        </div>
    )
}

export default Navbar;
