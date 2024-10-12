import { handleMakeError } from "../middleware/handleError.js";
import Filter from "../models/filter.model.js";

export const addFilter = async (req, res, next) => {
  const { filterName, filterValue } = req.body;

  try {
    const filters = new Filter({
      filterName,
      filterValue,
    });
    await filters.save();
    res.status(201).json(filters);
  } catch (error) {
    next(error);
  }
};

export const getAllFilters = async (req, res, next) => {
  try {
    const filters = await Filter.find();
    res.status(201).json(filters);
  } catch (error) {
    next(error);
  }
};

export const deleteFilter = async (req, res, next) => {
  const { filterId } = req.params;

  console.log(filterId);

  try {
    const filter = await Filter.findById(filterId);

    if (!filter) return next(handleMakeError(400, "Filter not found"));

    await Filter.findByIdAndDelete(filterId);

    res.status(200).json({message: "successfully deleted"})
  } catch (error) {
    next(error);
  }
};
