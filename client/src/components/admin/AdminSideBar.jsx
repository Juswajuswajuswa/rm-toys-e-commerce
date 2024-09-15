import { useState } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import noAvatar from "../../assets/noavatar.jpg";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { MdKeyboardReturn } from "react-icons/md";


const adminSideBarItems = [
  {
    name: "overview",
    path: "",
    icon: <IoIosStats size={20} />,
  },
  {
    name: "Order Status",
    path: "/admin/addProducts",
    icon: <TbLayoutDashboardFilled size={20} />,  
  },
  {
    name: "products",
    path: "/admin/products",
    icon: <FaShoppingCart size={20} />,
  },
  {
    name: "add products",
    path: "/admin/addProducts",
    icon: <TbLayoutDashboardFilled size={20} />,
  },
  {
    name: "Manage Filter",
    path: "/admin/filter",
    icon: <MdCategory size={20} />,
  },
  // {
  //   name: "settings",
  //   path: "/admin/dashboard",
  //   icon: <TbLayoutDashboardFilled size={20} />,
  // },
  {
    name: "return to shop",
    path: "/shop",
    icon: <MdKeyboardReturn size={20} />,
  },
];

export default function AdminSideBar() {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  const [active, setActive] = useState("dashboard");

  return (
    <aside
      className={`z-50 text-primary border transition-all border-r-gray-500 p-3 bg-card h-screen ${
        toggleSideBar ? "w-52" : "w-16"
      } font-main`}
    >
      <div className="flex h-full flex-col gap-10">
        <div className="flex items-center border-b-gray-300 border pb-5 justify-between">
          <h1 className={`text-xl ${toggleSideBar ? "block" : "hidden"}`}>
            CLOTHING LINE
          </h1>
          <button onClick={() => setToggleSideBar(!toggleSideBar)}>
            {toggleSideBar ? (
              <IoMdArrowDropright size={30} />
            ) : (
              <IoMdArrowDropleft size={30} />
            )}
          </button>
        </div>

        <nav className="flex-1">
          <ul className="flex flex-col gap-5">
            {adminSideBarItems.map((item) => (
              <li
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`relative group ${
                  active === item.name ? "bg-indigo-300" : "hover:bg-indigo-200"
                } border-b-gray-300 border rounded-[5px] p-1`}
              >
                <Link
                  to={item.path}
                  className="uppercase w-full flex justify-between items-center"
                >
                  <div>{item.icon}</div>
                  <p
                    className={`${
                      toggleSideBar ? "w-32" : "w-0"
                    } overflow-hidden`}
                  >
                    {item.name}
                  </p>
                </Link>

                {!toggleSideBar && (
                  <div
                    className={` absolute border z-50 transition-all left-[50px] invisible group-hover:visible text-center opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 w-[120px] bg-card rounded-[5px] border-black p-1 top-1 uppercase`}
                  >
                    {item.name}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>


        <div className="border-t-gray-300 border flex items-center gap-5  pt-3">
          <img
            src={noAvatar}
            alt="avatar.image"
            className={`w-[40px] border border-black rounded-full object-cover`}
          />
          <h1 className={` ${toggleSideBar ? "block" : "hidden"} uppercase`}>
            Admin dashboard
          </h1>
        </div>
      </div>
    </aside>
  );
}
