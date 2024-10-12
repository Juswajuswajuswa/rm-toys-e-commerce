import mongoose from "mongoose";

const FilterSchemaModel = new mongoose.Schema({
  filterName: {
    type: String,
    required: true,
  },
  filterValue: {
    type: Array,
    required: true,
  },
});

const Filter = mongoose.model("Filter", FilterSchemaModel);

export default Filter;
