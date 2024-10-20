import Supplier from "../models/supplier.model.js";
import { handleMakeError } from "../middleware/handleError.js";

export const addSupplier = async (req, res, next) => {
  const {
    supplierName,
    contactPerson,
    contactNumber,
    supplierPay,
    supplierAddress,
  } = req.body;

  if (
    !supplierName ||
    !contactPerson ||
    !contactNumber ||
    !supplierPay ||
    !supplierAddress
  ) {
    return next(handleMakeError(400, "Please input required fields!"));
  }

  try {
    const newSupplier = new Supplier({
      supplierName,
      contactPerson,
      contactNumber,
      supplierPay,
      supplierAddress,
    });

    await newSupplier.save();
    res.status(200).json(newSupplier);
  } catch (error) {
    next(error);
  }
};

export const getSuppliers = async (req, res, next) => {
  try {
    const getSuppliers = await Supplier.find();
    if (!getSuppliers)
      return next(handleMakeError(400, "no suppliers availabe"));
    res.status(200).json(getSuppliers);
  } catch (error) {
    next(error);
  }
};

export const deleteSupplier = async (req, res, next) => {
  const { supplierId } = req.params;

  try {
    const singleSupplier = await Supplier.findById(supplierId);

    if (!singleSupplier)
      return next(handleMakeError(400, "Supplier not found!"));

    await Supplier.findByIdAndDelete(supplierId);

    res.status(200).json({ message: "Successfully deleted the supplier" });
  } catch (error) {
    next(error);
  }
};

export const editSupplier = async (req, res, next) => {
  const { supplierId } = req.params;
  const {
    supplierName,
    contactPerson,
    contactNumber,
    supplierPay,
    supplierAddress,
  } = req.body;

  try {
    const updateSupplier = await Supplier.findByIdAndUpdate(supplierId, {
      supplierName,
      contactPerson,
      contactNumber,
      supplierPay,
      supplierAddress,
    });

    if (!updateSupplier) return next(handleMakeError(400, "Supplier not found!"));

    res.status(200).json(updateSupplier)
    
  } catch (error) {
    next(error);
  }
};

export const getSingleSupplier = async (req, res, next) => {
  const { supplierId } = req.params;

  try {
    const getSingleSupplier = await Supplier.findById(supplierId);
    if (!getSingleSupplier)
      return next(handleMakeError(400, "Supplier not found"));
    res.status(200).json(getSingleSupplier);
  } catch (error) {
    next(error);
  }
};
