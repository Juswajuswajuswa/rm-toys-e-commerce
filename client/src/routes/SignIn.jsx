import ArrowLine from "../reusable/ArrowLine";
import { Link } from "react-router-dom";
import ShoesBg from "../reusable/ShoesBg";

export default function SignIn() {
  return (
    <section className="mt-[180px] p-4 font-main text-primary">
      <div className="max-w-[600px] mx-auto overflow-hidden">

      <div className="relative px-2  mb-4 flex justify-end w-full">
         <div className="relative flex-1">
          <ArrowLine arrowWidth={"90%"} bottomNeg={"50%"} arrowLeft={"0px"}/>
          </div>
          <span className="border bg-[#313031] opacity-80 text-white border-primary py-1 rounded-[5px] px-3">SIGN IN</span>
        </div>
        <form className="relative border flex gap-2 bg-secondary flex-col border-black p-4 rounded-[5px] pt-[50px] pb-[80px] shadow-lg">
         
          <div className="flex justify-between flex-col">
            <label htmlFor="email" className="uppercase mb-2">Email: </label>
            <input type="email" name="email" id="email" className="outline-none p-3 bg-transparent border-black border rounded-[5px]" />
          </div>
          <div className="flex justify-between flex-col">
            <label htmlFor="password" className="uppercase mb-2">Password: </label>
            <input type="password" name="password" id="password" className="outline-none p-3 bg-transparent border-black border rounded-[5px]" />
          </div>

          <div className="flex justify-center gap-2">
            <button className="border p-2 px-5 mt-10 border-none bg-primary hover:opacity-95  uppercase font-medium text-white rounded-[5px]">
              sign in
            </button>
          </div>


          <div className="absolute rounded-b-[10px] bottom-0 left-0 right-0 mx-auto bg-indigo-500 h-[40px]">
            {/* white background */}
          </div>
        </form>

        <div className="mt-4 flex justify-between">
          <div className="relative flex-1">
          <ArrowLine arrowWidth={"90%"} bottomNeg={"50%"} arrowLeft={"0px"}/>
          </div>
          <div className="text-sm ">
            no account yet? <Link to={`/sign-up`} className="text-indigo-500 hover:underline uppercase text-[17px]"> sign up here!</Link>
          </div>
        </div>
      </div>


    

      <ShoesBg botPosition={"30px"} rotatePosition={"45deg"}/>
      <ShoesBg  topPosition={"60px"} rightPosition={"30px"} rotatePosition={"-20deg"}/>
    </section>
  );
}
