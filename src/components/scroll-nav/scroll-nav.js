import './scroll-nav.scss';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

class ScrollNav extends Component {
    componentList = ['/about', '/skills', '/', '/blog', '/contact'];
    currentPath = window.location.pathname;

    constructor(props) {
        super(props);
        setInterval(() => {
            this.forceUpdate();
        }, 50);
    }

    handleButtonClick = (e) => {
        console.log(e)
    }

    prevComponent = () => {
        let pathPosition = this.componentList.indexOf(window.location.pathname);
        return pathPosition === 0 ? this.componentList[this.componentList.length - 1] : this.componentList[pathPosition - 1]
    }

    nextComponent = () => {
        let pathPosition = this.componentList.indexOf(window.location.pathname);
        return pathPosition === this.componentList.length - 1 ? this.componentList[0] : this.componentList[pathPosition + 1]
    }

    render() {
        return (
            <div className='container'>
                <Link to={this.nextComponent()}><FontAwesomeIcon className="right-navigation" onKeyDown={this.handleButtonClick} tabIndex="0" icon={faAngleDoubleRight} /></Link>
                <Link to={this.prevComponent()}><FontAwesomeIcon className="left-navigation" onKeyDown={this.handleButtonClick} tabIndex="0" icon={faAngleDoubleLeft} /></Link>
            </div>
        )
    }
}

export default ScrollNav;