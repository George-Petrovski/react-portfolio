import { Link, NavLink } from 'react-router-dom'
import React, { useState, useRef } from 'react'
import './index.scss'
import LogoG from '../../assets/images/logo-g.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFolder, faHome, faUser, faClose, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    const navRef = useRef(null);

    const toggleNav = () => {
        if (!showNav) {
            // Open the menu
            const nav = navRef.current;
            nav.style.animation = 'slideDown 0.7s forwards';
        } else {
            // Close the menu
            const nav = navRef.current;
            nav.style.animation = 'slideUp 0.7s forwards';
        }
        setShowNav(!showNav);
    };

    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoG} alt = "logo" />
                <img className="sub-logo" src={LogoSubtitle} alt = "George" />
            </Link>
            <nav className={showNav ? 'mobile-show' : 'mobile-hide'} ref={navRef}>
                <NavLink exact="true" activeclassname="active" to="/" onClick={toggleNav}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                    onClick={toggleNav}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink 
                    exact="true"
                    activeclassname="active"
                    className="folder-link"
                    to="/projects"
                    onClick={toggleNav}>
                    <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
                </NavLink>
                <NavLink 
                    exact="true"
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                    onClick={toggleNav}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/George-Petrovski"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/georgepetrovski/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon 
            onClick={toggleNav}
            icon={showNav? faClose : faBars}
            color="#ffd700"
            size="3x"
            className='menu-open-close-icon' />
        </div>
    )
};

export default Sidebar