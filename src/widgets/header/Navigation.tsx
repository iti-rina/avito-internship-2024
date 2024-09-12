import React from 'react';
import { Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  const currentLocation = useLocation();
  const [currentTab, setCurrentTab] = useState(currentLocation.pathname);
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
    >
      <Menu.Item key='/advertisements'>
        <Link to='/advertisements'>Объявления</Link>
      </Menu.Item>
      <Menu.Item key='/orders'>
        <Link to='/orders'>Заказы</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navigation;