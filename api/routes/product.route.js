import express from 'express'
import { addProduct, deleteProduct, editProduct, getProducts, getSingleProduct } from '../controllers/product.controller.js'
import { requireAdmin, requireAuth } from '../middleware/auth.middleware.js'


const router = express.Router()

router.post(`/add-product`,addProduct)
router.get(`/get-products`, getProducts)
router.delete(`/delete-product/:productId`, deleteProduct)
router.put(`/edit-product/:id`, editProduct)
router.get(`/get-product/:id`, getSingleProduct)


export default router   