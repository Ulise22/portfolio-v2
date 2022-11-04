import React, {useState} from "react";
import spain from './../../images/lang-images/spain.png';
import uk from './../../images/lang-images/uk.jpg';
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [openLang, setOpenLang] = useState(false);


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
                        <a href="/" className="navbar__menu__link">Home</a>
                    </li>
                    <li className="navbar__menu__item">
                        <a href="/" className="navbar__menu__link">Portfolio</a>
                    </li>
                    <li className="navbar__menu__item">
                        <a href="/" className="navbar__menu__link">Contact</a>
                    </li>
                    <li className="navbar__menu__item">
                        <a href="/" className="navbar__menu__link">About</a>
                    </li>
                    <li className="navbar__menu__item">
                        <img src={spain} alt="spain" className="lang__flag" />
                    </li>
                    <li className="navbar__menu__item">
                        <img src={uk} alt="United Kingdom" className="lang__flag" />
                    </li>                     

                </ul>
            </div>

        </div>
    )
}

export default Navbar;
