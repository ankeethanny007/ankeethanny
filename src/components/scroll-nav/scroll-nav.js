import './scroll-nav.scss';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ScrollNav = () => {
    const componentList = ['/about', '/skills', '/', '/blog', '/contact'];
    const [pathname, setPathname] = useState(window.location.pathname);

    // Effect to simulate forceUpdate
    useEffect(() => {
        const intervalId = setInterval(() => {
            setPathname(window.location.pathname);
        }, 50);

        // Cleanup on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const handleButtonClick = (e) => {
        console.log(e);
    };

    const prevComponent = () => {
        let pathPosition = componentList.indexOf(window.location.pathname);
        return pathPosition === 0 ? componentList[componentList.length - 1] : componentList[pathPosition - 1];
    };

    const nextComponent = () => {
        let pathPosition = componentList.indexOf(window.location.pathname);
        return pathPosition === componentList.length - 1 ? componentList[0] : componentList[pathPosition + 1];
    };

    return (
        <div className="container">
            <Link to={nextComponent()}>
                <FontAwesomeIcon
                    className="right-navigation"
                    onKeyDown={handleButtonClick}
                    tabIndex="0"
                    icon={faAngleDoubleRight}
                />
            </Link>
            <Link to={prevComponent()}>
                <FontAwesomeIcon
                    className="left-navigation"
                    onKeyDown={handleButtonClick}
                    tabIndex="0"
                    icon={faAngleDoubleLeft}
                />
            </Link>
        </div>
    );
};

export default ScrollNav;
