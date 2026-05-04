export type ProductId = string;

export type Product = {
  id: ProductId;
  name: string;
  slug?: string;
  description?: string;
  price: number;
  currency?: string;
  imageUrl?: string;
  stock?: number;
  isPublished?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
