import React from 'react';
import { Input, GetProps } from 'antd';
import { observer } from 'mobx-react-lite';
import { advertisementsStore } from '@app/store';

const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
  let searchQuery = value.trim().toLowerCase();
  advertisementsStore.searchAvertisementsByName(searchQuery);
};

const SearchBar: React.FC = observer(() => {
  return (
    <Search placeholder='Поиск по объявлениям' onSearch={onSearch} enterButton />
  );
})

export default SearchBar;