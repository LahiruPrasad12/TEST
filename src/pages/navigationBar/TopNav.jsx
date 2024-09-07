import React from 'react';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import '../HomePage.css'; // Import custom CSS file

const { Header, Sider, Content } = Layout;


export default function TopNav() {
    const menu = (
        <Menu>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
                Logout
            </Menu.Item>
        </Menu>
    );
    return (
        <div>
            <Header style={{ padding: 0, position: 'fixed', width: '100%', top: 0, left: 0, zIndex: 1 }}>
                <div style={{ float: 'right', marginRight: '16px' }}>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Dropdown>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px', color: '#fff', margin: 0 }}
                >
                    <Menu.Item key="1">Dashboard</Menu.Item>
                    <Menu.Item key="2">About</Menu.Item>
                    <Menu.Item key="3">Contact Us</Menu.Item>
                </Menu>
            </Header>
        </div>
    )
}
