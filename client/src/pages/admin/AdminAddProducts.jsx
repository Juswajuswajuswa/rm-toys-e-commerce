import AdminHeader from "../../reusable/Admin/AdminHeader";
import AdminUploadProductImage from "../../components/admin/AdminUploadProductImage";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { IoArchive } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import Buttons from "../../reusable/Buttons";

export default function AdminAddProducts() {
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
                        className="w-[100px] px-2 border border-black rounded-[5px]"
                      />
                      <label htmlFor="value">VALUE</label>
                      <input
                        type="text"
                        placeholder="value"
                        name="value"
                        id="value"
                        className="w-[100px] px-2 border border-black rounded-[5px]"
                      />
                    </div>
                    <div className="w-full md:w-[170px]">
                      <Buttons buttonName={"add details"} icon={<IoIosAdd size={25}/>} />
                    </div>
                  </div>

                  {/* DETAILS GOES HERE */}
                  <div className="">
                    <ul className="flex flex-col gap-4">
                      
                      <li className="flex items-center overflow-x-auto gap-2 justify-between bg-white rounded-[5px] p-2 border-black border">
                        <div className="flex gap-5">
                          <p className="text-sm">label</p>
                          {":"}
                          <p className="text-sm">valu</p>
                        </div>
                        <div className="flex gap-2">
                          <button type="button" className=" text-green-600 hover:text-indigo-300 mr-2">
                            <CiEdit size={25} />
                          </button>
                          <button type="button" className=" text-red-600">
                            <MdDelete size={25} />
                          </button>
                        </div>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border flex flex-col gap-2 border-black rounded-[5px] uppercase bg-card p-4">
             <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-col flex-1">
                  <label htmlFor="stocks" className="pb-2">Stocks</label>
                  <input type="number" className="p-2 rounded-[5px] border border-black outline-none" name="stocks" id="stocks" />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="discount" className="pb-2">Discount</label>
                  <input type="number"  className="p-2 rounded-[5px] border border-black outline-none" name="discount" id="discount" />
                </div>
             </div>
              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <div className="flex flex-col flex-1">
                  <label htmlFor="discountType" className="pb-2">Discount type</label>
                  <select className="p-2 rounded-[5px] border border-black outline-none" name="discountType" id="discountType">
                    <option value="chineseNewYear">None</option>
                    <option value="chineseNewYear">Chinese New Year</option>
                    <option value="christmas">Christmas</option>
                    <option value="mothersDay">mothers day</option>
                    <option value="holloween">holloween</option>
                  </select>
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="pb-2" htmlFor="category">Category</label>
                  <select className="p-2 rounded-[5px] border border-black outline-none" name="category" id="category">
                    <option value="jacket">Jacket</option>
                    <option value="shorts">shorts</option>
                    <option value="shirts">shirts</option>
                    <option value="sando">sando</option>
                    <option value="sando">sando</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              
              <div onClick={() => console.log("tite")} className="w-[100px] md:w-[200px]">
               <Buttons buttonName={"draft"} icon={<IoArchive/>}/>
              </div>
              
             <div className="flex-1">
              <Buttons buttonName={"add this product"} icon={<FaCheckCircle/>}/>
             </div>
            </div>
          </div>

          {/* COLUMN 2 */}
          <AdminUploadProductImage />
        </form>
      </div>
    </section>
  );
}
