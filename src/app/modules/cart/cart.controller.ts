import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CartServices } from "./cart.service";

const addProduct = catchAsync(async (req, res) => {
  const result = await CartServices.addProductFromDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "product added successfully",
    data: result,
  });
});

const getProduct = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await CartServices.getProductFromDB(email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "product get successfully",
    data: result,
  });
});
const deleteProduct = catchAsync(async (req, res) => {
  const result = await CartServices.deleteProductFromDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "delete product successfully",
    data: result,
  });
});
const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await CartServices.updateProductFromDB(data, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "updated  successfully",
    data: result,
  });
});
const getTotalPrice = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await CartServices.getProductFromDB(email);
  let totalPriceArr: number[] = [];
  let discountPriceArr: number[] = [];
  result.forEach((cart) => {
    const productQuantity = cart.productQuantity;
    const product = cart.product as any;
    const discount: number = product?.discount ? product?.discount : 0;
    const price: number = product?.price * productQuantity;

    totalPriceArr.push(price);
    discountPriceArr.push(discount);
  });
  const totalPrice = totalPriceArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    1
  );
  let discountPrice = 0;
  if (totalPrice > 100) {
    discountPrice = discountPriceArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      1
    );
  }

  const totalCart = result.length;
  let total = totalPrice - discountPrice;
  if (totalCart > 0 && total > 100) {
    total = totalPrice - discountPrice - 50;
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "total value get successful",
    data: {
      totalPrice,
      discountPrice,
      total,
      totalCart,
    },
  });
});

export const CardController = {
  addProduct,
  getProduct,
  deleteProduct,
  getTotalPrice,
  updateProduct,
};
