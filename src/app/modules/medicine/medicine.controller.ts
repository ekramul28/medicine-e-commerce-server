import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./medicine.service";

const getAllProduct = catchAsync(async (req, res) => {
  console.log(req.query);

  const result = await ProductServices.getAllProductFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Product retrieved successfully",
    data: result,
  });
});
const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.getSingleProductFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Product retrieved successfully",
    data: result,
  });
});
const getOfferProduct = catchAsync(async (req, res) => {
  
  const result = await ProductServices.getOfferProductFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "offer Product retrieved successfully",
    data: result,
  });
});
export const ProductControllers = {
  getAllProduct,
  getSingleProduct,
  getOfferProduct,
};
