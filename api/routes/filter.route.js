import express from 'express'
import { addFilter, deleteFilter, getAllFilters } from '../controllers/filter.controller.js'

const router = express.Router()

router.post(`/add-filter`, addFilter)
router.get(`/get-filters`, getAllFilters)
router.delete(`/delete-filter/:filterId`, deleteFilter)



export default router

