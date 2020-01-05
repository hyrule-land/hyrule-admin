import React from 'react';
import ProLayout, {
  PageHeaderWrapper,
} from '@ant-design/pro-layout';

const BasicLayout = props => {
  const { children } = props;

  return (
    <ProLayout>
      <PageHeaderWrapper>
        {children}
      </PageHeaderWrapper>
    </ProLayout>
  )
}

export default BasicLayout;