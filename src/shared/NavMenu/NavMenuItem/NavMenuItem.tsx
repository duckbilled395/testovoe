import React, {useEffect} from 'react';

import './NavMenuItem.css'
import {NavLink} from "react-router-dom";

interface PropsType {
    title: string
    image:  any
    width: string
    height: string
    path: string
}

const NavMenuItem: React.FC<PropsType> = ({title, image, width, height, path}) => {

    return (
        <NavLink style={isActive => ({width: width, height: height, textDecoration: 'none'})} className='navMenuItemBox' to={path}>
            <div className='imgBox'>
                {image}
            </div>
            <div className='titleBox'>{title}</div>
        </NavLink>
    );
};

export default NavMenuItem;