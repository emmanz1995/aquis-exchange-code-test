import React, { useState, useEffect } from 'react';
import './navbar.scss';
import AquisLogo from '../../assets/logo.svg';
import AquisLogoLight from '../../assets/logoLight.svg';
import Hamburger from '../../assets/icons/hamburger-menu.svg';

const Navbar = ({ revealMenu }) => {
    const [revealNav, setRevealNav] = useState(false);
    const navTransition = () => {
        if(window.scrollY > 50) {
            setRevealNav(true);
        } else {
            setRevealNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', navTransition)

        return () => window.removeEventListener('scroll', navTransition)
    }, [])
    const navItems = [
        {
            id: 1,
            name: "About",
            link: "/"
        },
        {
            id: 2,
            name: "Aquis Exchange",
            link: "/"
        },
        {
            id: 3,
            name: "News",
            link: "/"
        },
        {
            id: 4,
            name: "Investors",
            link: "/"
        },
        {
            id: 5,
            name: "Login",
            link: "/"
        },
        {
            id: 6,
            name: "Register",
            link: "/"
        },
    ]
    return (
        <div className={`navbar ${revealNav && 'darkNav'}`}>
            <div className="navbar__wrapper">
                <div className="logo-container">
                    {!revealNav ? <img src={AquisLogo} alt="" width="600" height="400" className="logo" /> : <img src={AquisLogoLight} alt="" width="600" height="400" className="logo" />}
                </div>
                <div className="hamburger-container">
                    <img src={Hamburger} alt="" className="logo" onClick={revealMenu} />
                </div>
                <ul className="navbar__ul">
                    {navItems.map(nav => (
                        <>
                            <li><a href="">{nav?.name}</a></li>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
