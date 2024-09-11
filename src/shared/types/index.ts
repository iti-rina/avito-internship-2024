export type AdvertisementType = {
  id: string;
  name: string;
  description?: string;
  price: number;
  createdAt: string;
  views: number;
  likes: number;
  imageUrl?: string;
}

export type Advertisements = {
  advertisements: AdvertisementType[]
}


const OrderStatus = {
  Created: 0,
  Paid: 1,
  Transport: 2,
  DeliveredToThePoint: 3,
  Received: 4,
  Archived: 5,
  Refund: 6
} as const;


export type OrderItemType = AdvertisementType & { count: number; };

export type OrderType = {
  id: string;
  status: typeof OrderStatus[keyof typeof OrderStatus];
  createdAt: string;
  finishedAt?: string;
  items: Array<OrderItemType>;
  deliveryWay: string;
  total: number;
}

export type OrdersType = {
  orders: OrderType[]
}

type Image = {
  id: number;
  url: string;
  name: string;
}
