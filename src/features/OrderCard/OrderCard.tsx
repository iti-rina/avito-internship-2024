//@ts-nocheck

import React, { useState } from 'react';
import { OrderType } from '@shared/types';
import { Divider, List, Modal } from 'antd';
import { AdvertisementCard } from '@features/AdvertisementCard';

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

  const [openModal, setOpenModal] = useState(false);

  return (
    <List.Item>
      <List.Item.Meta 
        title={`Заказ от ${dateOfCreation}`}
      />
      <p>№ {id}</p>
      <p>{currentStatus}</p>
      { dateOfFinish ? <p>Заказ будет завершён {dateOfFinish}</p> : <></>}
      <p>Товаров в заказе: {items.length}</p>
      <p>{total} руб.</p>
      <button onClick={() => setOpenModal(true)}>Показать все товары</button>
      <Modal
        title='Товары в заказе'
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={null}
      >
        {items.map(item => {
          const { id, name, imageUrl, price, views, likes } = item;
          return (
            <>
            <AdvertisementCard key={id} 
              id={id} 
              name={name} 
              imageUrl={imageUrl} 
              price={price} 
              views={views} 
              likes={likes} 
            />
            <Divider />
            </>
          );
        })}
      </Modal>
    </List.Item>
  );
}

export default OrderCard;
