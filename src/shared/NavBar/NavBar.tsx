import React from 'react';

import Logo from "../Logo/Logo";

import './NavBar.css'
import NavMenu from "../NavMenu/NavMenu";

const NavBar: React.FC = () => {
    return (
        <div className='navBarContainer'>
            <div className='navBarInner'>
                <Logo/>
                <NavMenu />
            </div>
        </div>
    );
};

export default NavBar;