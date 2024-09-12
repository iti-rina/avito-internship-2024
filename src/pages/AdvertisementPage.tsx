import { AdvertisementType } from '@shared/types';
import { fetchAdvertisementById } from '@entities/advertisement/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@shared/components';
import { LikeOutlined, EyeOutlined } from '@ant-design/icons';

const AdvertisementPage = () => {
  const { id } = useParams();
  const [advertisement, setAdvertisement] = useState<AdvertisementType | null>(null);

  useEffect(() => {
    (async () => {
      try {
        if (!id) {
          return <div>Ошибка загрузки объявления</div>
        }
        const advertisement = await fetchAdvertisementById(id);
        setAdvertisement(advertisement);
      } catch (error) {
        console.error('Error while fetching an advertisement by id');
      }
    })();
  }, [id]);


  return (

    <main>
      <h1>{advertisement?.name}</h1>
      
      <img 
            src={advertisement?.imageUrl}
            alt={`Изображение ${advertisement?.name}`}
            width='272'
            />
        <Icon icon={LikeOutlined} textForIcon={String(advertisement?.likes)} />
        <Icon icon={EyeOutlined} textForIcon={String(advertisement?.views)} />

    </main>
  );
};

export default AdvertisementPage;