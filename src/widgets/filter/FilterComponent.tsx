import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { observer } from 'mobx-react-lite';
import { ordersStore } from '@app/store';

const items: MenuProps['items'] = [
  {
    key: '0',
    label: 'Создан'
  },
  {
    key: '1',
    label: 'Оплачен'
  },
  {
    key: '2',
    label: 'В пути'
  },
  {
    key: '3',
    label: 'Доставлен в пункт выдачи'
  },
  {
    key: '4',
    label: 'Получен'
  },
  {
    key: '5',
    label: 'В архиве'
  },
  {
    key: '6',
    label: 'Оформлен возврат'
  }
];

const sortBy: MenuProps['items'] = [
  {key: 'asc', label: 'Сначала дешевле'},
  {key: 'desc', label: 'Сначала дороже'},
];

const FilterMenu: React.FC = observer(() => {
  const handleMenuClick: MenuProps['onClick'] = (event) => {
    let status = event.key;
    ordersStore.filter = `status=${status}`;
    ordersStore.getOrders();
  }

  const handleSortClick: MenuProps['onClick'] = (event) => {
    let direction = event.key;
    ordersStore.sort = `_sort=total&_order=${direction}`;
    ordersStore.getOrders();
  }

  return (
    <>
      <Dropdown menu={{ items, onClick: handleMenuClick }} placement="bottomRight">
        <Button>Статус заказа:</Button>
      </Dropdown>
      <Dropdown menu={{ items: sortBy, onClick: handleSortClick }} placement="bottomRight">
        <Button>Сортировать по сумме заказа</Button>
      </Dropdown>
    </>
  )
});



export default FilterMenu;