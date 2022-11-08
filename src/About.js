import React, { Component } from 'react';
import htmlCssJs from './assets/html-css-js.png';
import reactJs from './assets/react.png';
import sql from './assets/sql.png';
import nodejs from './assets/nodejs.png';
import express from './assets/express.png';
import jspServlet from './assets/jsp-servlet.png';
class Menu extends Component {
    render () {
        return (
            <div id="about" className="about">
                <h2 className="content-heading">
                    about me
                </h2>
                <div className="grid about-container">
                    <div className="row">
                        <div className="col l-6 m-6 c-12">
                            <div className="about__text-box">
                                <h3 className="about-text-heading">summary</h3>
                                <p className="about-text-desc">
                                    <p class="desc-line">
                                        I'm Nguyen Phat Dat - final year student majoring in software engineering at FPTU.<br />
                                    </p>
                                    <p class="desc-line">
                                        Below is my learning process:
                                    </p>
                                    <p class="desc-line">
                                        I joined the team for the <span className="highlight">National Informatics Contest</span> when I was in high school. <br />
                                    </p>
                                    <p className="desc-line">
                                        From my own efforts, I am honored to be awarded <span className="highlight">100% scholarship (for 4 years)</span> by FPT University.<br />
                                    </p>
                                    <p className="desc-line">
                                        In university, I studied non-stop with the goal of becoming an excellent software engineer to contribute to the development of the company as well as the country.
                                    </p>
                                </p>
                                <h3 className="about-text-heading">history work</h3>
                                <p className="about-text-desc">
                                    <p class="desc-line">
                                        9/2022 - 11/2022: FPT Software <br />
                                        <span className="task">Task: Providing solutions to the constraint-satisfactory scheduling problem</span>
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div className="col l-6 m-6 c-12">
                            <div className="about__img-box">
                                <h3 className="about-img-heading">My skills</h3>
                                <div className="about-img-skill">
                                    <img src={ htmlCssJs } alt="" className="about-img about-img--1" />
                                    <img src={ reactJs } alt="" className="about-img about-img--2" />
                                    <img src={ nodejs } alt="" className="about-img about-img--3" />
                                    <img src={ sql } alt="" className="about-img about-img--4" />
                                    <img src={ jspServlet } alt="" className="about-img about-img--5" />
                                    <img src={ express } alt="" className="about-img about-img--6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu;
