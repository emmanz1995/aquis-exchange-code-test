import React from 'react';
import './navbar.scss';
import AquisLogo from '../../assets/logo.svg';
import Hamburger from '../../assets/icons/hamburger-menu.svg';

const Navbar = () => {
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
        <div className="navbar">
            <div className="navbar__wrapper">
                <div className="logo-container">
                    <img src={AquisLogo} alt="" width="600" height="400" className="logo" />
                </div>
                <div className="hamburger-container">
                    <img src={Hamburger} alt="" className="logo"/>
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
