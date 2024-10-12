import { useState } from "react";
import CarToy from "../assets/car.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ReviewModal from "../components/ReviewModal.jsx";
import StarsRating from "../components/StarsRating.jsx";
import Buttons from "../reusable/Buttons.jsx";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function ProductDetails() {
  const [hideShowDetails, setHideShowDetails] = useState(true);
  const [showModalReview, setShowModalReview] = useState(false);
  const [rating, setRating] = useState(4);

  const ShowModal = () => setShowModalReview(true);

  const CloseShowModal = () => setShowModalReview(false);

  return (
    <section className="p-3 pt-[130px] font-main relative">
      {showModalReview && <ReviewModal closeModal={CloseShowModal} />}

      <div className="max-w-[1280px] mx-auto relative">
        <div className="mb-5">
          <p>{`SHOP>MEN>JACKET`}</p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-3">
          <div className="flex w-[320px] md:w-[400px] justify-between mx-auto flex-col gap-2">
            {/* main picture */}
            <div className="border h-full flex items-center bg-card rounded-[5px] border-black p-3">
              <img src={CarToy} alt="product-main-image" />
            </div>

            <div className="flex gap-2 justify-between w-full">
              <div className="bg-card border-black border px-5 p-3 rounded-[5px]">
                <img src={CarToy} alt="" className="w-[85px] h-auto" />
              </div>
              <div className="bg-card border-black border px-5 p-3 rounded-[5px]">
                <img src={CarToy} alt="" className="w-[85px] h-auto" />
              </div>
              <div className="bg-card border-black border px-5 p-3 rounded-[5px]">
                <img src={CarToy} alt="" className="w-[85px] h-auto" />
              </div>
            </div>
          </div>

          <div className="border flex relative flex-col justify-between gap-2 flex-1  bg-card rounded-[5px] w-[320px] md:w-[full] mx-auto p-3 border-black">
            {/* PRODUCT DEATAILS */}
            <div className="flex flex-col gap-5">
             
              <div className="flex flex-col gap-2 w-full">
                <h1 className="text-2xl md:text-4xl ">
                  JACKET 1 
                </h1>
              </div>

              <div className="flex gap-8">
               <p>DESCRIPTION:</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing wad awd awd.</p>
              </div>

               {/* STARS */}
               <div className="">
                <StarsRating rating={rating} />
              </div>

              <div className="uppercase flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <p>PRICE:</p>
                  <span className="text-lg text-indigo-500">400PHP</span>
                </div>
                <div className="flex items-center gap-3">
                  <p>Stocks:</p>
                  <span className="text-lg text-indigo-500">12</span>
                </div>
                <div className="flex items-center gap-3">
                  <p>category:</p>
                  <span className="text-lg text-indigo-500">Jacket</span>
                </div>
                <div className="flex items-center gap-3">
                  <p>sold:</p>
                  <span className="text-lg text-indigo-500">12</span>
                </div>
                <div className="flex items-center gap-3">
                  <p> color:</p>
                  <span className="text-lg text-red-700">red</span>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <p>PRODUCT DETAILS</p>
                <button onClick={() => setHideShowDetails(!hideShowDetails)}>
                  <MdOutlineKeyboardArrowDown size={25} />
                </button>
              </div>

              <div
                className={`border ${
                  hideShowDetails ? "flex" : "hidden"
                } rounded-[5px] border-black p-3 gap-2 flex-col`}
              >
                <div className="flex gap-3"> 
                  <p className="uppercase">materials:</p>
                  <span>100% polyester</span>
                </div>
                <div  className="flex gap-3">
                  <p className="uppercase">FIT:</p>
                  <span>regular fit</span>
                </div>
                <div  className="flex gap-3">
                  <p className="uppercase">features:</p>
                  <span>waterproof</span>
                </div>
                <div  className="flex gap-3">
                  <p className="uppercase">usage:</p>
                  <span>fashion, casual</span>
                </div>
              </div>

              {/* ADD ADITIONAL INFORMATIONS */}
            </div>
            {/* SEE ALL REVIEWS AND ADD REVIEWS */}
            <div className="flex justify-between">
              <button
                onClick={() => ShowModal()}
                className="uppercase underline text-indigo-500"
              >
                see all reviews {"(3)"}
              </button>
              <button
                onClick={() => ShowModal()}
                className="uppercase underline text-indigo-500"
              >
                add review
              </button>
            </div>
          </div>

          {/* BUY AND ADD BUTTON*/}
          <div className="border w-[327px] md:w-full lg:w-[210px] mx-auto flex flex-col gap-2 h-full border-black bg-card rounded-[5px] p-4">
            <div className="">
              <Buttons buttonName={"Add to cart"}/>
            </div>
            <div>
             <Buttons buttonName={"Add to wishlist"}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
