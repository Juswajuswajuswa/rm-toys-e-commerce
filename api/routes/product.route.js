import express from 'express'
import { addProduct, getProducts } from '../controllers/product.controller.js'
import { requireAdmin, requireAuth } from '../middleware/auth.middleware.js'


const router = express.Router()

router.post(`/add-product`,addProduct)
router.get(`/get-products`, getProducts)


export default router