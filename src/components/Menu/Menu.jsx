import React from 'react';
import Backdrop from "../Backdrop/BackdropMenu";
import './menu.scss';
import LogoLight from '../../assets/logoLight.svg';
import CloseIcon from '../../assets/icons/cross.svg';

const Menu = ({ hideMenu }) => {
    return (
        <Backdrop onClick={(evt) => evt.stopPropagation()}>
            <div className="menu">
                <ul>
                    <div className="logo-container2">
                        <div className="close-container">
                            <img src={CloseIcon} alt="" className="logo2" onClick={hideMenu} />
                        </div><br/>
                        <img src={LogoLight} alt="" className="logo2" onClick={hideMenu} />
                    </div><hr />
                    <li>
                        <a href="">
                            <h1>About</h1>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h1>Aquis Exchange</h1>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h1>News</h1>
                        </a>
                    </li>
                    <li>
                        <a href="">
                           <h1>Investors</h1>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h1>Login</h1>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h1>Register</h1>
                        </a>
                    </li>
                </ul>
            </div>
        </Backdrop>
    )
}

export default Menu;
