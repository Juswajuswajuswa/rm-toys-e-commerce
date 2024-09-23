import express from "express";
import { requireAdmin, requireAuth } from "../middleware/auth.middleware.js";
import { getAll, updateProfile } from "../controllers/user.controller.js";


const router = express.Router()

router.post(`/update/:id`, requireAuth, updateProfile)
router.get(`/getAll`, getAll )

export default router