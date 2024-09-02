import { FaStar } from "react-icons/fa";
import { useState } from "react";
import ReviewCard from "../components/ReviewCard";

export default function Reviews() {
  const [hideImage, setHideImage] = useState(true);
  return (
    <section className="pt-[130px] p-3 font-main">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-3xl mb-5">REVIEWS</h1>

        <div className="mb-5">
          <p className="text-sm">REVIEWS{">LATEST"}</p>
        </div>

        <div className="flex gap-10 flex-col md:flex-row">
          <div className="bg-card w-[90%] mx-auto md:w-[240px] md:items-start p-4 flex flex-col gap-2 md:h-[370px] rounded-[5px] border border-black">
          



          </div>

          {/* REVIEWS CONTAINER HERE */}
          <div className="flex-1 gap-10 flex flex-col">
              <ReviewCard/>
              <ReviewCard/>
              <ReviewCard/>
              <ReviewCard/>
          </div>
        </div>
      </div>
    </section>
  );
}
