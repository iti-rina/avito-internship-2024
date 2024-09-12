import React from 'react';
import { OrdersList } from '@features/OrdersList';
import { Pagination } from '@widgets/pagination';
import { ordersStore } from '@app/store';
import { FilterComponent } from '@widgets/filter/idex';

const OrdersPage: React.FC = () => {
  return (
    <div style={{paddingTop: '60px'}}>
      <FilterComponent />
      <main>
        <h1>Заказы</h1>
        <OrdersList />
      </main>
    </div>

  );
}

export default OrdersPage;