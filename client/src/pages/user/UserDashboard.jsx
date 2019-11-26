import React from 'react';
import LayoutMain from '../../components/core/LayoutMain';

import { Card, Row, Col } from 'antd';
import { isAuthenticated } from '../../api/auth';

const UserDashboard = () => {
  const {
    user: { _id, name, email, role }
  } = isAuthenticated();

  return (
    <LayoutMain title='User Dashboard' description='User Dashboard'>
      <p>User Dashboard</p>
      <Row gutter={16}>
        <Col span={8}>
          <Card title='User Information' bordered={true}>
            {name}
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Purchase History' bordered={true}>
            {role}
          </Card>
        </Col>
      </Row>
    </LayoutMain>
  );
};

export default UserDashboard;
