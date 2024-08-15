import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductControllers } from "./medicine.controller";

const router = express.Router();

router.get("/", ProductControllers.getAllProduct);
router.get("/:id", ProductControllers.getSingleProduct);
router.get("/offerProduct", ProductControllers.getOfferProduct);

export const ProductRoutes = router;
