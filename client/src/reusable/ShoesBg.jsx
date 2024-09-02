import shoesImg from "../assets/shoesbg.png";

export default function ShoesBg({topPosition, botPosition, leftPosition, rightPosition, rotatePosition}) {
  return (
    <>
         <img
            src={shoesImg}
            alt="Shoes background"
            className="absolute opacity-60 w-[100px] lg:w-[150px]"
            style={{top: topPosition, bottom: botPosition, left: leftPosition, right: rightPosition, rotate: rotatePosition}}
          />
    </>
  )
}
