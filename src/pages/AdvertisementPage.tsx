// @ts-nocheck
import { AdvertisementType } from '@shared/types';
import { fetchAdvertisementById } from '@entities/advertisement/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@shared/components';
import { LikeOutlined, EyeOutlined } from '@ant-design/icons';
import { EditAdvertisement } from '@features/EditAdvertisement';
import { advertisementsStore } from '@app/store';

const AdvertisementPage = () => {
  const { id } = useParams();
  if (!id) return <div>Ошибка загрузки объявления</div>

  const [advertisement, setAdvertisement] = useState();

  useEffect(() => {
    (async () => {
      try {
        if (!id) {
          return <div>Ошибка при загрузке объявления</div>
        }
        const advertisement = await fetchAdvertisementById(id);
        setAdvertisement(advertisement);
      } catch (error) {
      }
    })();
  }, [id]);

  return (
    <main>
      <h1>{advertisement?.name}</h1>
      <EditAdvertisement advertisement={advertisement} onClose={advertisementsStore.editAdvertisement}
    />
      <img 
          src={advertisement?.imageUrl}
          alt={`Изображение ${advertisement?.name}`}
          width='272'
      />
      <p>Стоимость: {advertisement?.price}</p>
      <Icon icon={LikeOutlined} textForIcon={String(advertisement?.likes)} />
      <Icon icon={EyeOutlined} textForIcon={String(advertisement?.views)} />

    </main>
  );
};

export default AdvertisementPage;
