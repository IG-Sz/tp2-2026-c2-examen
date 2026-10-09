import express from "express";
import { getAllListings, getListingId, getListingsType, getListingsPrice, getListingsHost } from "../controllers/listingsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", getAllListings);
router.get("/property-type/:type", authMiddleware, getListingsType);
router.get("/with-total-price", authMiddleware, getListingsPrice);
router.get("/host/:host_id", authMiddleware, getListingsHost);
router.get("/:id", authMiddleware, getListingId);

export default router;