import AdminImagePlaceholder from '../../reusable/Admin/AdminImagePlaceholder'
import picture1 from "../../assets/jacket1.png";
import Buttons from '../../reusable/Buttons';

export default function AdminUploadProductImage() {
  return (
    <div className="p-2 flex flex-col md:w-[450px] gap-2 relative">
            <div className="absolute bg-card -top-5 right-1 w-[80px] border border-black h-[20px] rounded-full"></div>
            <div>
              <div className="flex-1 flex  mx-auto flex-col gap-2">
                {/* main picture */}
                <div className="border relative min-h-[400px]  bg-card rounded-[5px] border-black p-3">
                  {/* <img src={picture1} className='w-[300px] mx-auto'/> */}

                  <AdminImagePlaceholder size={150} />
                </div>

                <div className="flex gap-2">
                  <div className="bg-card relative flex-1 min-h-[80px] border-black border px-5 p-3 rounded-[5px]">
                    {/* <img src={picture1} alt="" className="w-[85px] mx-auto h-auto" /> */}

                    <AdminImagePlaceholder size={50} />
                  </div>
                  <div className="bg-card relative flex-1 min-h-[80px] border-black border px-5 p-3 rounded-[5px]">
                    {/* <img src={picture1} alt="" className="w-[85px] mx-auto h-auto" /> */}

                    <AdminImagePlaceholder  size={50} />
                  </div>
                  <div className="bg-card relative flex-1 min-h-[80px] border-black border px-5 p-3 rounded-[5px]">
                    {/* <img src={picture1} alt="" className="w-[85px] mx-auto h-auto" /> */}

                    <AdminImagePlaceholder size={50} />
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-black rounded-[5px] bg-card p-4">
              <h1>UPLOAD IMAGE</h1>
              <div className="flex gap-2 justify-between items-center  pt-5 pb-2">
                <div className='flex-1'>
                  <Buttons buttonName={"upload image"}/>
                </div>
                <div>
                  <Buttons buttonName={"reset"} />
                </div>
              </div>
            </div>
          </div>
  )
}
