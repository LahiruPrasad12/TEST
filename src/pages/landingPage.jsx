// src/pages/LandingPage.js
import React from 'react';
import { Layout, Menu, Button, Typography } from 'antd';
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/cybersecurity.json'; // replace with your Lottie file

const { Header, Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

const LandingPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <Layout>
            {/* Navbar */}
            <Header style={{ background: '#001529', padding: '0 20px' }}>
                <div style={{ float: 'right' }}>
                    <Button type="primary" href="/login" style={{ marginRight: '10px' }}>Sign In</Button>
                    <Button href="/register" >
                        Sign Up
                    </Button>

                </div>
                {/* <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Features</Menu.Item>
                    <Menu.Item key="3">Contact</Menu.Item>
                </Menu> */}
            </Header>

            {/* Content */}
            <Content style={{ padding: '0 50px', marginTop: '64px', textAlign: 'center' }}>
                {/* Animated Text */}
                <Title level={1} style={{ animation: 'fadeIn 2s' }}>
                    Welcome to CyberSecure
                </Title>
                <Paragraph style={{ fontSize: '18px', animation: 'fadeIn 2s 1s' }}>
                    Protecting Your Digital World
                </Paragraph>

                {/* Lottie Animation */}
                <div style={{ marginTop: '40px' }}>
                    <Lottie options={defaultOptions} height={500} width={800} />
                </div>

                {/* More Animated Text */}
                <Paragraph style={{ fontSize: '20px', marginTop: '30px', animation: 'fadeIn 2s 2s' }}>
                    Join us in securing the future.
                </Paragraph>
            </Content>

            {/* Footer */}
            <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: '#fff' }}>
                ©2024 CyberSecure. All rights reserved.
            </Footer>

            {/* Keyframes for Animation */}
            <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
            </style>
        </Layout>
    );
};

export default LandingPage;
