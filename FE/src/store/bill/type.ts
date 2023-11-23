export type BillType = {
  id: number;
  quantity: number;
  userName: string;
  shoeId: number;
  shoeName: string;
  shoeImage: string;
  shoePrice: number;
  shoeSize: number;
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
  id: number;
  quantity: number;
  sizeCode: string;
  billStatus: string;
  billReceived: boolean;
};

export type DeleteBillType = GetBillType;
