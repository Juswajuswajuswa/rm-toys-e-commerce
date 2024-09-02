import ShopProductCards from "../components/ShopProductCards";
import { TbPinnedFilled } from "react-icons/tb";

export default function PopularPage() {
  return (
    <section className="pt-[130px] pb-[100px]  p-3 font-main">
      <div className="max-w-[1280px] mx-auto">
        <div>
          <h1 className="text-3xl mb-5 ">POPULAR PRODUCTS</h1>
        </div>

        <div className="flex flex-col gap-14">
          <div>
            <div className="mb-7 flex justify-between">
              <div className="flex items-center bg-primary gap-2 rounded-[5px]">
                <h1 className=" text-xl  text-card p-2 ">
                  BEST RATING PRODUCT
                </h1>
                <TbPinnedFilled className="text-card" size={25} />
              </div>
              <button className="text-primary underline">SEE MORE</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <ShopProductCards />
              <ShopProductCards />
              <ShopProductCards />
              <ShopProductCards />
            </div>
          </div>

          <div>
            <div className="mb-7 flex justify-between">
              <div className="flex items-center gap-2  bg-primary rounded-[5px]">
                <h1 className=" text-xl  text-card p-2 ">
                  BEST RATING PRODUCT
                </h1>
                <TbPinnedFilled className="text-card" size={25} />
              </div>
              <button className="text-primary underline">SEE MORE</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <ShopProductCards />
              <ShopProductCards />
              <ShopProductCards />
              <ShopProductCards />
            </div>
          </div>

          <div>
            <div className="mb-7 flex justify-between">
              <div className="flex items-center bg-primary rounded-[5px]">
                <h1 className=" text-xl  text-card p-2 ">
                  BEST RATING PRODUCT
                </h1>
                <TbPinnedFilled className="text-card" size={25} />
              </div>
              <button className="text-primary underline">SEE MORE</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <ShopProductCards />
              <ShopProductCards />
              <ShopProductCards />
              <ShopProductCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
