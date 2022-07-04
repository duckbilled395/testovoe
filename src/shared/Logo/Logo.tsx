import React from 'react';
import {NavLink} from "react-router-dom";

import logo from '../assets/images/logo.svg'

import './Logo.css'

const Logo: React.FC = () => {
    return (
        <div className='logoBox'>
            <NavLink to='/'><img className='logo' src={logo} alt=""/></NavLink>
        </div>
    );
};

export default Logo;