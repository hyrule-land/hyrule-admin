import React, { useState, useEffect } from 'react';
import ProLayout, {
  PageHeaderWrapper,
} from '@ant-design/pro-layout';
import Link from 'umi/link';
import mockMenuData from './mockMenuData';
import { getMenuData } from '@ant-design/pro-layout';
import routes from '../../config/routes/';

// 从路由配置里面加载菜单信息
// 需要根据从服务端获取的菜单进行对比，然后做路由的权限校验和拦截
const { menuData: routerMenuData } = getMenuData(
  routes,
);

console.log(routerMenuData);

const BasicLayout = props => {
  // 模拟加载来自服务端的菜单
  const [menuData] = useState(mockMenuData);
  // const [menuData, setMenuData] = useState(routerMenuData);
  const [loading]= useState(false);
  const { children } = props;

  return (
    <ProLayout
      menuDataRender={() => menuData}
      title="hyrule admin"
      loading={loading}
      siderWidth={220}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
          return defaultDom;
        }

        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
    >
      <PageHeaderWrapper>
        {children}
      </PageHeaderWrapper>
    </ProLayout>
  )
}

export default BasicLayout;