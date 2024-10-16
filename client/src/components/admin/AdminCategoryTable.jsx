import { useQuery } from "@tanstack/react-query";
import { CiEdit } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import axiosInstance from "../../lib/axios";

export default function AdminCategoryTable() {
  const {
    data: categories = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/category/get-categories`);
      return res.data;
    },
  });

  console.log(categories);

  return (
    <div className="font-main border rounded-[5px] border-black bg-card relative ">
       <div className="absolute bg-card -top-7 right-0 w-[80px] border border-black h-[20px] rounded-full"></div>
       {/* CARD */}
      <div className=" border flex-col border-b-black rounded-t-[5px] flex md:flex-row items-center justify-between  p-4">
        <h1>Category Table</h1>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="search category.."
            className="border md:w-[300px] border-black rounded-[5px] p-1 focus:outline-none"
          />
          <IoSearch className="absolute right-0" size={30} />
        </div>
      </div>
      <div className="overflow-y-auto  h-[600px] py-3">
        <table className="w-full divide-y divide-gray-700">
          <thead>
            <tr className="">
              <th className="font-normal p-2 pb-5">ID</th>
              <th className="font-normal p-2 pb-5">Category Name</th>
              <th className="font-normal p-2 pb-5">Category Description</th>
              <th className="font-normal p-2 pb-5">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 ">
            {categories.length > 0 &&
              categories.map((category) => (
                <tr key={category._id}>
                  <td className="px-4 ">{category._id}</td>

                  <td className="	">
                    {category.categoryName}
                  </td>

                  <td className="">
                    {category.categoryDescription}
                  </td>

                  <td className="px-4 py-4 whitespace-nowrap gap-3 text-sm flex justify-center">
                    <button className="text-green-600 hover:text-indigo-300 mr-2">
                      <CiEdit size={25} />
                    </button>
                    <button className="text-red-600 hover:text-red-300">
                      <MdDelete size={25} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
