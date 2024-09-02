import { FaCheckCircle } from "react-icons/fa";
import Buttons from "../../reusable/Buttons";


export default function AdminCategoriesAdd() {
  return (
    <form className='font-main border w-full rounded-[5px] h-[200px] md:w-[25%] border-black bg-card flex flex-col gap-4  p-4 relative '>
         <div className=" flex md:flex-row">
         <h1>ADD ADDITIONAL CATEGORY</h1>
         </div>

         <div className="flex flex-col h-full justify-between border gap-5">
            <div className='flex flex-col justify-between gap-2 '>
                <label htmlFor="categoryName" className='uppercase '>Category name: </label>
                <input type="text"  name='categoryName' id='categoryName' className='border outline-none border-black p-1 rounded-[5px]' />
            </div>
            <div className="">
              <Buttons buttonName={"submit"} icon={<FaCheckCircle/>} />
            </div>
         </div>
    </form>
  )
}
