import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserService } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const result = await UserService.createUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "CreateUser successfully",
    data: result,
  });
});
const getAllUser = catchAsync(async (req, res) => {
  const result = await UserService.getAllUserIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All user get successfully",
    data: result,
  });
});
const getSingleUser = catchAsync(async (req, res) => {
  const result = await UserService.getSingleUserIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "single user get successfully",
    data: result,
  });
});

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
};
