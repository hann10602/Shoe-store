export type ShoeType = {
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  description?: string;
  quantity: number;
  averageStar: number;
  category: string;
  shoeSizes: string[];
  imageUrls: string[];
};

export type GetShoeType = {
  id: number;
};

export type GetShoesByCategoryType = {
  categoryCode: string;
};

export type SearchShoes = {
  search?: string;
  category?: string;
  size?: string;
  priceFrom?: string;
  priceTo?: string;
};

export type CreateShoeType = {
  name: string;
  price: number;
  salePrice?: number;
  description: string;
  quantity: number;
  shoeSizes: string[];
  imageUrls: string[];
  category: string;
};

export type UpdateShoeType = {
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  description: string;
  quantity: number;
  shoeSizes: string[];
  imageUrls: string[];
  category: string;
};

export type DeleteShoeType = GetShoeType;
