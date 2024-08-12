import Stripe from "stripe";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { createPaymentLinkService } from "./payment.service";

const stripePayment = catchAsync(async (req, res) => {
  const { email, total } = req.body;
  const result = await createPaymentLinkService.createPaymentLink(email, total);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "link ",
    data: result,
  });
});

export const LinkControllers = {
  stripePayment,
};
