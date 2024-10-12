import { useState, useCallback } from "react";
import { IoIosClose } from "react-icons/io";
import { FaLock, FaLockOpen } from "react-icons/fa";
import AdminHeader from "../../reusable/Admin/AdminHeader";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../lib/axios";
import toast from "react-hot-toast";

export default function AdminFilter() {
  const queryClient = useQueryClient();

  const [filterName, setFilterName] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [filterValueArray, setFilterValueArray] = useState([]);

  const [toggleAddTable, setToggleAddTable] = useState(false);
  const [showEditToggle, setShowEditToggle] = useState(false);
  const [showDeleteToggle, setShowDeleteToggle] = useState(false);
  // const [lockToggle, setLockToggle] = useState(false);

  const { data: filters = [], isPending, isError } = useQuery({
    queryKey: ["filters"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/filter/get-filters`);
      return res.data;
    },
  });

  const { mutate: addFilterMutation}= useMutation({
    mutationFn: async (data) => {
      const res = await axiosInstance.post(`/filter/add-filter`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["filters"] });
      toast.success("Successfully submitted");
      resetForm();
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Something went wrong");
    },
  });

  const {mutate: deleteFilterMutation} = useMutation({
    mutationFn: async (filterId) => {
      const res = await axiosInstance.delete(`/filter/delete-filter/${filterId}`)
      return res.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["filters"]})
      toast.success("Filter deleted Successfully")
    }, 
    onError: (err) => {
      toast.error(err.response.data.message || "something went wrong")
    }
  })


  const resetForm = useCallback(() => {
    setFilterValueArray([]);
    setToggleAddTable(false);
    setFilterName("");
    setFilterValue("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!filterName.trim() || filterValueArray.length === 0) {
      toast.error("Please provide a filter name and at least one value");
      return;
    }
    addFilterMutation({ filterName, filterValue: filterValueArray });
  };

  const addListValue = () => {
    if (filterValue.trim()) {
      setFilterValueArray((prev) => [...prev, filterValue.trim()]);
      setFilterValue("");
    }
  };

  const removeListValue = (index) => {
    setFilterValueArray((prev) => prev.filter((_, i) => i !== index));
  };

  // const lockFilter = useCallback(() => {
  //   setLockToggle((prev) => !prev);
  //   setShowEditToggle(false);
  //   setShowDeleteToggle(false);
  // }, []);

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error loading filters</p>;

  return (
    <section className="bg-yellow min-h-screen">
      {toggleAddTable && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <form onSubmit={handleSubmit} className="bg-card border border-black rounded-[5px] p-4 w-[350px] relative">
            <button
              type="button"
              onClick={() => setToggleAddTable(false)}
              className="absolute -right-2 -top-2 bg-red-600 rounded-full border border-black"
            >
              <IoIosClose size={20} />
            </button>
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="filterName" className="block mb-1">Filter Name:</label>
                <input
                  id="filterName"
                  name="filterName"
                  value={filterName}
                  onChange={(e) => setFilterName(e.target.value)}
                  className="w-full border border-black rounded-[5px] p-2"
                />
              </div>
              <div className="flex gap-2">
                <input
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  className="flex-grow border border-black rounded-[5px] p-2"
                  placeholder="Add value"
                />
                <button
                  type="button"
                  onClick={addListValue}
                  className="bg-primary text-white px-4 py-2 rounded-[5px] border border-black"
                >
                  Add
                </button>
              </div>
              <div className="max-h-[200px] overflow-y-auto">
                {filterValueArray.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <span className="flex-grow border border-black rounded-[5px] p-2">{item}</span>
                    <button
                      type="button"
                      onClick={() => removeListValue(index)}
                      className="bg-red-600 text-white px-2 py-1 rounded-[5px] border border-black"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white rounded-[5px] p-2 mt-4 uppercase border border-black"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      <AdminHeader title="FILTER" />

      <div className="max-w-[90%] mx-auto pt-14 pb-5">
        <div className="bg-card border border-black rounded-[5px] p-4 mb-6 relative">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setToggleAddTable(true)}
              className="bg-primary text-white rounded-[5px] px-4 py-2 uppercase border border-black"
            >
              Add Filter Table
            </button>
            <button
              onClick={() => setShowEditToggle((prev) => !prev)}
              className={`rounded-[5px] px-4 py-2 uppercase border border-black ${
                showEditToggle ? "bg-red-500" : "bg-primary"
              } text-white`}
            >
              {showEditToggle ? "Cancel Edit" : "Edit"}
            </button>
            <button
              onClick={() => setShowDeleteToggle((prev) => !prev)}
              className={`bg-red-500 text-white rounded-[5px] px-4 py-2 uppercase border border-black`}
            >
              {showDeleteToggle ? "Cancel Delete" : "Delete"}
            </button>
          </div>
          {/* <button
            // onClick={lockFilter}
            className="absolute right-4 top-4"
          >
            {lockToggle ? <FaLockOpen size={25} /> : <FaLock size={25} />}
          </button>
          {lockToggle && (
            <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center rounded-[5px]">
              <FaLock size={25} />
            </div> 
          )} */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filters.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-black rounded-[5px] p-4 relative"
            >
              {showDeleteToggle && (
                <button onClick={() => deleteFilterMutation(item._id)}
                  type="button"
                  className="absolute -right-2 -top-2 bg-red-600 rounded-full border border-black"
                >
                  <IoIosClose size={20} />
                </button>
              )}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{item.filterName}</h2>
                {showEditToggle && (
                  <button className="bg-primary text-white px-4 py-1 rounded-[5px] border border-black uppercase">
                    Edit
                  </button>
                )}
              </div>
              <ul className="space-y-2">
                {item.filterValue.length > 0 ? (
                  item.filterValue.map((value) => (
                    <li key={value} className="border-b pb-1">
                      {value}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No values added yet.</p>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}