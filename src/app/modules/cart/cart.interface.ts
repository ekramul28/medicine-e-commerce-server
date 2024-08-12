import { Types } from "mongoose";

export type TCart = {
  product: string;
  productQuantity: number;
  email: string;
  createdAt?: number;
  updatedAt?: number;
};
