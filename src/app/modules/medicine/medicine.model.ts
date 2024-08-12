import { model, Schema } from "mongoose";
import { TProduct } from "./medicine.interface";

const productSchema = new Schema<TProduct>(
  {
    image: {
      type: [String],
      required: [true, "image Name is required"],
    },
    title: {
      type: String,
      required: [true, "title is required"],
      maxlength: [30, "Name can not be more than 30 characters"],
    },
    brand: {
      type: String,
      required: [true, "brand Name is required"],
    },
    availableQuantity: {
      type: Number,
      required: [true, "availableQuantity is required"],
      min: [0, "availableQuantity cannot be less than 0"],
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
    rating: {
      type: Number,
      required: [true, "rating is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },

    discount: {
      type: Number,
    },
    offer: {
      type: Boolean,
      default: false,
    },
    offerPrice: {
      type: Number,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Product = model("Product", productSchema);
