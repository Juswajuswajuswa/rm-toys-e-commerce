import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

// const CATEGORIES_DATA = [
//   { id: 1, name: "JACKET", productsCount: 1200 },
//   { id: 2, name: "SHOES", productsCount: 800 },
//   { id: 3, name: "SHIRTS", productsCount: 650 },
//   { id: 4, name: "PANTS", productsCount: 950 },
//   { id: 5, name: "PANTS", productsCount: 950 },
// ];

export default function AdminCategoriesTable({ tableName, valueName }) {
  return (
    <div className="font-main border flex-1 rounded-[5px] border-black bg-card relative ">
      <div className=" border flex-col border-b-black rounded-t-[5px] flex md:flex-row items-center justify-between  p-4">
        <h1 className="uppercase">{tableName}</h1>
      </div>

      <div className="overflow-y-auto  h-[400px] py-3">
        <table className="w-full divide-y divide-gray-700">
          <thead>
            <tr className="">
              <th className="font-normal p-2 pb-5">ID</th>
              <th className="font-normal p-2 pb-5">NAME</th>
              {/* <th className="font-normal p-2 pb-5">PRODUCTS COUNT</th> */}
              <th className="font-normal p-2 pb-5">ACTIONS</th>
            </tr>
          </thead>
          {valueName.map((item, index) => (
            <tbody key={index} className="divide-y divide-gray-700 ">
              <tr>
                <td className="text-center  py-4 uppercase">
                  <p>{index}</p>
                </td>

                <td className="text-center py-4 uppercase">
                  <p>{item.value}</p>
                </td>

                {/* <td className="text-center py-4">
            <p>{item.productsCount}</p>
          </td> */}

                <td className="text-center py-4">
                  <button className="text-green-600 hover:text-indigo-300 mr-2">
                    <CiEdit size={25} />
                  </button>
                  <button className="text-red-600 hover:text-red-300">
                    <MdDelete size={25} />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
