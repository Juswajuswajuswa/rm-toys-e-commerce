import express from 'express'
import { addCategory, deleteCategory, getCategories } from '../controllers/category.controller.js'

const router = express.Router()

router.post(`/add-category`, addCategory)
router.get(`/get-categories`, getCategories)
router.delete(`/delete-category/:categoryId`, deleteCategory)

export default router