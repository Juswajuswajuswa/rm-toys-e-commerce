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
        required: true
    },

    discount: {
        type: Number
    },

    productImages: {
        type: Array,
        required: true
    }
})

const Product = mongoose.model("Product", ProductModelSchema)

export default Product