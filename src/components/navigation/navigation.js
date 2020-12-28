import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './navigation.scss'

class Navigation extends Component {
    constructor(props) {
        super(props);
        setInterval(() => {
            this.forceUpdate();
        }, 50);
    }
    render() {
        return (
            <div>
                <div id="bottomnav" className="bottomnav" >
                    <ul>
                        <li className={window.location.pathname === '/about' ? 'active' : ''}><Link to="/about" id="about"> About </Link></li>
                        <li className={window.location.pathname === '/skills' ? 'active' : ''}><Link to="/skills" id="skills"> Skills </Link></li>
                        <li className={window.location.pathname === '/' || window.location.pathname === '/home' ? 'active' : ''}><Link to="/" id="home"> <FontAwesomeIcon icon={faHome} /> </Link></li>
                        <li className={window.location.pathname === '/blog' ? 'active' : ''}><Link to="/blog" id="blog"> Blog </Link></li>
                        <li className={window.location.pathname === '/contact' ? 'active' : ''}><Link to="/contact" id="contact"> Contact </Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation