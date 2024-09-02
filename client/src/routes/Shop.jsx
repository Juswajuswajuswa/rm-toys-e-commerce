import ShopProductCards from "../components/ShopProductCards.jsx";
import ShopSide from "../components/ShopSide.jsx";


export default function Shop() {
  return (
    <section className="text-primary font-main p-3  py-[130px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex w-full mb-5 ">
          <h1 className="text-3xl">PRODUCTS</h1>
        </div>

        <div className="mb-5">
          <p className="text-sm">SHOP{">"}</p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row ">
          {/* SIDEBAR FORM*/}
          <ShopSide/>
          {/* products/cards */}
          <div className="w-full h-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
              {/* card */}
              <ShopProductCards/>
              <ShopProductCards/>
              <ShopProductCards/>
              <ShopProductCards/>
       
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
