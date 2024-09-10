import React from 'react';
import { List } from 'antd';
import { EyeOutlined, LikeOutlined } from '@ant-design/icons';
import { Icon } from '@shared/components';

interface AdvertisementProps {
  name: string,
  imageUrl: string,
  price: number,
  views: number,
  likes: number
}

const AdvertisementCard: React.FC<AdvertisementProps> = ({ name, imageUrl, price, views, likes }) => {
  return (
    <List.Item
    >
      <List.Item.Meta 
        title={name}
      />
      <img 
          src={imageUrl}
          alt={`Изображение ${name}`}
          width='272'
      />
      <Icon icon={LikeOutlined} textForIcon={String(likes)} />
      <Icon icon={EyeOutlined} textForIcon={String(views)} />
    </List.Item>
  );
}

export default AdvertisementCard;