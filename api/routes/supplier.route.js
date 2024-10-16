import express from "express";
import { addSupplier } from "../controllers/supplier.controller.js";

const router = express.Router()

router.post(`/add-supplier`, addSupplier)


export default router