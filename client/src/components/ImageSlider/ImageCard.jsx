import { TbPinnedFilled } from "react-icons/tb";

export default function ImageCard({ picture }) {
  return (
    <div className="w-[200px] relative min-h-[200px] md:min-h-[390px] md:w-[300px] mx-auto rounded-[10px] p-2 group border border-black bg-card">
      <div className="absolute top-2 right-0">
        <TbPinnedFilled size={25}/>
      </div>
      <img
        src={picture}
        className="w-full transition-all min-w-full mx-auto group-hover:-translate-y-2"
      />
      <button onClick={() => console.log("tite")} className="bg-primary w-full text-card rounded-[2.5px] py-2">
        SEE THIS PRODUCT
      </button>
    </div>
  );
}
