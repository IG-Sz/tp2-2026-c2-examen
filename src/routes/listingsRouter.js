import express from "express";
import { getAllListings, getListingId, getListingType } from "../controllers/listingsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", authMiddleware, getAllListings);
router.get("/:id", authMiddleware, getListingId);
router.get("/property-type/:type", authMiddleware, getListingType);


export default router;