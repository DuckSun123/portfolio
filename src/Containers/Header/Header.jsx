import React from 'react';
import { Layout, PageHeader } from 'antd';

import './index.less';

const { Header } = Layout;
const HeaderContainer = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 2, width: '100%' }}>
      <PageHeader
        className="site-page-header"
        title="Jae Hyuck Lee"
        extra={[
          <a key="about" href="#aboutContainer">About Me</a>,
          <a key="project" href="#projectContainer">Project</a>,
          <a key="contack" href="#contackContainer">CONTACT</a>,
        ]}
      />
    </Header>
  );
}

export default HeaderContainer;
