import { FaCheckCircle } from "react-icons/fa";
// import AdminCategoriesAdd from "../../components/admin/AdminCategoriesAdd";
import AdminCategoriesTable from "../../components/admin/AdminCategoriesTable";
import AdminStatCard from "../../components/admin/AdminStatCard";
import AdminHeader from "../../reusable/Admin/AdminHeader";
import Buttons from "../../reusable/Buttons";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export default function AdminFilter() {
  const [addTable, setAddTable] = useState([]);
  const [valueList, setValueList] = useState([]);

  const [filterName, setFilterName] = useState("");
  const [valueName, setValueName] = useState("");

  const newFilterName = (e) => {
    setFilterName(e.target.value);
  };

  const newValueName = (e) => {
    setValueName(e.target.value);
  };

  console.log(addTable)

  const addNewFilter = () => {
   if (filterName) {
    setAddTable([
      ...addTable,
      {
        filterName: filterName,
        filterValue: valueList
      },
    ]);
    setValueName("")
    setFilterName("")
    setValueList([])
   }
   
  };

  const addNewValueList = () => {
    if (valueName) {
      setValueList(
        [
          ...valueList,
          {value: valueName}
        ]
      )
      setValueName("")
    }
  };

  return (
    <section className="bg-yellow h-screen">
      <AdminHeader title={"CATEGORIES"} />
      <div className=" max-w-[90%] pt-14 pb-5  mx-auto flex flex-col gap-5    ">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-2 md:gap-5 relative font-main">
          <div className="absolute bg-card -top-7 right-0 w-[80px] border border-black h-[20px] rounded-full"></div>
          {/* CARD */}
          <AdminStatCard title={"JACKET"} value={300} />
          <AdminStatCard title={"SHORTS"} value={5} />
          <AdminStatCard title={"SHIRT"} value={300} />
          <AdminStatCard title={"SHOES"} value={300} />
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between gap-5">
          <div className="flex flex-col w-full gap-2">
            {
              addTable.map((item) => (
                <AdminCategoriesTable key={item.filterName} tableName={item.filterName} valueName={item.filterValue}  />
              ))
            }
          </div>

          <form className="font-main border w-full rounded-[5px]  h-[470px] md:w-[40%] border-black bg-card flex flex-col gap-4  p-4 relative ">
            <div className=" flex md:flex-row">
              <h1>ADD ADDITIONAL FILTER SECTION</h1>
            </div>

            <div className="flex flex-col h-full justify-between border gap-5">
              <div className="flex flex-col justify-between gap-2 ">
                <label htmlFor="filterName" className=" ">
                  Filter name:{" "}
                </label>
                <input
                  type="text"
                  name="filterName"
                  value={filterName}
                  onChange={newFilterName}
                  id="filterName"
                  className="border outline-none border-black p-1 rounded-[5px]"
                />

                <div className="flex flex-col gap-2">
                  <label htmlFor="filterValue">Filter value: </label>
                  <div className=" flex flex-col md:flex-row gap-3">
                    <div className="flex gap-2  flex-1">
                      <input
                        type="text"
                        className=" border w-full border-black rounded-[5px] p-1"
                        placeholder="value"
                        name="filterValue"
                        value={valueName}
                        onChange={newValueName}
                      />
                    </div>
                    <button
                      onClick={addNewValueList}
                      type="button"
                      className=" border w-full md:w-[20%]  border-black rounded-[2.5px] py-1 bg-primary text-card uppercase"
                    >
                      add
                    </button>
                  </div>
                  <div className="pt-2">
                    <ul className={`pt-2 p-2 rounded-[2.5px] ${valueList.length < 1 ? "hidden": "flex"} flex-col gap-2 border border-black min-h-0 max-h-[180px] overflow-y-auto`}>
                      {valueList.map((item) => (
                        <li key={item.value} className="flex justify-between">
                          <p name="jacket">{item.value}</p>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              className=" text-green-600 hover:text-indigo-300 mr-2"
                            >
                              <CiEdit size={25} />
                            </button>
                            <button type="button" className=" text-red-600">
                              <MdDelete size={25} />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div type="button" onClick={addNewFilter}>
                <Buttons buttonName={"submit"} icon={<FaCheckCircle />} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
