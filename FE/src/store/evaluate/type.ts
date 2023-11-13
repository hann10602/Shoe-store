export type EvaluateType = {
  id: number;
  star: number;
  comment: string;
  userName: string;
  createdDate: string;
};

export type GetEvaluateType = {
  id: number
};

export type GetEvaluatesByShoeIdType = {
  shoeId: number;
};

export type CreateEvaluateType = {
  star: number;
  comment: string;
  userId: number;
  shoeId: number;
};

export type DeleteEvaluateType = GetEvaluateType;
