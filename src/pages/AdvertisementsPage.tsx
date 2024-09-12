import React from 'react';
import { AdvertisementsList } from '@features/AdvertisementsList';
import { Pagination } from '@widgets/pagination';
import { advertisementsStore } from '@app/store';
import { NewAdvertisement } from '@features/NewAdvertisement';

const AdvertisementsPage: React.FC = () => {
  const { advertisements } = advertisementsStore;
  let total = advertisements.length;

  return (
    <main>
      <h1>Мои объявления</h1>
      <NewAdvertisement />
      <AdvertisementsList />
      <Pagination />
    </main>

  );
}

export default AdvertisementsPage;