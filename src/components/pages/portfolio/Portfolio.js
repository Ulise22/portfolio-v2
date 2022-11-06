import React from "react";
import { FormattedMessage } from "react-intl";
import {data} from './../../data';
import './Portfolio.css';
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
    return(
        <div name="portfolio" className="container">
            <h1 className="portfolio__title">
                <FormattedMessage
                id="port.title"
                defaultMessage="Portfolio" />
            </h1>

            <div className="portfolio__container">
                {
                    data.map((work) => {
                        return(
                            <div key={work.id} className="portfolio__items">
                                <PortfolioItem work={work} />
                            </div>
                        )
                    })
                }
            </div>

            <div className="portfolio__view">
                    <FormattedMessage
                    id="port.link"
                    defaultMessage="Enter " />
                     <a href="https://vercel.com/ulise22" target="_blank">Vercel</a>
            </div>
        </div>
    )
}

export default Portfolio;