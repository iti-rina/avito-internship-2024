import React, { useEffect } from 'react';
import { List } from 'antd';
import { ordersStore } from '@app/store';
import { OrderCard } from '@features/OrderCard';
import { observer } from 'mobx-react-lite';

const OrdersList: React.FC = observer(() => {
  useEffect(() => {
    ordersStore.getOrders();
  }, []);

  if (ordersStore.loading) {
    return <div>Загрузка...</div>
  }

  if (ordersStore.error) {
    return <div>Error: {ordersStore.error}</div>
  }

  return (
    <List 
      itemLayout='vertical'
      size='large'
      dataSource={ordersStore.orders}
      renderItem={item => (
        <OrderCard 
          id={item.id}
          status={item.status}
          createdAt={item.createdAt}
          finishedAt={item?.finishedAt ? item.finishedAt : ''}
          items={item.items}
          deliveryWay={item.deliveryWay}
          total={item.total}
        />
      )}

    />

  );
});

export default OrdersList;