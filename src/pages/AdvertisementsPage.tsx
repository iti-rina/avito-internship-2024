import React from 'react';
import { AdvertisementsList } from '@features/AdvertisementsList';
import { Pagination } from '@widgets/pagination';
import { advertisementsStore } from '@app/store';

const AdvertisementsPage: React.FC = () => {
  const { advertisements } = advertisementsStore;
  let total = advertisements.length;
  let defaultPageSize = 10;
  let defaultCurrent = 1;

  return (
    <main>
      <h1>Мои объявления</h1>
      <AdvertisementsList />
      <Pagination 
        total={total}
        showTotal={(total) => `Всего ${total}`}
        defaultPageSize={defaultPageSize}
        defaultCurrent={defaultCurrent}
      />
    </main>

  );
}

export default AdvertisementsPage;