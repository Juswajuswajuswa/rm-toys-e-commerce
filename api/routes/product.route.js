import express from 'express'
import { addProduct } from '../controllers/product.controller.js'
import { requireAdmin, requireAuth } from '../middleware/auth.middleware.js'


const router = express.Router()

router.post(`/`, requireAuth, requireAdmin, addProduct)


export default router