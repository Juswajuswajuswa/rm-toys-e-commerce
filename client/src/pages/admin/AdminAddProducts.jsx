import AdminHeader from "../../reusable/Admin/AdminHeader";
import AdminUploadProductImage from "../../components/admin/AdminUploadProductImage";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { IoArchive } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import Buttons from "../../reusable/Buttons";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../lib/axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AdminAddProducts() {
  const [images, setImages] = useState([]);

  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const [productsDetailsArray, setProductsDetailsArray] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentIndex] = useState(null);

  const { data, isPending, isError } = useQuery({
    queryKey: ["filters"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/filter/get-filters`);
      return res.data;
    },
  });

  const handleSubmitLabelValueObject = () => {
    const isDuplicate = productsDetailsArray.some(
      (detail, index) => detail.label === label && index !== currentEditIndex
    );

    if (!label || !value) {
      toast.error("Both label and value are required.");
    } else if (isDuplicate) {
      toast.error("Label already exists. Please enter a unique label.");
    } else {
      if (isEditing) {
        handleUpdateLabelValue()
      } else {
        handleAddProductLabelValue()
      }

      setLabel("");
      setValue("");
    }
  };

  const handleAddProductLabelValue = () => {
    setProductsDetailsArray((prevDetails) => [
      ...prevDetails,
      { label: label, value: value },
    ]);
    setLabel("");
    setValue("");
  }

  const handleUpdateLabelValue = () => {
    const updateDetails = productsDetailsArray.map((item, index) =>
      index === currentEditIndex ? { label, value } : item
    );

    setProductsDetailsArray(updateDetails)
    setIsEditing(false)
    setCurrentIndex(null)
  };

  const handleEditLabelValue = (index) => {
    setIsEditing(true)
    setCurrentIndex(index)
    setLabel(productsDetailsArray[index].label); // Load the label and value into the inputs
    setValue(productsDetailsArray[index].value);
  }

  const handleRemoveLabelValue = (index) => {
    setProductsDetailsArray((prev) => prev.filter((_, i) => i !== index));
  };

  console.log(productsDetailsArray);

  if (isPending) {
    return <p>awdwad</p>;
  }

  if (isError) {
    return <p>awdwad</p>;
  }

  return (
    <section className="bg-yellow h-screen font-main">
      <AdminHeader title={"ADD NEW PRODUCTS"} />

      <div className="max-w-[90%] pt-14 pb-5 mx-auto flex gap-5 flex-col">
        <form className="flex gap-2 flex-col-reverse md:flex-row ">
          <div className="flex-1 p-2 flex flex-col gap-3 ">
            <div className="border flex-1 pb-5  border-black rounded-[5px] bg-card p-4">
              <div className="mb-3">
                <h1 className="mb-3">PRODUCT NAME: </h1>
                <input
                  type="text"
                  className="border border-black w-full rounded-[5px] p-2 h-[50p] outline-none"
                />
              </div>

              <div className="mb-3">
                <h1 className="mb-3">DESCRIPTION: </h1>
                <textarea
                  name=""
                  className="border border-black w-full p-2 h-[100px] resize-none outline-none rounded-[5px]"
                  id=""
                ></textarea>
              </div>

              <div className="mb-3">
                <h1 className="mb-3">PRODUCT DETAILS: </h1>

                <div className=" flex flex-col gap-5 ">
                  <div className="flex md:items-center flex-col md:flex-row md:justify-between gap-5 ">
                    <div className="flex flex-col md:flex-row gap-2  md:gap-5">
                      <label htmlFor="label">LABEL</label>
                      <input
                        type="text"
                        placeholder="label"
                        name="label"
                        id="label"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        className="w-[100px] px-2 border border-black rounded-[5px]"
                      />
                      <label htmlFor="value">VALUE</label>
                      <input
                        type="text"
                        placeholder="value"
                        name="value"
                        id="value"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-[100px] px-2 border border-black rounded-[5px]"
                      />
                    </div>
                    <div
                      onClick={handleSubmitLabelValueObject}
                      className="w-full md:w-[170px]"
                    >
                      <Buttons
                        buttonName={`${isEditing ? "update" : "add details"}`}
                        icon={<IoIosAdd size={25} />}
                      />
                    </div>
                  </div>

                  {/* DETAILS GOES HERE */}
                  <div className="overflow-y-auto max-h-[281px]">
                    <ul className="flex flex-col gap-4  ">
                      {productsDetailsArray.length > 0 &&
                        productsDetailsArray.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center overflow-x-auto gap-2 justify-between bg-white rounded-[5px] p-2 border-black border"
                          >
                            <div className="flex gap-5">
                              <p className="text-sm">{item.label}</p>
                              {":"}
                              <p className="text-sm">{item.value}</p>
                            </div>
                            <div className="flex gap-2">
                              <button onClick={() => handleEditLabelValue(index)}
                                type="button"
                                className=" text-green-600 hover:text-indigo-300 mr-2"
                              >
                                <CiEdit size={25} />
                              </button>
                              <button
                                onClick={() => handleRemoveLabelValue(index)}
                                type="button"
                                className=" text-red-600"
                              >
                                <MdDelete size={25} />
                              </button>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border flex flex-col gap-2 border-black rounded-[5px] uppercase bg-card p-4">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex flex-col flex-1">
                  <label htmlFor="stocks" className="pb-2">
                    Stocks
                  </label>
                  <input
                    type="number"
                    className="p-2 rounded-[5px] border border-black outline-none"
                    name="stocks"
                    id="stocks"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="discount" className="pb-2">
                    Discount
                  </label>
                  <input
                    type="number"
                    className="p-2 rounded-[5px] border border-black outline-none"
                    name="discount"
                    id="discount"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <div className="flex flex-col flex-1">
                  <label htmlFor="discountType" className="pb-2">
                    Discount type
                  </label>
                  <select
                    className="p-2 rounded-[5px] border border-black outline-none"
                    name="discountType"
                    id="discountType"
                  >
                    <option value="chineseNewYear">None</option>
                    <option value="chineseNewYear">Chinese New Year</option>
                    <option value="christmas">Christmas</option>
                    <option value="mothersDay">mothers day</option>
                    <option value="holloween">holloween</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col border-t-gray-400 border border-r-0 border-l-0 border-b-0 pt-4 my-2 gap-2">
                <h1 className="py-2">FILTERS</h1>

                <div className="flex gap-2 flex-wrap">
                  {data &&
                    data.map((item) => (
                      <div key={item.id} className="flex-1 flex flex-col">
                        <label className="pb-2" htmlFor={item.filterName}>
                          {item.filterName}
                        </label>
                        <select
                          className="p-2 rounded-[5px] border border-black outline-none"
                          name={item.filterName}
                          id={item.filterName}
                        >
                          {Array.isArray(item.filterValue) &&
                            item.filterValue.map((value, index) => (
                              <option key={`${item.id}-${index}`} value={value}>
                                {value}
                              </option>
                            ))}
                        </select>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <div
                onClick={() => console.log("tite")}
                className="w-[100px] md:w-[200px]"
              >
                <Buttons buttonName={"draft"} icon={<IoArchive />} />
              </div>

              <div className="flex-1">
                <Buttons
                  buttonName={"add this product"}
                  icon={<FaCheckCircle />}
                />
              </div>
            </div>
          </div>

          {/* COLUMN 2 */}
          <AdminUploadProductImage images={images} setImages={setImages} />
        </form>
      </div>
    </section>
  );
}
