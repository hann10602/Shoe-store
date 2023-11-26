export type BillType = {
  id: number;
  quantity: number;
  userName: string;
  shoeName: string;
  shoeSize: number;
  createdDate: string;
  billStatus: string;
  billReceived: boolean;
  totalPrice: number;
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
  totalPrice: number;
  userId: number;
  shoeId: number;
};

export type UpdateBillType = {
  id: number;
  billStatus: string;
  billReceived: boolean;
};

export type DeleteBillType = GetBillType;
