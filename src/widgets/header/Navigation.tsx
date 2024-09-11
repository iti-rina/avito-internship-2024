import React from 'react';
import { Menu, MenuProps } from 'antd';
import { useState } from 'react';

type MenuItem = Required<MenuProps>['items'];

const tabs: MenuItem = [
  {
    label: 'Объявления',
    key: 'advertisements'
  },
  {
    label: 'Заказы',
    key: 'orders'
  }
]

const Navigation: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('advertisements');
  const handleTabClick: MenuProps['onClick'] = (event) => {
    if (currentTab !== event.key) {
      setCurrentTab(event.key);
    }
  }
  return (
    <Menu 
    onClick={handleTabClick}
    selectedKeys={[currentTab]} 
    mode='horizontal' 
    items={tabs} />
  );
}

export default Navigation;