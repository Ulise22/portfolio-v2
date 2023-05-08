import React from "react";
import { FormattedMessage } from "react-intl";
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.footer__social}>
                <div className={styles.footer__social__container}>
                    <a href="https://www.linkedin.com/in/ulisesmontenegro/" target="_Blank" className={styles.footer__social__item}>
                        <i className="fab fa-linkedin fa-2x" />
                    </a>
                    <a href="https://github.com/Ulise22" target="_Blank" className={styles.footer__social__item}>
                        <i className="fab fa-github fa-2x" />
                    </a>
                    <a href="mailto:ulimontenegro23@gmail.com" className={styles.footer__social__item}>
                        <i className="fas fa-envelope fa-2x" />
                    </a>
                </div>
            </div>

            <div className={styles.footer__end}>
                <h4 className={styles.footer__end__phrase}>
                    <FormattedMessage
                    id="footer.phrase" />
                </h4>
            </div>
        </div>
    )
}

export default Footer;