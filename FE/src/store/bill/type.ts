export type BillType = {
  id: number;
  quantity: number;
  userId: number;
  shoeId: number;
  shoeName: string;
  shoeImage: string;
  shoePrice: number;
  shoeSalePrice?: number;
  billStatus: string;
  billReceived: boolean;
};

export type GetBillType = {
  id: number;
};

export type GetBillByUserIdType = {
  userId: number;
};

export type CreateBillType = {
  quantity: number;
  sizeCode: string;
  userId: number;
  shoeId: number;
};

export type UpdateBillType = {
  billStatus: string;
  billReceived: boolean;
};

export type DeleteBillType = GetBillType;
