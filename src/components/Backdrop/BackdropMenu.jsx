import React from 'react';
import './backdrop.scss';

const BackdropMenu = ({ children }) => {
    return <div className="backdrop">{children}</div>
}

export default BackdropMenu;