import React from 'react';
import './navbar.scss';

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
                <h2>Aquis Exchange</h2>
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
