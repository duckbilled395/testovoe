import {Layout} from 'antd';
import React from 'react';
import './app.css'
import NavBar from "../shared/NavBar/NavBar";
import SettingsMenu from "../pages/SettingsMenu/SettingsMenu";

const {Sider, Content} = Layout;

const App: React.FC = () => {
    return (
        <Layout style={{margin: '0 auto', width: '1366px'}}>
            <Layout>
                <Sider width={'100px'} style={{backgroundColor: 'blue', display: 'flex', flexDirection: 'row'}}>
                    <NavBar/>

                </Sider>
                <SettingsMenu/>
                <Content style={{width: '1026px', backgroundColor: 'red'}}>main content</Content>
            </Layout>
        </Layout>
    );
}

export default App;
