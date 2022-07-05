import React from 'react';
import bell from '../assets/images/bell.png';
import JS from '../assets/images/JS.png';
import Logo from "../Logo/Logo";

import './NavBar.css'
import NavMenu from "../NavMenu/NavMenu";

const NavBar: React.FC = () => {
    return (
        <div className='navBarContainer'>
            <div className='navBarInner'>
                <div className='topMenu'>
                    <Logo/>
                    <NavMenu />
                </div>
                <div className='imagesBox'>
                    <img className='bell' src={bell} alt=""/>
                    <img className='JS' src={JS} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;