import React from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/core/LayoutMain';

import { Card, Row, Col } from 'antd';
import { isAuthenticated } from '../../api/auth';

const AdminDashboard = () => {
  const {
    user: { name, email, role }
  } = isAuthenticated();
  return (
    <LayoutMain title='Admin Dashboard' description='Admin Dashboard'>
      <p>Admin Dashboard</p>
      <Row gutter={16}>
        <Col span={8}>
          <Card title='Admin Information' bordered={true}>
            Name: {name}
            <br />
            Email: {email}
            <br />
            {role === 1 ? 'Administrator' : 'Registered User'}
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Admin Links' bordered={true}>
            <Link to='/admin/create/category'>Create Category</Link>
            <br />
            <Link to='/admin/create/product'>Create Product</Link>
          </Card>
        </Col>
      </Row>
    </LayoutMain>
  );
};

export default AdminDashboard;
