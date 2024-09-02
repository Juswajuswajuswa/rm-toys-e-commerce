import { FaImage } from "react-icons/fa";

export default function AdminImagePlaceholder({size, bgColor}) {
  return (
    <div className='inset-0 rounded-[5px] flex justify-center flex-col items-center absolute' 
    style={{backgroundColor: `${bgColor}`}}
    >
        <FaImage size={size} className="text-primary opacity-30" />
    </div>
  )
}
