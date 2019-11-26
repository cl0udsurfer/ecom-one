import React, { Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

import { logout, isAuthenticated } from '../../api/auth';

const { Header, Content, Footer } = Layout;

const LayoutMain = ({
  title = 'Title',
  description = 'Description',
  children
}) => {
  return (
    <Layout
      title='Ecom-One Homepage'
      description='Welcome to Ecom-One - build with MERN Stack'
    >
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item>
            <Link to='/'>Home</Link>
          </Menu.Item>
          {isAuthenticated() && isAuthenticated().user.role === 1 && (
            <Menu.Item>
              <Link to='/admin/dashboard'>Dashboard</Link>
            </Menu.Item>
          )}
          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <Menu.Item>
              <Link to='/user/dashboard'>Dashboard</Link>
            </Menu.Item>
          )}
          {!isAuthenticated() && (
            <Menu.Item>
              <Link to='/signup'>Signup</Link>
            </Menu.Item>
          )}
          {!isAuthenticated() && (
            <Menu.Item>
              <Link to='/signin'>Signin</Link>
            </Menu.Item>
          )}
          {isAuthenticated() && (
            <Menu.Item>
              <span onClick={() => logout()}>Signout</span>
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2019 Created by cl0udsurfer
      </Footer>
    </Layout>
  );
};

export default LayoutMain;
