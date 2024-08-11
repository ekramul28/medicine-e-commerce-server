import { z } from "zod";

export const productValidatorSchema = z.object({
  body: z.object({
    image: z.string({ message: "image Name is required" }),
    title: z
      .string({ message: "title is required" })
      .max(30, { message: "Name can not be more than 30 characters" }),
    brand: z.string({ message: "brand Name is required" }),
    availableQuantity: z
      .number()
      .min(0, { message: "availableQuantity cannot be less than 0" })
      .nonnegative({ message: "availableQuantity is required" }),
    price: z.number().nonnegative({ message: "price is required" }),
    offerPrice: z.number(),
    offer: z.boolean(),
    rating: z.number().nonnegative({ message: "rating is required" }),
    description: z.string({ message: "description is required" }),
    keyboardType: z.string({ message: "keyboardType is required" }),
  }),
});
