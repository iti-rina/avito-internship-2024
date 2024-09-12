import React from 'react';
import { Pagination, PaginationProps } from 'antd';
import { observer } from 'mobx-react-lite';
import { advertisementsStore } from '@app/store';

const PaginationComponent: React.FC<PaginationProps> = observer(({}) => {
  const handlePageChange = (page: number) => {
    advertisementsStore.setPage(page);
  }
  const handleChangePageSize = (current: number, size: number) => {
    advertisementsStore.setPageSize(size);
  }
  return (
    <Pagination
      current={advertisementsStore.currentPage}
      pageSize={advertisementsStore.elementsPerPage}
      onChange={(page) => handlePageChange(page)}
      total={advertisementsStore.totalCount}
      showTotal={() => `Всего объявлений ${advertisementsStore.totalCount}`}
      showSizeChanger
      onShowSizeChange={handleChangePageSize}
      locale={{
        items_per_page: 'на странице'
      }}
    />
  );

});

export default PaginationComponent;