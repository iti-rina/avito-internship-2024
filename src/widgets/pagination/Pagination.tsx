import React from 'react';
import { Pagination, PaginationProps } from 'antd';

const PaginationComponent: React.FC<PaginationProps> = ({total, showTotal, defaultPageSize, defaultCurrent}) => (
  <>
    <Pagination
      total={total}
      showTotal={showTotal}
      defaultPageSize={defaultPageSize}
      defaultCurrent={defaultCurrent}
      showSizeChanger
      locale={{
        items_per_page: 'на странице'
      }}
    />
  </>
);

export default PaginationComponent;