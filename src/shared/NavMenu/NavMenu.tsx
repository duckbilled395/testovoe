import React, {useState} from 'react';
import './NavMenu.css'
import NavMenuItem from "./NavMenuItem/NavMenuItem";
import {home, pl, settings, users, vacationManager} from "./lib";

const NavMenu: React.FC = () => {

    return (
        <div className='navMenuContainer'>
            <NavMenuItem title={'Dashboard'} image={home} width={'70px'} height={'42px'} path={'/dashboard'}/>
            <NavMenuItem title={'Users'} image={users} width={'70px'} height={'42px'} path={'/users'}/>
            <NavMenuItem title={'Settings'} image={settings} width={'70px'} height={'42px'} path={'/settings'}/>
            <NavMenuItem title={'P&L'} image={pl} width={'70px'} height={'42px'} path={'/pl'}/>
            <NavMenuItem title={'Vacation Manager'} image={vacationManager} width={'70px'} height={'56px'} path={'/vacationManager'}/>
        </div>
    );
};

export default NavMenu