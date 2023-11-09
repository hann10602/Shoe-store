export type UserType = {
  id: number;
  quantity: number;
  userId: number;
  shoeId: number;
  shoePrice: number;
};

export type GetUserType = {
  id: number;
};

export type CreateUserType = {
  userId: number;
  shoeId: number;
};

export type UpdateUserType = {
  id: number;
  quantity: number;
};

export type DeleteUserType = GetUserType;
