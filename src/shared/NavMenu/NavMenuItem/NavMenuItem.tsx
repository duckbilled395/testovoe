import React from 'react';

import './NavMenuItem.css'
import {NavLink} from "react-router-dom";

interface PropsType {
    title: string
    image: string
    width: string
    height: string
    path: string
}

const NavMenuItem: React.FC<PropsType> = ({title, image, width, height, path}) => {
    return (
        <NavLink style={{width: width, height: height, textDecoration: 'none'}} className='navMenuItemBox' to={path}>
            <div className='imgBox'>
                <img src={image} alt=""/>
            </div>
            <div className='titleBox'>{title}</div>
        </NavLink>
    );
};

export default NavMenuItem;