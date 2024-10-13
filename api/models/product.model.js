import mongoose from "mongoose";


const ProductModelSchema = new mongoose.Schema({
 
    productName: {
        type: String,
        required: [true, "product name is required"],
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    productDetails: {
        type: Array,
        required: true
    },
    
    stocks: {
        type: Number,
        required: true,
        default: 0
    },

    discount: {
        type: Number,
        default: 0
    },

    productImages: {
        type: Array,
        required: true
    },

    isBestProduct: {
        type: Boolean,
        default: false
    }
})

const Product = mongoose.model("Product", ProductModelSchema)

export default Product