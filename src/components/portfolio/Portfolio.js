import React from "react";
import {data} from './../data';
import './Portfolio.css';
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
    return(
        <div className="container">
            <h1 className="portfolio__title">Portfolio</h1>

            <div className="portfolio__container">
                {
                    data.map((work) => {
                        return(
                            <div className="portfolio__items">
                                <PortfolioItem work={work} />
                            </div>
                        )
                    })
                }
            </div>

            <div className="portfolio__view">
                    You can watch all my projects on <a href="https://vercel.com/ulise22" target="_blank">Vercel</a>
            </div>
        </div>
    )
}

export default Portfolio;