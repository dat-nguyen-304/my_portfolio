import React, { Component } from 'react';

class Menu extends Component {
    state = {
        open: false,
    }

    render () {
        let { open } = this.state;
        return (
            <div className="menu">
                { (open === true) ?
                    <input type="checkbox" className="menu__check-box" checked />
                    :
                    <input type="checkbox" className="menu__check-box" />
                }

                <label className="menu__btn" onClick={ () => this.setState({ open: !open }) }>
                    <div className="menu-btn-icon"></div>
                </label>

                <div className="menu__nav">
                    <ul className="menu__list">
                        <li className="menu__item" onClick={ () => this.setState({ open: !open }) }>
                            <a className="menu__link" href="#contact-info">contact info</a>
                        </li>
                        <li className="menu__item" onClick={ () => this.setState({ open: !open }) }>
                            <a className="menu__link" href="#about">about me</a>
                        </li>
                        <li className="menu__item" onClick={ () => this.setState({ open: !open }) }>
                            <a className="menu__link" href="#web-app">My apps</a>
                        </li>
                        <li className="menu__item" onClick={ () => this.setState({ open: !open }) }>
                            <a className="menu__link" href="#static-ui">my static ui</a>
                        </li>
                    </ul>
                </div>

                <div className="menu__bg">
                </div>
            </div>
        )
    }
}
export default Menu;
