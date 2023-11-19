export type SizeType = {
  id: number;
  name: string;
  code: string;
};

export type GetSizeType = {
  id: number;
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
