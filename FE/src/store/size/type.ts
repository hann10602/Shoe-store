export type SizeType = {
  id: number;
  name: string;
  code: string;
};

export type SizeQuantityType = {
  quantity: number;
};

export type GetSizeType = {
  id: number;
};

export type GetQuantityType = {
  shoeId: number;
  sizeCode: string;
};

export type GetSizeByShoeIdType = {
  shoeId: number;
};

export type CreateSizeType = {
  name: string;
  code: string;
};

export type UpdateSizeType = SizeType;

export type DeleteSizeType = GetSizeType;
