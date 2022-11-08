import React, { Component } from 'react';
import backgroundHeader from './assets/background.png';
class Header extends Component {
    render () {
        return (
            <header id="contact-info" className="header" style={ {
                backgroundImage: `linear-gradient(to right bottom, rgba(10, 25, 47, .9), rgba(10, 25, 47, .8)),
            url(${backgroundHeader})`
            } }>
                <div className="header__text-box">
                    <h3 className="header-main-title">Hi, I'm Nguyen Phat Dat</h3>
                    <p className="header-sub-title">A software engineering student of FPT University</p>
                    <div className="contact-info">
                        <p className="contact-item address"><i class="fa-solid fa-location-pin"></i>District 9, HCMC</p>
                        <p className="contact-item phone"><i class="fa-solid fa-phone"></i>0522422411</p>
                        <p className="contact-item email"><i class="fas fa-envelope"></i>nguyenphatdat3004@gmail.com</p>
                        <p className="contact-item github"><i class="fab fa-github"></i><a target="_blank" href="https://github.com/dat-nguyen-304">dat-nguyen-304</a></p>
                        <p className="contact-item linkedin"><i class="fa-brands fa-linkedin"></i><a target="_blank" href="https://www.linkedin.com/in/dat-nguyen-bb3518256/">Dat Nguyen</a></p>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;
