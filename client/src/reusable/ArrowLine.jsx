import { RiArrowDropRightLine } from "react-icons/ri";

export default function ArrowLine({bottomNeg, arrowWidth, arrowLeft, arrowRight}) {
  return (
    <span className={`h-[2px]  bg-black absolute z-1 opacity-25`} 
    style={{bottom: bottomNeg, width: arrowWidth, left: arrowLeft, right: arrowRight}}
    >
      <RiArrowDropRightLine size={25} className="absolute right-[-12px] top-[-11.5px]" />
    </span>
  );
}
