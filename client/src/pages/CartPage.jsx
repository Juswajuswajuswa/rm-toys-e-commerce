import Buttons from "../reusable/Buttons";
import noAvatar from "../assets/noavatar.jpg";
import CartCard from "../components/CartCard";

export default function CartPage() {
  return (
    <section className="pt-[130px] font-main p-3">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex w-full  mb-5 ">
          <h1 className="text-4xl">CART</h1>
        </div>

        <form className="flex flex-col md:flex-row gap-2">

          <div className="flex flex-col gap-3  flex-1 uppercase">
            {/* PRODUCTS GOES HERE */}
           
           <CartCard productImg={noAvatar} size={"Large"} color={"red"} title={"TITLE OF PRODUCT"} price={500} />
           <CartCard productImg={noAvatar} size={"Large"} color={"red"} title={"TITLE OF PRODUCT"} price={500} />
           <CartCard productImg={noAvatar} size={"Large"} color={"red"} title={"TITLE OF PRODUCT"} price={500} />
            
           
          </div>

          <div className="border md:w-[270px] gap-2 flex flex-col bg-card rounded-[5px] p-3 border-black">
            <h1 className="uppercase text-xl mb-3">order summary</h1>
            <div className="flex flex-1 flex-col gap-1">
                <p>total items: <span>2</span></p>
                <p>total price: <span className="text-indigo-500">800PHP</span></p>
            </div>
            <div>
             <Buttons buttonName={"checkout"}/>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
