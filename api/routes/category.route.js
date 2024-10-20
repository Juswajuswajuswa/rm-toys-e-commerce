import express from 'express'
import { addCategory, deleteCategory, editCategory, getCategories, getSingleCategory } from '../controllers/category.controller.js'

const router = express.Router()

router.post(`/add-category`, addCategory)
router.get(`/get-categories`, getCategories)
router.delete(`/delete-category/:categoryId`, deleteCategory)
router.put(`/edit-category/:categoryId`, editCategory)
router.get(`/get-single/:categoryId`, getSingleCategory)

export default router