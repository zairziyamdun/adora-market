export type UserRole = "admin" | "customer";

export type UserId = string;

export type User = {
  id: UserId;
  email: string;
  name?: string;
  role: UserRole;
  createdAt?: string;
};
