import React from "react";
import './PortfolioItem.css';

const PortfolioItem = ({work}) => {
    return(
        <div>
            <div className="portfolioItem">
                <img src={work.image} className="portfolioItem__photo" />
                <div className="portfolioItem__container">
                    <h2 className="portfolioItem__title"> {work.name} </h2>
                    <div className="portfolioItem__text">
                        <p> {work.desc} </p>
                    </div>

                    <div className="portfolioItem__btns">
                        <a href={work.github} target="_Blank" className="portfolio__btns__git">GitHub</a>
                        <a href={work.visit} target="_Blank" className="portfolio__btns__visit">Visit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem;