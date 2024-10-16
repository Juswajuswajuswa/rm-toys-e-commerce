import mongoose from "mongoose";

const SupplierModelSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: [true, "Supplier name is required"],
    unique: true,
  },
  contactPerson: {
    type  : String,
    required: [true, "Contact person is required"],
  },
  contactNumber: {
    type: String,
    required: true,
  },
  bankMethod: {
    type: String,
  },
  supplierAddress: {
    type: String,
    required: true,
  },
});

const Supplier = mongoose.model("Supplier", SupplierModelSchema);

export default Supplier;
