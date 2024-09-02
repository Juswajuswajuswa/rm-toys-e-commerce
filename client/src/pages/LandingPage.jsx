import { Link } from "react-router-dom";
import ArrowLine from "../reusable/ArrowLine";
import { HiShoppingBag } from "react-icons/hi2";
import ImageSlider from "../components/ImageSlider/ImageSlider";

export default function LandingPage() {
  return (
    <section className="h-screen font-main  relative overflow-hidden">
      <div className="relative z-2 h-screen overflow-y-auto max-w-[1280px] mx-auto p-4">
        <div className="flex items-center relative flex-col gap-20 pt-40 lg:pt-52 lg:gap-4  lg:flex-row justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex md:pl-10 lg:pl-0">
              <h2 className="bg-primary py-1 px-3 rounded-[5px]  tracking-wider text-card font-main uppercase">
                CLOTHING LINE
              </h2>
            </div>
            <div className="relative z-10  md:w-[700px] lg:w-[690px]">
              <h1 className="font-main text-2xl mx-auto leading-normal md:leading-tight lg:leading-tight  md:text-4xl  lg:text-5xl md:text-center lg:text-start ">
                Your <span className="text-indigo-700">Style</span>, Redefined:
                Discover Timeless{" "}
                <span className="text-indigo-700">Elegance</span> and{" "}
                <span className="text-indigo-700">Modern</span> Comfort in Every
                Purchase, Curated Just for{" "}
                <span className="text-indigo-700">You</span>
              </h1>
            </div>

            <Link
              to={`/shop`}
              className="z-10 font-main text-normal md:text-lg w-[300px] md:mx-auto lg:mx-0 flex items-center pl-[120px] hover:underline text-indigo-600 relative gap-2"
            >
              SHOP HERE
              <HiShoppingBag size={25} className="text-primary" />
              <ArrowLine
                arrowWidth={"100px"}
                bottomNeg={"50%"}
                arrowLeft={"0px"}
              />
            </Link>
          </div>

          <div className=" w-full overflow-hidden  md:text-center  flex flex-col gap-8 ">
            <div className="flex flex-col gap-2 items-center">
              <h1 className="md:text-lg uppercase text-center">
                Check these best products in their category
              </h1>

              <div className="flex justify-center gap-4">
                <p className="text-sm">JACKET</p>
                <p className="text-sm">SHORTS</p>
                <p className="text-sm">SHIRTS</p>
                <p className="text-sm">PANTS</p>
              </div>
            </div>

            <div className="w-[350px]  md:w-[600px] items-center mx-auto">
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE MODELS */}
      {/* <div className="absolute bottom-[-200px] md:bottom-[-80px] flex w-full justify-center lg:justify-end lg:right-10">
        <div className="relative">
          <img
            src={image1}
            alt="Model showcasing fashion"
            className="max-h-[600px] z-0 lg:max-h-[900px] drop-shadow-2xl"
          />
          <ShoesBg rightPosition={"0px"} topPosition={"50px"} />
          <ShoesBg
            topPosition={"60px"}
            rotatePosition={"45deg"}
            leftPosition={"-20px"}
          />
          <ShoesBg
            botPosition={"100px"}
            rotatePosition={"90deg"}
            leftPosition={"-160px"}
          />
        </div>
      </div> */}
    </section>
  );
}
