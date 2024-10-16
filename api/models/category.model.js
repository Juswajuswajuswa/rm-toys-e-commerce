import mongoose from "mongoose";

const CategorySchemaModel = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryDescription: {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

const Category = mongoose.model("Category", CategorySchemaModel)

export default Category