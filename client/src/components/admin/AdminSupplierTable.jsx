import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { CiEdit } from 'react-icons/ci'
import { IoSearch } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import axiosInstance from '../../lib/axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function AdminSupplierTable() {

  const queryClient = useQueryClient()

  const navigate = useNavigate()

  const {data: suppliers = [], isPending: isSupplierPending, isError: isSupplierError} = useQuery({
    queryKey: ['supplier'],
    queryFn: async () => {
      const res = await axiosInstance.get(`/supplier/get-suppliers`)
      return res.data 
    }
  })


  const {mutate: deleteSupplierMutation, isPending: isSuppDeletePending, isError:isSuppError} = useMutation({
    mutationFn: async (supplierId) => {
      const res = await axiosInstance.delete(`/supplier/delete-supplier/${supplierId}`)
      return res.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['supplier']})
      toast.success("Supplier Successfully Deleted")
    },
    onError: (err) => {
      toast.error(err.response.data.message || "something went wrong")
    }
  })

  const navigateToEditSupplier = (supplierId) => {
    navigate(`/admin/editSupplier/${supplierId}`)
  }

  if (isSupplierPending || isSuppDeletePending) {
    <p>loading....</p>
  }
  if (isSupplierError|| isSuppError) {
    <p>loading....</p>
  }
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
              <th className="font-normal p-2 pb-5">Method</th>
              <th className="font-normal p-2 pb-5">Supplier Address</th>
              <th className="font-normal p-2 pb-5">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 ">
           
              {
                suppliers.length > 0 && suppliers.map((supplier) => (
                  <tr key={supplier._id}>
                <td className="px-4 ">{supplier._id}</td>
                <td className="px-2 py-4 whitespace-nowrap text-sm uppercase truncate font-medium flex items-center gap-2	">
                 {supplier.supplierName}
                </td>
				
                <td className="px-4 py-4 uppercase whitespace-nowrap text-center text-sm">
                  {supplier.contactPerson}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                  {supplier.contactNumber}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center uppercase text-sm">
                 {supplier.supplierPay}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center uppercase text-sm">
                 {supplier.supplierAddress}
                </td>
          
                <td className="px-4 py-4 whitespace-nowrap gap-3 text-sm flex justify-center">
                  <button onClick={() =>  navigateToEditSupplier(supplier._id)}
				  className="text-green-600 hover:text-indigo-300 mr-2">
                    <CiEdit size={25} />
                  </button>
                  <button onClick={() => deleteSupplierMutation(supplier._id)}
				  className="text-red-600 hover:text-red-300">
                    <MdDelete size={25} />
                  </button>
                </td>
              </tr>
                ))
              }
      
          </tbody>
        </table>
      </div>
    </div>
  )
}
