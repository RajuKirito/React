import React from 'react'
import PortfolioItem from './PortfolioItem'
import './styles.css'

import port1 from './assets/img/portfolio/cabin.png'
import port2 from './assets/img/portfolio/cake.png'
import port3 from './assets/img/portfolio/circus.png'
import port4 from './assets/img/portfolio/game.png'
import port5 from './assets/img/portfolio/safe.png'
import port6 from './assets/img/portfolio/submarine.png'


const Portfolio = () =>(
    <section className="page-section portfolio" id="portfolio">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row justify-content-center">
                    <PortfolioItem path = {port1}/>
                    <PortfolioItem path = {port2}/>
                    <PortfolioItem path = {port3}/>
                    <PortfolioItem path = {port4}/>
                    <PortfolioItem path = {port5}/>
                    <PortfolioItem path = {port6}/>
                </div>
            </div>
        </section>
)

export default Portfolio