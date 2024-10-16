import { CiEdit } from 'react-icons/ci'
import { IoSearch } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'

export default function AdminSupplierTable() {
  return (
    <div className="font-main border rounded-[5px] border-black bg-card relative ">
       <div className="absolute bg-card -top-7 right-0 w-[80px] border border-black h-[20px] rounded-full"></div>
      <div className=" border flex-col border-b-black rounded-t-[5px] flex md:flex-row items-center justify-between  p-4">
        <h1>PRODUCTS TABLE</h1>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="search supplier.."
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
              <th className="font-normal p-2 pb-5">Supplier Name</th>
              <th className="font-normal p-2 pb-5">Contact Person</th>
              <th className="font-normal p-2 pb-5">Contact Number</th>
              <th className="font-normal p-2 pb-5">Bank Method</th>
              <th className="font-normal p-2 pb-5">Supplier Address</th>
              <th className="font-normal p-2 pb-5">Category</th>
              <th className="font-normal p-2 pb-5">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 ">
           
              <tr>
                <td className="px-4 "></td>
                <td className="px-2 py-4 whitespace-nowrap text-sm truncate font-medium flex items-center gap-2	">
                  {/* <img
           
                    alt="Product img"
                    className="size-10 rounded-full"
                  />
         */}
                </td>
				
                <td className="px-4 py-4 uppercase whitespace-nowrap text-center text-sm">
					
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                  
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center text-sm">
                 
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center text-sm">
                 
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center text-sm">
                 
                </td>


                <td className="px-4 py-4 whitespace-nowrap gap-3 text-sm flex justify-center">
                  <button
				  className="text-green-600 hover:text-indigo-300 mr-2">
                    <CiEdit size={25} />
                  </button>
                  <button 
				  className="text-red-600 hover:text-red-300">
                    <MdDelete size={25} />
                  </button>
                </td>
              </tr>
      
          </tbody>
        </table>
      </div>
    </div>
  )
}
