import Product from "../models/product.model.js"

export const addProduct = async (req, res, next) => {

    const {productName, price ,productDescription, productDetails, stocks, discount, productImages, filters} = req.body

    try {
        const newProduct = new Product({
            productName,
            price,
            productDescription,
            productDetails,
            stocks,
            discount,
            productImages,
            filters
        })

        await newProduct.save()
        res.status(200).json(newProduct)
    } catch (error) {
        next(error)
    }
}

export const getProducts = async (req, res, next ) => {
    try {
        const products = await Product.find()

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}

export const deleteProduct = async (req, res, next) => {
    
}