import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faNewspaper, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './navigation.scss'

class Navigation extends Component {
    constructor(props) {
        super(props);
        setInterval(() => {
            this.forceUpdate();
        }, 50);
    }
    render() {
        const screenWidth = window.innerWidth;
        return (
            <div>
                <div id="bottomnav" className="bottomnav" >
                    <ul>
                        <li className={window.location.pathname === '/about' ? 'active' : ''}><Link to="/about" id="about"> {screenWidth >= 768 ? 'About' : <FontAwesomeIcon icon={faUser} />} </Link></li>
                        <li className={window.location.pathname === '/skills' ? 'active' : ''}><Link to="/skills" id="skills"> {screenWidth >= 768 ? 'Skills' : <FontAwesomeIcon icon={faCog} />} </Link></li>
                        <li className={window.location.pathname === '/' || window.location.pathname === '/home' ? 'active' : ''}><Link to="/" id="home"> <FontAwesomeIcon icon={faHome} /> </Link></li>
                        <li className={window.location.pathname === '/blog' ? 'active' : ''}><Link to="/blog" id="blog"> {screenWidth >= 768 ? 'Blog' : <FontAwesomeIcon icon={faNewspaper} />}</Link></li>
                        <li className={window.location.pathname === '/contact' ? 'active' : ''}><Link to="/contact" id="contact"> {screenWidth >= 768 ? 'Contact' : <FontAwesomeIcon icon={faEnvelope} />} </Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation