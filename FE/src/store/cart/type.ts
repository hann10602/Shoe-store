export type CartType = {
  id: number;
  quantity: number;
  maxQuantity: number;
  userId: number;
  shoeId: number;
  shoeName: string;
  shoeImage: string;
  sizeCode: string;
  shoePrice: number;
  shoeSalePrice?: number;
};

export type GetCartType = {
  id: number;
};

export type GetCartByUserIdType = {
  userId: number;
};

export type OrderCartType = {
  idList: number[];
};

export type CreateCartType = {
  quantity: number;
  sizeCode: string;
  userId: number;
  shoeId: number;
};

export type UpdateCartType = {
  id: number;
  quantity: number;
};

export type DeleteCartType = GetCartType;
