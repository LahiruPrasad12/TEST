import React from 'react';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../HomePage.css'; // Import custom CSS file

const { Sider } = Layout;

export default function SideNav() {
    return (
        <Sider width={200} style={{ position: 'fixed', top: 64, bottom: 0, left: 0, background: '#0e2d4b' }} className="sidebar">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0, background: '#0e2d4b', color: '#fff', top: 64 }}
            >
                <Menu.Item key="1" className="menu-item">
                    <Link to="/CodeNexa">CODENEXA</Link>
                </Menu.Item>
                <Menu.Item key="2" className="menu-item">
                    <Link to="/HydraGuard">HYDRAGUARD</Link> {/* Replace with actual route */}
                </Menu.Item>
                <Menu.Item key="3" className="menu-item">
                    <Link to="/shield">SHIELD</Link> {/* Replace with actual route */}
                </Menu.Item>
                <Menu.Item key="4" className="menu-item">
                    <Link to="/Secunid">SECUNID</Link> {/* Replace with actual route */}
                </Menu.Item>
            </Menu>
        </Sider>
    );
}
