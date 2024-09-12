import React, { useEffect } from 'react';
import { List } from 'antd';
import { AdvertisementCard } from '@features/AdvertisementCard';
import { observer } from 'mobx-react-lite';
import { advertisementsStore } from '@app/store';

const AdvertisementsList: React.FC = observer(() => {
  useEffect(() => {
    advertisementsStore.fetchAdvertisements(advertisementsStore.currentPage, advertisementsStore.elementsPerPage);
  }, []);

  if (advertisementsStore.loading) {
    return <div>Загрузка...</div>
  }

  if (advertisementsStore.error) {
    return <div>Error: {advertisementsStore.error}</div>
  }
  
  return (
    <main>
      <List
        itemLayout='vertical'
        size='large'
        dataSource={advertisementsStore.advertisements}
        renderItem={item => (
          <AdvertisementCard
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl ? item.imageUrl : ''}
            price={item.price}
            views={item.views}
            likes={item.likes}
          />
        )}
      />
    </main>
  );
});

export default AdvertisementsList;