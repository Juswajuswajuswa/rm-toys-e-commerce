import mongoose from "mongoose";

const StocksModelSchema = new mongoose.Schema({

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        unique: true
    },

    stockQuantity: {
        type: Number,
        required: true,
        default: 0
    }

}, {timestamps: true})

const Stocks = mongoose.model("Stocks", StocksModelSchema)

export default Stocks