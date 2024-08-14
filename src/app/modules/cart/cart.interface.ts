import { Types } from "mongoose";

export type TCart = {
  product: string;
  productQuantity: number;
  email: string;
  phoneNo: string;
  createdAt?: number;
  updatedAt?: number;
};
