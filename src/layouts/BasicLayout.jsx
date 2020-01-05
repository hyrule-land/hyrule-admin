import React, { useState, useEffect } from 'react';
import ProLayout, {
  PageHeaderWrapper,
} from '@ant-design/pro-layout';
import mockMenuData from './mockMenuData';

const BasicLayout = props => {
  const [menuData, setMenuData] = useState(mockMenuData);
  const [loading, setLoading]= useState(false);
  const { children } = props;

  return (
    <ProLayout
      menuDataRender={() => menuData}
      title="hyrule admin"
      loading={loading}
    >
      <PageHeaderWrapper>
        {children}
      </PageHeaderWrapper>
    </ProLayout>
  )
}

export default BasicLayout;