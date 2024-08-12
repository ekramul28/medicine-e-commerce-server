import express from "express";
import { CardController } from "./cart.controller";

const router = express.Router();

router.post("/", CardController.addProduct);
router.get("/:email", CardController.getProduct);
router.get("/price/:email", CardController.getTotalPrice);
router.delete("/", CardController.deleteProduct);
router.patch("/:id", CardController.updateProduct);

export const CartRoute = router;
