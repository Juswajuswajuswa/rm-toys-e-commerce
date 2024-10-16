import Category from "../models/category.model.js";
import { handleMakeError } from "../middleware/handleError.js";

export const addCategory = async (req, res, next) => {
  const { categoryName, categoryDescription } = req.body;

  if (!categoryName || !categoryDescription) {
    return next(handleMakeError(400, "Please input required fields!"))
  }


  try {
    const newCategory = new Category({
      categoryName,
      categoryDescription,
    });

    await newCategory.save();

    res.status(200).json(newCategory);
  } catch (error) {
    next(error);
  }
};

export const getCategories = async (req, res, next) => {
    try {
        const getCategories = await Category.find()

        res.status(200).json(getCategories)
    } catch (error) {
        next(error)
    }
}