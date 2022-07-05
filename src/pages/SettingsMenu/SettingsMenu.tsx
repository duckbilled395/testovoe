import React, {useState} from 'react';
import arrowbtn from '../../shared/assets/images/arrowbtn.png'
import iconSettings from '../../shared/assets/images/icon-settings-general.png'
import iconVacationManager from '../../shared/assets/images/icon-settings-vacation manager.png'

import './SettingsMenu.css'

const SettingsMenu: React.FC = () => {

    let [display, setDisplay] = useState('block')
    let [left, setLeft] = useState('200px')

    const handleOnClick = () => {
        display === 'block' ? setDisplay('none') : setDisplay('block')
        left === '200px' ? setLeft('-40px') : setLeft('200px')
    }

    return (
        <div className='box'>
            <div style={{display: display}} className='SettingsMenuContainer'>
                <div className='settingsContainerInner'>
                    <div className='settingsTitle'>Settings</div>
                    <div className='settingsOptionMenu'>
                        <div className='settingsOption'>
                            <div className='settingsOptionTitle'><img className='iconSettings' src={iconSettings}
                                                                      alt=""/>General
                            </div>
                        </div>
                        <div className='settingsMenu'>
                            <div className='settingsMenuTitle'><img className='iconSettings' src={iconVacationManager}
                                                                    alt=""/>Vacation Manager
                            </div>
                            <ul className='settingsMenuList'>
                                <li className='settingsMenuListItem'><a href="">Leave Types</a></li>
                                <li className='settingsMenuListItem'><a href="">Locations</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <img className='collapseBtn' style={{left: left}} onClick={handleOnClick} src={arrowbtn} alt=""/>
        </div>

    );
};

export default SettingsMenu;