export type CartType = {
  id: number;
  quantity: number;
  userId: number;
  shoeId: number;
  shoePrice: number;
};

export type GetCartType = {
  id: number;
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
