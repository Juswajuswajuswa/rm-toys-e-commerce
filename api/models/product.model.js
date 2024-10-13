import mongoose from "mongoose";


const ProductModelSchema = new mongoose.Schema({
 
    productName: {
        type: String,
        required: [true, "product name is required"],
        unique: true
    },

    price: {
        type: Number,
        min: 0,
        required: true
    },

    productDescription: {
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
    },

    filters: {
        type: Array,
        required: true
    }
})

const Product = mongoose.model("Product", ProductModelSchema)

export default Product