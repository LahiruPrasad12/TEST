// src/pages/HomePage.js
import React from 'react';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import './HomePage.css'; // Import custom CSS file
import SideNav from './navigationBar/SideNav';
import TopNav from './navigationBar/TopNav';
import Dashboard from './dashboard';


const { Header, Sider, Content } = Layout;

const HomePage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Side Navigation */}

      {/* <SideNav /> */}

      <Layout>
        {/* Top Navigation */}

        <TopNav />
        {/* Main Content */}
        <Content style={{ padding: '24px', marginTop: 64, minHeight: 280 }}>
          {/* Add your component content here */}
          <Dashboard />
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;
