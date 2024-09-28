import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faNewspaper, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './navigation.scss';

const Navigation = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [pathname, setPathname] = useState(window.location.pathname);

    useEffect(() => {
        const updateDimensions = () => {
            setScreenWidth(window.innerWidth);
        };

        // Set interval to trigger re-render similar to forceUpdate in class component
        const intervalId = setInterval(() => {
            setPathname(window.location.pathname);
        }, 50);

        // Attach event listener to update screen width when the window is resized
        window.addEventListener('resize', updateDimensions);

        // Cleanup function
        return () => {
            clearInterval(intervalId); // Clear interval on unmount
            window.removeEventListener('resize', updateDimensions); // Remove event listener on unmount
        };
    }, []); // Empty dependency array ensures this effect runs once on mount

    return (
        <div>
            <div id="bottomnav" className="bottomnav">
                <ul>
                    <li className={pathname === '/about' ? 'active' : ''}>
                        <Link to="/about" id="about">
                            {screenWidth >= 768 ? 'About' : <FontAwesomeIcon icon={faUser} />}
                        </Link>
                    </li>
                    <li className={pathname === '/skills' ? 'active' : ''}>
                        <Link to="/skills" id="skills">
                            {screenWidth >= 768 ? 'Skills' : <FontAwesomeIcon icon={faCog} />}
                        </Link>
                    </li>
                    <li className={pathname === '/' || pathname === '/home' ? 'active' : ''}>
                        <Link to="/" id="home">
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </li>
                    <li className={pathname === '/blog' ? 'active' : ''}>
                        <Link to="/blog" id="blog">
                            {screenWidth >= 768 ? 'Blog' : <FontAwesomeIcon icon={faNewspaper} />}
                        </Link>
                    </li>
                    <li className={pathname === '/contact' ? 'active' : ''}>
                        <Link to="/contact" id="contact">
                            {screenWidth >= 768 ? 'Contact' : <FontAwesomeIcon icon={faEnvelope} />}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
