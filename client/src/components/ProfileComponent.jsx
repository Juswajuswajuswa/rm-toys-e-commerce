import Buttons from "../reusable/Buttons";
import { useUserStore } from "../stores/useUserStore";

export default function ProfileComponent({ setActiveComponent }) {
  const currentUser = useUserStore((state) => state.currentUser);
  console.log(currentUser);

  // firebase

  return (
    <div>
      <h1 className="text-xl">PROFILE</h1>
      <div className="my-5 flex flex-col gap-10  max-h-[666px] overflow-y-auto">
        <div className="flex flex-col items-center gap-4 justify-center">
          <p>AVATAR</p>

          <img
            src={currentUser.avatar}
            alt="avatar.img"
            className="w-[150px] h-[150px] rounded-full border border-black object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 w-[90%] md:w-[70%] mx-auto uppercase">
          <div className="flex flex-col md:flex-row md:items-center my-2 justify-between text-md md:text-lg ">
            <h1 className="my-5">PERSONAL INFORMATION</h1>
            <div onClick={() => setActiveComponent("changeinformation")}>
              <Buttons buttonName={"edit information"} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="flex-1">
              <label htmlFor="email">Email:</label>
              <input
                value={currentUser.email}
                disabled
                type="email"
                name="email"
                id="email"
                className="border border-black px-5 py-2 w-full bg-gray-200 rounded-[5px] outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="flex-1 flex flex-col">
              <label htmlFor="username">Username: </label>
              <input
                value={currentUser.username}
                disabled
                type="username"
                name="username"
                id="username"
                className="border w-full bg-gray-200 rounded-[5px] outline-none border-black px-5 py-2"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="number">phone number:</label>
              <input
                value={"johndoe"}
                disabled
                type="text"
                name="number"
                id="number"
                className="border border-black px-5 py-2 w-full bg-gray-200 rounded-[5px] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-[90%] md:w-[70%] mx-auto uppercase">
          <div className="flex flex-col justify-between text-md md:text-lg md:flex-row md:items-center my-2 ">
            <h1 className="my-5">CURRENT SHIPPING ADDRESS</h1>
            <div onClick={() => setActiveComponent("shippingaddress")}>
              <Buttons buttonName={"Edit shipping address"} />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-5">
            <div className="flex-1 flex flex-col ">
              <label htmlFor="address">address 1: </label>
              <input
                value={"johndoe"}
                disabled
                type="address"
                name="address"
                id="address"
                className="border w-full bg-gray-200 rounded-[5px] outline-none border-black px-5 py-2"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="address">address 2: </label>
              <input
                value={"johndoe"}
                disabled
                type="address"
                name="address"
                id="address"
                className="border w-full bg-gray-200 rounded-[5px] outline-none border-black px-5 py-2"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="address">address 3: </label>
              <input
                value={"johndoe"}
                disabled
                type="address"
                name="address"
                id="address"
                className="border w-full bg-gray-200 rounded-[5px] outline-none border-black px-5 py-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
