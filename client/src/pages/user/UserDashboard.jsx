import React from 'react';
import LayoutMain from '../../components/core/LayoutMain';

import { Card, Row, Col } from 'antd';
import { isAuthenticated } from '../../api/auth';

const UserDashboard = () => {
  const {
    user: { name, email, role }
  } = isAuthenticated();

  return (
    <LayoutMain title='User Dashboard' description='User Dashboard'>
      <p>User Dashboard</p>
      <Row gutter={16}>
        <Col span={8}>
          <Card title='User Information' bordered={true}>
            Name: {name}
            <br />
            Email: {email}
            <br />
            {role === 1 ? 'Administrator' : 'Registered User'}
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Purchase History' bordered={true}>
            Purchase History
          </Card>
        </Col>
      </Row>
    </LayoutMain>
  );
};

export default UserDashboard;
