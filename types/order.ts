import type { ProductId } from "./product";

export type OrderStatus = "pending" | "paid" | "shipped" | "cancelled";

export type OrderId = string;

export type OrderItem = {
  productId: ProductId;
  quantity: number;
  price: number;
  title?: string;
};

export type Order = {
  id: OrderId;
  userId?: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt?: string;
  updatedAt?: string;
};
