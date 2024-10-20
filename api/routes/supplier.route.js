import express from "express";
import { addSupplier, deleteSupplier, editSupplier, getSingleSupplier, getSuppliers } from "../controllers/supplier.controller.js";

const router = express.Router()

router.post(`/add-supplier`, addSupplier)
router.get(`/get-suppliers`, getSuppliers)
router.delete(`/delete-supplier/:supplierId`, deleteSupplier)
router.get(`/get-supplier/:supplierId`, getSingleSupplier)
router.put(`/edit-supplier/:supplierId`, editSupplier)


export default router