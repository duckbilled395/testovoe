import {Layout} from 'antd';
import React from 'react';
import './app.css'
import SideBar from "../shared/SideBar/SideBar";

const { Sider, Content } = Layout;

const App: React.FC = () => {
  return (
      <Layout style={{margin: '0 auto', width: '1366px'}}>
          <Layout>
              <Sider width={'340px'} style={{backgroundColor: 'blue'}}>
                  <SideBar/>
              </Sider>
              <Content style={{width: '1026px', backgroundColor: 'red'}}>main content</Content>
          </Layout>
      </Layout>
  );
}

export default App;
