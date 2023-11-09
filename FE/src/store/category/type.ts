export type CategoryType = {
  id: number;
  name: string;
  code: string;
};

export type GetCategoryType = {
  id: number;
};

export type CreateCategoryType = {
  name: string;
  code: string;
};

export type UpdateCategoryType = CategoryType;

export type DeleteCategoryType = GetCategoryType;
