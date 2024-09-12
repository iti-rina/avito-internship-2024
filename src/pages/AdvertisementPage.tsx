// @ts-nocheck
import { AdvertisementType } from '@shared/types';
import { fetchAdvertisementById } from '@entities/advertisement/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@shared/components';
import { LikeOutlined, EyeOutlined } from '@ant-design/icons';
import { EditAdvertisement } from '@features/EditAdvertisement';
import { advertisementsStore } from '@app/store';
import { Space, Typography } from 'antd';

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
    <main style={{paddingTop: '60px', display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography.Title>{advertisement?.name}</Typography.Title>
        <EditAdvertisement advertisement={advertisement} onClose={advertisementsStore.editAdvertisement}/>
      </div>
      <img 
          src={advertisement?.imageUrl}
          alt={`Изображение ${advertisement?.name}`}
          width='272'
      />
      <p>Стоимость: {advertisement?.price}</p>
      <Space>
      <Icon icon={LikeOutlined} textForIcon={String(advertisement?.likes)} />
      <Icon icon={EyeOutlined} textForIcon={String(advertisement?.views)} />
      </Space>

    </main>
  );
};

export default AdvertisementPage;
