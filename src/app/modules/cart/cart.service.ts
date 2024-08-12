import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TCart } from "./cart.interface";
import { Cart } from "./cart.model";
import mongoose from "mongoose";
import { Product } from "../medicine/medicine.model";

const addProductFromDB = async (payload: TCart) => {
  if (!payload.email) {
    throw new AppError(httpStatus.NOT_FOUND, "login  first");
  }
  const productData = await Product.findById(payload.product);
  if (!productData) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }

  const carts = await Cart.find({ email: payload.email });
  const isExistInCard = carts.filter(
    (card) => card.product === payload.product
  );
  if (isExistInCard.length > 0) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product already added ");
  }

  const result = await Cart.create(payload);
  return result;
};
const getProductFromDB = async (email: string) => {
  const cartItems = await Cart.find({ email });
  const productIds = cartItems.map((item) => item.product);
  const products = await Product.find({ _id: { $in: productIds } }).exec();
  const cartItemsWithProducts = cartItems.map((cartItem) => {
    const product = products.find(
      (product) => product._id.toString() === cartItem.product.toString()
    );
    return {
      _id: cartItem._id,
      product,
      productQuantity: cartItem.productQuantity,
      email: cartItem.email,
      createdAt: cartItem?.createdAt,
      updatedAt: cartItem?.updatedAt,
    };
  });
  return cartItemsWithProducts;
};

const deleteProductFromDB = async (idsToDelete: string[]) => {
  const filterId = {
    _id: { $in: idsToDelete.map((id) => new mongoose.Types.ObjectId(id)) },
  };
  const result = await Cart.deleteMany(filterId);
  return result;
};

const updateProductFromDB = async (data: object, id: string) => {
  const result = await Cart.findByIdAndUpdate(id, data, { new: true });
  return result;
};
export const CartServices = {
  addProductFromDB,
  getProductFromDB,
  deleteProductFromDB,
  updateProductFromDB,
};
