import { model, Schema } from "mongoose";
import { TCart } from "./cart.interface";

const cartSchema = new Schema<TCart>(
  {
    product: {
      type: String,
    },

    productQuantity: {
      type: Number,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Cart = model("Cart", cartSchema);
