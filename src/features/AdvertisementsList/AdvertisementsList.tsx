import React from "react";
import { List } from "antd";
import { AdvertisementCard } from "@features/AdvertisementCard";
import { Advertisements } from "@shared/types";

const AdvertisementsList: React.FC<Advertisements> = ({advertisements}) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={advertisements}
      renderItem={item => (
        <AdvertisementCard
          name={item.name}
          imageUrl={item.imageUrl ? item.imageUrl : ''}
          price={item.price}
          views={item.views}
          likes={item.likes}
        />
      )}
    />
  );
}

export default AdvertisementsList;