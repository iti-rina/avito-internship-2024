import React from 'react';
import { OrderType } from '@shared/types';
import { List } from 'antd';

const orderStatuses = {
  0: 'Создан',
  1: 'Оплачен',
  2: 'В пути',
  3: 'Доставлен в пункт выдачи',
  4: 'Получен',
  5: 'В архиве',
  6: 'Оформлен возврат'
};
const OrderCard: React.FC<OrderType> = ({ id, status, createdAt, finishedAt=null, items, total }) => {
  const dateOfCreation = new Date(createdAt).toLocaleDateString('ru', {month: 'long', day: 'numeric'});
  const dateOfFinish = finishedAt ? new Date(finishedAt).toLocaleDateString('ru', {month: 'long', day: 'numeric'}) : null;
  const currentStatus = orderStatuses[status];
  return (
    <List.Item>
      <List.Item.Meta 
        title={`Заказ от ${dateOfCreation}`}
      />
      <p>{id}</p>
      <p>{currentStatus}</p>
      { dateOfFinish ? <p>Заказ будет завершён {dateOfFinish}</p> : <></>}
      <p>Товаров в заказе: {items.length}</p>
      <p>{total} руб.</p>
      <button>Показать все товары</button>
    </List.Item>
  );
}

export default OrderCard;

