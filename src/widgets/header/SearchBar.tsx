import React from 'react';
import { Input, GetProps } from 'antd';

const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const SearchBar: React.FC = () => {
  return (
    <Search placeholder='Поиск по объявлениям' onSearch={onSearch} enterButton />
  );
}

export default SearchBar;