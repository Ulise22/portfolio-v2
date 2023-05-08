import React, {useContext} from "react";
import Image from "next/image";
import styles from './PortfolioItem.module.css';
import { langContext } from "../../context/langContext";

const PortfolioItem = ({work}) => {
    const idioma = useContext(langContext);
    
    return(
        <div>
            <div className={styles.portfolioItem}>
                <Image src={work.image} className={styles.portfolioItem__photo} />
                <div className={styles.portfolioItem__container}>
                    <h2 className={styles.portfolioItem__title}> {work.name} </h2>
                    <div className={styles.portfolioItem__text}>
                        <p> {idioma.local == "es-ES" ? work.descEs : work.descEn} </p>
                    </div>

                    <div className={styles.portfolioItem__btns}>
                        <a href={work.github} target="_Blank" className={styles.portfolio__btns__git}>GitHub</a>
                        <a href={work.visit} target="_Blank" className={styles.portfolio__btns__visit}>WebPage</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem;