import express from "express"
import { createPropery, deleteProperty, getProperty, getallProperty, paginateallproperty, searchproperty, updateProperty } from "../controllers/properties-controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

router.post("/", verifyAdmin, createPropery);
router.put("/:id", verifyAdmin, updateProperty);
router.delete("/:id", verifyAdmin, deleteProperty);
router.get("/:id", getProperty);
router.get("/", getallProperty);
router.get("/search/:key", searchproperty);
router.get("/find/page", paginateallproperty);

export default router