import { TbPinnedFilled } from "react-icons/tb";
import noAvatar from "../assets/noavatar.jpg";
import StarsRating from "./StarsRating";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function ReviewCard() {

    const [showImage, setShowImage] = useState(false)

  return (
    <div className="relative border flex flex-col gap-3 w-[90%] mx-auto px-2 md:px-5 py-4 rounded-[5px] bg-card border-black ">
      {/* PIN */}
      <div className="border-black border w-[15px] bg-yellow absolute h-[15px] right-2 top-1 rounded-full">
        <div className="  w-[15px] h-[15px] rounded-full">
          <div className="absolute -top-6 right-[-65%]">
            <TbPinnedFilled size={30} />
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-start">
        <img
          src={noAvatar}
          alt="reviewer imgae"
          className="w-[50px] rounded-full border border-black object-cover"
        />
        <div className="flex flex-col gap-1">
          <h1>Juswa Gono</h1>
          <StarsRating rating={3} />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <p className="w-full border">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          labore vel nobis. Lorem ipsum dolor sit amet consectetur adipisicing
        
         
        </p>

        <div>
          <button onClick={() => setShowImage(!showImage)} type="button" className="mb-2 border border-black bg-primary text-card rounded-[5px] flex gap-2 items-center uppercase p-1">
            show image
            <IoIosArrowDown size={20} />
            </button>
          <div className={`${showImage ? "flex" : "hidden"} gap-3`}>
            <div>
              <img
                src={noAvatar}
                alt="review product images"
                className="w-[60px]"
              />
            </div>
            <div>
              <img
                src={noAvatar}
                alt="review product images"
                className="w-[60px]"
              />
            </div>
            <div>
              <img
                src={noAvatar}
                alt="review product images"
                className="w-[60px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
