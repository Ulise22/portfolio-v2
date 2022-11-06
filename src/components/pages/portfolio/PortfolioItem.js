import React, {useContext} from "react";
import './PortfolioItem.css';
import { langContext } from "../../context/langContext";

const PortfolioItem = ({work}) => {
    const idioma = useContext(langContext);
    
    return(
        <div>
            <div className="portfolioItem">
                <img src={work.image} className="portfolioItem__photo" />
                <div className="portfolioItem__container">
                    <h2 className="portfolioItem__title"> {work.name} </h2>
                    <div className="portfolioItem__text">
                        <p> {idioma.local == "es-ES" ? work.descEs : work.descEn} </p>
                    </div>

                    <div className="portfolioItem__btns">
                        <a href={work.github} target="_Blank" className="portfolio__btns__git">GitHub</a>
                        <a href={work.visit} target="_Blank" className="portfolio__btns__visit">WebPage</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem;