import Stripe from "stripe";
import { STRIPE_API_VERSION, STRIPE_SECRET_KEY } from "./payment.constant";
import { Cart } from "../cart/cart.model";
import { Product } from "../medicine/medicine.model";
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: STRIPE_API_VERSION,
});

const createPaymentLink = async (email: string, total: number) => {
  const cartItems = await Cart.find({ email });
  const productIds = cartItems.map((item) => item.product);
  const products = await Product.find({ _id: { $in: productIds } }).exec();

  const lineItems = cartItems.map((cartItem) => {
    const productD = products.find(
      (product) => product._id.toString() === cartItem.product.toString()
    );

    const title = productD?.title || "";
    const price = productD?.price || 0;
    const image = productD?.image[0] || "";
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: title,
          images: [image],
        },
        unit_amount: Math.round(price) * 100,
      },
      quantity: cartItem?.productQuantity,
    };
  });

  // const lineItems = products.map((cartItem) => {
  //   const product = cartItem._id;
  //   const title = cartItem.title;
  //   const price = Math.round(cartItem.price);
  //   const image = cartItem.image[0];

  //   return {
  //     price_data: {
  //       currency: "usd",
  //       product_data: {
  //         name: title,
  //         images: [image],
  //       },
  //       unit_amount: price * 100,
  //     },
  //     quantity: cartItems?.productQuantity,
  //   };
  // });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://mechanical-keyboard-shop-ten.vercel.app/success",
    cancel_url: "https://mechanical-keyboard-shop-ten.vercel.app/error",
  });
  return session;
};

export const createPaymentLinkService = {
  createPaymentLink,
};
