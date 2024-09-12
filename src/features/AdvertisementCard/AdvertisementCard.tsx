import React from 'react';
import { useLocation } from 'react-router-dom';
import { Divider, List, Space, Typography } from 'antd';
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
  let { pathname: currentPage} = useLocation();

  return (
    <>
    <Link to={`/advertisements/${id}`}>
      <List.Item
      >
        <Typography.Title level={2}>{name}</Typography.Title>
          <img 
            src={imageUrl}
            alt={`Изображение ${name}`}
            width={currentPage === '/orders' ? 150 : 272}
          />
          <p>Стоимость: {price}</p>
          <Space>
            <Icon icon={LikeOutlined} textForIcon={String(likes)} />
            <Icon icon={EyeOutlined} textForIcon={String(views)} />
          </Space>
      </List.Item>
    </Link>
    <Divider />
    </>
  );
}

export default AdvertisementCard;