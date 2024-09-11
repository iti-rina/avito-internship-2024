import React from 'react';
import Navigation from './Navigation'
import SearchBar from './SearchBar';
import { Space } from 'antd';

const Header: React.FC = () => {
  return (
    <header>
        <Navigation />
        <SearchBar />
    </header>
  );
}

export default Header;