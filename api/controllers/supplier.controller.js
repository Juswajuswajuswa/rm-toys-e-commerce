import Supplier from "../models/supplier.model.js";

export const addSupplier = async (req, res, next) => {
  const {
    supplierName,
    contactPerson,
    contactNumber,
    bankMethod,
    supplierAddress,
  } = req.body;

  try {

    const newSupplier = new Supplier({
        supplierName,
        contactPerson,
        contactNumber,
        bankMethod,
        supplierAddress
    })

    res.status(200).json(newSupplier)

  } catch (error) {
    next(error);
  }
};
