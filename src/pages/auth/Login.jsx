// src/components/Login.js
import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/register.json'; // replace with your Lottie file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const onFinish = async (values) => {
    setLoading(true)
    try {
      if (values.username === 'admin' && values.password === 'admin123') {
        message.success('Login successful');
        navigate('/dashboard')
      }else{
        message.error('your username or password is incorrect');
      }
      // const response = await axios.post('http://localhost:5000/login', values);
      // Assuming your Flask API returns the access token
      // const { access_token } = response.data;

      // Store token in localStorage or state
      // localStorage.setItem('access_token', access_token);


      // Redirect to another page or update UI

    } catch (error) {
      message.error('Login failed: ' + (error.response?.data?.msg || 'Unknown error'));
    } finally {
      setLoading(false)
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f0f2f5',
      }}
    >
      {/* Left Side: Form */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: 300,
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Header */}
          <Title level={2} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            Login Page
          </Title>

          <Form
            name="login"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block disabled={loading}>
                {loading ? 'Loading...' : 'Login'}
              </Button>
            </Form.Item>

            {/* Forgot Password Link */}
            <Form.Item>
              <Text type="secondary">
                <a href="/forgot-password" style={{ float: 'right' }}>
                  Forgot Password?
                </a>
              </Text>
            </Form.Item>

            {/* Register Prompt */}
            <Form.Item>
              <Text type="secondary">
                Don't have an account?{' '}
                <Button type="link" href="#" style={{ paddingLeft: 0 }}>
                  Register
                </Button>
              </Text>
            </Form.Item>
          </Form>
        </div>
      </div>

      {/* Right Side: Lottie Animation */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#f0f2f5', // Set the background color
          padding: '20px', // Optional padding to make it look better
          borderRadius: '8px', // Optional: Add rounded corners if you like
        }}
      >
        <Lottie options={defaultOptions} height={400} width={500} />
      </div>
    </div>
  );
};

export default Login;
