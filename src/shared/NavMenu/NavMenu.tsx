import React from 'react';
import home from '../assets/images/home.svg'
import users from '../assets/images/users.svg'
import settings from '../assets/images/settings.svg'
import pl from '../assets/images/pl.svg'
import vacationManager from '../assets/images/vacationManager.svg'

import './NavMenu.css'
import NavMenuItem from "./NavMenuItem/NavMenuItem";

const NavMenu: React.FC = () => {

    return (
        <div className='navMenuContainer'>
            <NavMenuItem title={'Dashboard'} image={home} width={'70px'} height={'42px'} path={'/asdf'}/>
            <NavMenuItem title={'Users'} image={users} width={'70px'} height={'42px'} path={'/asdf'}/>
            <NavMenuItem title={'Settings'} image={settings} width={'70px'} height={'42px'} path={'/asdf'}/>
            <NavMenuItem title={'P&L'} image={pl} width={'70px'} height={'42px'} path={'/asdf'}/>
            <NavMenuItem title={'Vacation Manager'} image={vacationManager} width={'70px'} height={'56px'} path={'/asdf'}/>
        </div>
    );
};

export default NavMenu