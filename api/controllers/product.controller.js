export const addProduct = async (req, res, next) => {

   

    console.log(req.body)

    res.status(200).json(req.body)
    try {
        
    } catch (error) {
        next(error)
    }
}