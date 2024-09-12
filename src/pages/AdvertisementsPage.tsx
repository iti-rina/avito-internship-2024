import React from 'react';
import { AdvertisementsList } from '@features/AdvertisementsList';
import { Pagination } from '@widgets/pagination';
import { advertisementsStore } from '@app/store';
import { NewAdvertisement } from '@features/NewAdvertisement';
import { Typography } from 'antd';
import SearchBar from '@widgets/header/SearchBar';

const { Title } = Typography;

const AdvertisementsPage: React.FC = () => {
  const { advertisements } = advertisementsStore;

  return (
    <main style={{paddingTop: '60px', display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Title>Мои объявления</Title>
          <NewAdvertisement />
        </div>
        <SearchBar />
        <AdvertisementsList />
        <Pagination />
    </main>

  );
}

export default AdvertisementsPage;