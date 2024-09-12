import React from 'react';
import { OrdersList } from '@features/OrdersList';
import { Pagination } from '@widgets/pagination';
import { ordersStore } from '@app/store';
import { FilterComponent } from '@widgets/filter/idex';

const OrdersPage: React.FC = () => {
  const { orders } = ordersStore;
  let total = orders.length;
  let defaultPageSize = 10;
  let defaultCurrent = 1;

  return (
    <>
      <FilterComponent />
      <main>
        <h1>Заказы</h1>
        <OrdersList />
        <Pagination 
          total={total}
          showTotal={(total) => `Всего ${total}`}
          defaultPageSize={defaultPageSize}
          defaultCurrent={defaultCurrent}
        />
      </main>
    </>

  );
}

export default OrdersPage;