export type OrderType = {
  id: number;
  quantity: number;
  userId: number;
  shoeId: number;
  shoeName: string;
  shoeImage: string;
  shoePrice: number;
  shoeSalePrice?: number;
  orderStatus: string;
  orderReceived: boolean;
};

export type GetOrderType = {
  id: number;
};

export type GetOrderByUserIdType = {
  userId: number;
};

export type CreateOrderType = {
  quantity: number;
  sizeCode: string;
  userId: number;
  shoeId: number;
};

export type UpdateOrderType = {
  orderStatus: string;
  orderReceived: boolean;
};

export type DeleteOrderType = GetOrderType;
