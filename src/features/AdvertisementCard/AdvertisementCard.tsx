import React from 'react';
import { List } from 'antd';
import { EyeOutlined, LikeOutlined } from '@ant-design/icons';
import { Icon } from '@shared/components';
import { Link } from 'react-router-dom';

interface AdvertisementProps {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  views: number,
  likes: number
}

const AdvertisementCard: React.FC<AdvertisementProps> = ({ id, name, imageUrl, price, views, likes }) => {
  return (
    <Link to={`/advertisements/${id}`}>
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
    </Link>
  );
}

export default AdvertisementCard;