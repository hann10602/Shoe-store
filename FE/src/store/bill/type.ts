export type BillType = {
  id: number;
  quantity: number;
  userName: string;
  shoeId: number;
  shoeName: string;
  shoeSize: number;
  createdDate: string;
  status: string;
  received: boolean;
  isEvaluate: boolean;
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

export type CreateBillFromCartType = {
  cartIdList: number[];
};

export type UpdateBillType = {
  id: number;
  status: string;
  isEvaluate: boolean;
  received: boolean;
};

export type DeleteBillType = GetBillType;
