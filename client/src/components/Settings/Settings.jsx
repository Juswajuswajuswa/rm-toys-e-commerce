import { useContext, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaSignOutAlt } from "react-icons/fa";
import { UserContext } from "../../userContext/UserContext";

export default function Settings() {
  const [showSetting, setShowSetting] = useState(false)
  const users = useContext(UserContext)


  return (
    <div className="relative font-main">
      <button onClick={() => setShowSetting(!showSetting)} className="relative">
        <BsThreeDotsVertical size={25} />
      </button>
      <div className={`absolute ${showSetting ? "block" : "hidden"} left-[30px] top-[-120px] lg:top-[45px] lg:-left-[170px] w-[180px] rounded-[5px] p-3 border-black border bg-card`}>
        <ul className="flex flex-col justify-end h-full gap-2">
            {
              users.isAdmin === true? <li className="border-b-gray-300 uppercase p-1 hover:bg-gray-300 border">
              <Link to={`/admin`} className=" flex justify-between items-center" onClick={() => setShowSetting(false)} >
                dashboard
                <TbLayoutDashboardFilled size={20} />
              </Link>
            </li> : ""
            }
            <li className="border-b-gray-300 uppercase p-1 hover:bg-gray-300 border">
              <Link to={`/profile`} onClick={() => setShowSetting(false)} className=" flex justify-between items-center">
                profile
                <CgProfile size={20} />
              </Link>
            </li>
            <li className="border-b-gray-300 uppercase p-1 hover:bg-gray-300 border">
              <Link className=" flex justify-between items-center" onClick={() => setShowSetting(false)} >
                Sign out
                <FaSignOutAlt size={20} />
              </Link>
            </li>
        </ul>
      </div>
    </div>
  );
}
