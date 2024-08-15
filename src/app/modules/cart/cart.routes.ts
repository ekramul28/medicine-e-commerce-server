import express from "express";
import { CardController } from "./cart.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.interface";

const router = express.Router();

router.post(
  "/",
  auth(USER_ROLE.admin, USER_ROLE.user),
  CardController.addProduct
);
router.get(
  "/:email",
  auth(USER_ROLE.admin, USER_ROLE.user),
  CardController.getProduct
);
router.get(
  "/price/:email",
  auth(USER_ROLE.admin, USER_ROLE.user),
  CardController.getTotalPrice
);
router.delete("/", auth(USER_ROLE.admin), CardController.deleteProduct);
router.patch("/:id", auth(USER_ROLE.admin), CardController.updateProduct);

export const CartRoute = router;
