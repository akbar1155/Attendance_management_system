import React from 'react';
import { Breadcrumb } from 'antd';
const Breadcrumb1 = () => (
  <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="/Dashboard">Dashboard</a>,
      },
 

    ]}
  />
);
export default Breadcrumb1;