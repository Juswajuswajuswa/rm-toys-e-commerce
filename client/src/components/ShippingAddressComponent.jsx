import { FaCheckCircle } from "react-icons/fa";
import AddressSection from "../hooks/addressSection";

export default function ShippingAddressComponent() {
  return (
    <div>
      <h1 className="text-xl">SHIPPING ADDRESS</h1>
      <div className="w-[90%] md:w-[80%] mx-auto my-5">

        <form className="flex flex-col gap-5">

        <div className="flex justify-end">
            <button className="hover:opacity-95 uppercase flex items-center border gap-5 px-5 border-black p-2 rounded-[5px] bg-primary text-card">
              Add new address
              <FaCheckCircle size={15} />
            </button>
          </div>
  
          <AddressSection title={"Country"}>
            <select
              className="bg-gray-200  p-2 border border-black rounded-[5px]"
              name="country"
              id="contry"
            >
              <option value="Philippines">Philippines</option>
            </select>
          </AddressSection>

          <AddressSection title={"Street Name, Building, House No."}>
            <input
              className="bg-gray-200  p-2 border border-black rounded-[5px]"
              placeholder="Street Name, Building, House No."
              type="text"
              id="streetBuildingHouseNum"
              name="streetBuildingHouseNum"
            />
          </AddressSection>

          <AddressSection title={"State / Province"}>
            <select
              className="bg-gray-200  p-2 border border-black rounded-[5px]"
              name="stateProvince"
              id="stateProvince"
            >
              <option value="">Select</option>
            </select>
          </AddressSection>

          <AddressSection title={"City"}>
            <select
              className="bg-gray-200  p-2 border border-black rounded-[5px]"
              name="city"
              id="city"
            >
              <option value="">Select</option>
            </select>
          </AddressSection>

          <AddressSection title={"Barangay"}>
            <select
              className="bg-gray-200  p-2 border border-black rounded-[5px]"
              name="barangay"
              id="barangay"
            >
              <option value="">Select</option>
            </select>
          </AddressSection>

          <div className="flex justify-end">
            <button className="hover:opacity-95 uppercase flex items-center border gap-5 px-5 border-black p-2 rounded-[5px] bg-primary text-card">
              Save Address
              <FaCheckCircle size={15} />
            </button>
          </div>
        </form>

        <div className="flex flex-col mt-10 border-t-gray-400 pt-5 border border-r-0 border-l-0 border-b-0 gap-2">
            <h1>Your Address: </h1>
            <div className="flex flex-col gap-5">
              <input className="bg-gray-200  p-2 border border-black rounded-[5px]" 
              type="text" value={"awdwahdjwahdjwadh"} />
              <input className="bg-gray-200  p-2 border border-black rounded-[5px]" 
              type="text" value={"awdwahdjwahdjwadh"} />
              <input className="bg-gray-200  p-2 border border-black rounded-[5px]" 
              type="text" value={"awdwahdjwahdjwadh"} />
            </div>
          </div>
      </div>
    </div>
  );
}
