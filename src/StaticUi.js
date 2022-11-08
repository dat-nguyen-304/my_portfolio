import React, { Component } from 'react';
import selfTaught from './assets/self-taught.png';
import shopee from './assets/shopee.png';
import w3Web from './assets/w3-web.png';

class StaticUi extends Component {
    render () {
        return (
            <div id="static-ui" className="static-ui">
                <h2 className="content-heading">My static UI</h2>
                <ul className="static-ui__list row">
                    <li className="col l-4 m-12 c-12">
                        <div className="product-item">
                            <div className="product-card product-card--front">
                                <div className="product-card__picture product-card__picture--1"
                                    style={ {
                                        backgroundImage: `linear-gradient(to right bottom, rgba(10, 25, 47, .9), rgba(10, 25, 47, .8)),url(${w3Web})`
                                    } }>
                                </div>
                                <h3 className="product-card__title">
                                    <span className="product-card__title-text product-card__title-text--1">w3 <br /> The band</span>
                                </h3>
                                <div className="product-card-content">
                                    <div className="product-card-content__item">This my first UI. I cloned from w3 The band (3/2021)</div>
                                    <div className="product-card-content__item">Purpose: Apply knowledge of HTML/CSS/JS after self-study.</div>
                                </div>
                            </div>
                            <div className="product-card product-card--back">
                                <div className="product-card-back product-card-back--1">
                                    <div className="product-card-back__only">link</div>
                                    <div className="product-card-back__enroll github">
                                        <a target="_blank" href="https://github.com/dat-nguyen-304/w3-the-band" className="product-enroll-btn btn btn--black">github code</a>
                                    </div>
                                    <div className="product-card-back__enroll demo">
                                        <a target="_blank" href="https://dat-nguyen-304.github.io/w3-the-band/" className="product-enroll-btn btn btn--black">GitHub Pages</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col l-4 m-12 c-12">
                        <div className="product-item">
                            <div className="product-card product-card--front">
                                <div className="product-card__picture product-card__picture--2"
                                    style={ { backgroundImage: `linear-gradient(to right bottom, rgba(10, 25, 47, .9), rgba(10, 25, 47, .8)), url(${shopee})` } }>
                                </div>
                                <h3 className="product-card__title">
                                    <span className="product-card__title-text product-card__title-text--2">product list <br />shopee</span>
                                </h3>
                                <div className="product-card-content">
                                    <div className="product-card-content__item">I clone from Shopee's product list page (4/2021)</div>
                                    <div className="product-card-content__item">Purpose: I want to practice more HTML/CSS and implement the harder parts.</div>                    </div>
                            </div>
                            <div className="product-card product-card--back">
                                <div className="product-card-back product-card-back--2">
                                    <div className="product-card-back__only">link</div>
                                    <div className="product-card-back__enroll github">
                                        <a target="_blank" href="https://github.com/dat-nguyen-304/shopeev2" className="product-enroll-btn btn btn--black">github code</a>
                                    </div>
                                    <div className="product-card-back__enroll demo">
                                        <a target="_blank" href="https://dat-nguyen-304.github.io/shopeev2/" className="product-enroll-btn btn btn--black">GitHub Pages</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col l-4 m-12 c-12">
                        <div className="product-item">
                            <div className="product-card product-card--front">
                                <div className="product-card__picture product-card__picture--3"
                                    style={ { backgroundImage: `linear-gradient(to right bottom, rgba(10, 25, 47, .9), rgba(10, 25, 47, .8)), url(${selfTaught})` } }>
                                </div>
                                <h3 className="product-card__title">
                                    <span className="product-card__title-text product-card__title-text--3">self <br /> taught
                                    </span>
                                </h3>
                                <div className="product-card-content">
                                    <div className="product-card-content__item">I follow a tutorial on Youtube to do (11/2021)</div>
                                    <div className="product-card-content__item">Purpose: Learn SCSS and make more effects. This is also the basis for my current portfolio.</div>
                                </div>
                            </div>
                            <div className="product-card product-card--back">
                                <div className="product-card-back product-card-back--3">
                                    <div className="product-card-back__only">link</div>
                                    <div className="product-card-back__enroll github">
                                        <a target="_blank" href="https://github.com/dat-nguyen-304/selftaught" className="product-enroll-btn btn btn--black">github code</a>
                                    </div>
                                    <div className="product-card-back__enroll demo">
                                        <a target="_blank" href="https://dat-nguyen-304.github.io/selftaught/" className="product-enroll-btn btn btn--black">GitHub Pages</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default StaticUi;
