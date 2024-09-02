    import { FaCheckCircle } from 'react-icons/fa'
import { IoArchive } from 'react-icons/io5'

export default function AdminButtons({buttonName1, icon}) {
  return (
    <>
         <button type="button" className="flex hover:opacity-95 uppercase justify-between items-center border w-[100px] md:w-[200px] border-black p-2 rounded-[5px] bg-primary text-card" >
                {buttonName1}
              {icon}
              </button>
              <button type="button" className="border hover:opacity-95 uppercase flex flex-1 justify-between items-center  border-black p-2 rounded-[5px] bg-primary text-card" >
                Add this Product
                <FaCheckCircle className="text-green-600" /> 
              </button>
    </>
  )
}
