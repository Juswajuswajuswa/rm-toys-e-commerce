import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa";


export default function WishList() {
  const array = ["1", "2", "3"]

  return (
    <div className="font-main">
      <Link to={`/wishlist`} onClick={() => console.log("tite")} className="relative">
        <FaHeart size={25} />

        <span className="absolute bg-red-600 p-2 h-[20px] w-[20px] text-sm text-white flex items-center justify-center -bottom-2 -right-[9.5px] rounded-full">
            {
              array ? array.length: 0
            }
        </span>
      </Link>
    </div>
  )
}
