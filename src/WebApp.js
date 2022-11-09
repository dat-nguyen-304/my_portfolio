import React, { Component } from 'react';
import sellFood from './assets/sell-food.png';
import hostel from './assets/hostel.png';
import bookingCare from './assets/bookingcare.png';

class WebApp extends Component {
    render () {
        return (
            <div id="web-app" className="web-app">
                <h2 className="content-heading">My apps</h2>
                <ul className="web-app__list row">
                    <li className="col l-4 m-12 c-12">
                        <div className="product-item">
                            <div className="product-card product-card--front">
                                <div className="product-card__picture product-card__picture--1"
                                    style={ {
                                        backgroundImage: `linear-gradient(to right bottom, rgba(10, 25, 47, .9), rgba(10, 25, 47, .8)),
                    url(${sellFood})`
                                    } }>
                                </div>
                                <h3 className="product-card__title">
                                    <span className="product-card__title-text product-card__title-text">fast food <br /> selling</span>
                                </h3>
                                <div className="product-card-content food-selling">
                                    <div className="product-card-content__item">Personal project (2/2022 - 3/2022)</div>
                                    <div className="product-card-content__item">This is an online sales app and it's also my first application.</div>
                                    <div className="product-card-content__item">I did it for the assignment in class and got highest score.</div>
                                    <div className="product-card-content__item">Technologies: Java(JSP/Servlet), HTML/CSS/JS, SQL Server.</div>
                                </div>
                            </div>
                            <div className="product-card product-card--back">
                                <div className="product-card-back product-card-back--1">
                                    <div className="product-card-back__only">link</div>
                                    <div className="product-card-back__enroll github">
                                        <a href="https://github.com/dat-nguyen-304/sakura-food" className="product-enroll-btn btn btn--black" target="_blank">github</a>
                                    </div>
                                    <div className="product-card-back__enroll demo">
                                        <a href="https://www.youtube.com/watch?v=C7BmC4yev34" target="_blank" className="product-enroll-btn btn btn--black">youtube demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col l-4 m-12 c-12">
                        <div className="product-item">
                            <div className="product-card product-card--front">
                                <div className="product-card__picture product-card__picture--2"
                                    style={ { backgroundImage: `linear-gradient(to right bottom, rgba(10, 25, 47, .9), rgba(10, 25, 47, .8)), url(${hostel})` } }>
                                </div>
                                <h3 className="product-card__title">
                                    <span className="product-card__title-text product-card__title-text">hostel <br />
                                        management</span>
                                </h3>
                                <div className="product-card-content hostel">
                                    <div className="product-card-content__item">Team project (4 members) (5/2022 - 7/2022)</div>
                                    <div className="product-card-content__item">
                                        My team put a lot of effort into this project. App helps tenants find, rent long-term accommodation and helps landlords manage their hostels.
                                    </div>
                                    <div className="product-card-content__item">My contribution: Contribute the ideas in the project. Design database, layout UI. Implement Back-end code.
                                    </div>
                                    <div className="product-card-content__item">Technologies: Java(JSP/Servlet), HTML/CSS/JS, SQL Server, AJAX and other libraries.</div>
                                </div>
                            </div>
                            <div className="product-card product-card--back">
                                <div className="product-card-back product-card-back--2">
                                    <div className="product-card-back__only">link</div>
                                    <div className="product-card-back__enroll github">
                                        <a target="_blank" href="https://github.com/dat-nguyen-304/SE1618-Dolphin" className="product-enroll-btn btn btn--black">github</a>
                                    </div>
                                    <div className="product-card-back__enroll demo">
                                        <a target="_blank" href="https://drive.google.com/drive/folders/1KaoFJ7hMeLOWPrmdC0KT2JGVG90RLEjY?usp=share_link" className="product-enroll-btn btn btn--black">video demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col l-4 m-12 c-12">
                        <div className="product-item">
                            <div className="product-card product-card--front">
                                <div className="product-card__picture product-card__picture--3"
                                    style={ { backgroundImage: `linear-gradient(to right bottom, rgba(10, 25, 47, .9), rgba(10, 25, 47, .8)), url(${bookingCare})` } }>
                                </div>
                                <h3 className="product-card__title">
                                    <span className="product-card__title-text product-card__title-text">Booking <br /> care</span>
                                </h3>
                                <div className="product-card-content booking-care">
                                    <div className="product-card-content__item">Personal project (9/2022 - 10/2022)</div>
                                    <div className="product-card-content__item">App helps patients schedule appointments and helps doctors manage their schedules.</div>
                                    <div className="product-card-content__item">I cloned from bookingcare.vn. My main purpose for this project is learning new technology.</div>
                                    <div className="product-card-content__item">Technologies: ReactJs, Redux, NodeJs, ExpressJs, Sequelize, MySQL and other libraries.</div>
                                </div>
                            </div>
                            <div className="product-card product-card--back">
                                <div className="product-card-back product-card-back--3">
                                    <div className="product-card-back__only">link</div>
                                    <div className="product-card-back__enroll github--1">
                                        <a target="_blank" href="https://github.com/dat-nguyen-304/Booking-care-reactjs" className="product-enroll-btn btn btn--black">github front-end</a>
                                    </div>
                                    <div className="product-card-back__enroll github--2">
                                        <a target="_blank" href="https://github.com/dat-nguyen-304/Booking-care-nodejs" className="product-enroll-btn btn btn--black">github back-end</a>
                                    </div>
                                    <div className="product-card-back__enroll demo">
                                        <a target="_blank" href="https://www.youtube.com/watch?v=OaMrYgmc9zA" className="product-enroll-btn btn btn--black">youtube demo</a>
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
export default WebApp;
