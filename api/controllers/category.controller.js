import Category from "../models/category.model.js";
import { handleMakeError } from "../middleware/handleError.js";

export const addCategory = async (req, res, next) => {
  const { categoryName, categoryDescription } = req.body;

  if (!categoryName || !categoryDescription) {
    return next(handleMakeError(400, "Please input required fields!"));
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
    const getCategories = await Category.find();

    res.status(200).json(getCategories);
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  const { categoryId } = req.params;

  try {
    const singleCategory = await Category.findById(categoryId);

    if (!singleCategory)
      return next(handleMakeError(400, "Category not found!"));

    await Category.findByIdAndDelete(categoryId);

    res.status(200).json({ message: "Category Deleted" });
  } catch (error) {
    next(error);
  }
};

export const editCategory = async (req, res, next) => {
  const { categoryId } = req.params;
  const { categoryName, categoryDescription } = req.body;

  if (!categoryName || !categoryDescription) return next(handleMakeError(400, "Please input rquired fields"))

  try {
    const updateCategory = await Category.findByIdAndUpdate(categoryId, {
      categoryName,
      categoryDescription,
    });

    if (!updateCategory)
      return next(handleMakeError(400, "Category not found!"));

    res.status(200).json({message: "Category Updated!"});
  } catch (error) {
    console.log(error);
  }
};

export const getSingleCategory = async (req, res, next) =>{

  const {categoryId} = req.params

   try {
    const getSingleCategory = await Category.findById(categoryId)

    if (!getSingleCategory) return next(handleMakeError(400, "Category not found!"))

    res.status(200).json(getSingleCategory)
   } catch (error) {
    next(error)
   }
}