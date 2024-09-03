import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import useFilterVisibility from "../hooks/useFilterVisibility";
import FilterSection from "./FilterSection";

export default function ShopSide() {
  const { visibleSection, toggleVisibility } = useFilterVisibility();
  const [showFilter, setShowFilter] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPriceRange([0, value]);
  };

  return (
    <form className=" flex w-[90%] mx-auto md:w-[320px] justify-center px-5 gap-5 flex-col relative overflow-x-hidden md:justify-start p-3 border-black border rounded-[5px] bg-card">
      <div className="flex justify-between border-b-gray-400 border pb-5 ">
        <h1 className="text-xl">FILTER</h1>
        <button type="button" onClick={() => setShowFilter((prev) => !prev)}>
          <IoFilter size={20} />
        </button>
      </div>

      <div className="flex items-center relative  gap-2">
        <input
          type="text"
          className="border w-full outline-none rounded-[2.5px] border-black p-1"
        />
        <IoSearch size={25} className="absolute right-2" />
      </div>

      <div
        className={`${
          showFilter ? "flex" : "hidden"
        } md:flex flex-col h-full gap-7`}
      >
        {/* sort */}
        <FilterSection
          title={"sort"}
          isVisible={visibleSection.sort}
          onToggle={() => toggleVisibility("sort")}
        >
          <div className="flex gap-3">
            <input type="radio" name="sort" id="latest" />
            <label htmlFor="latest">LATEST</label>
          </div>
          <div className="flex gap-3">
            <input type="radio" name="sort" id="oldest" />
            <label htmlFor="oldest">OLDEST</label>
          </div>
        </FilterSection>

        {/* price range */}

        <FilterSection
          title={"price range"}
          isVisible={visibleSection.priceRange}
          onToggle={() => toggleVisibility("priceRange")}
        >
          <div className={`flex flex-col`}>
            <span className="text-gray-700">PHP {priceRange[1]}</span>
            <input
              min={0}
              max={1000}
              type="range"
              name="priceRange"
              id="priceRange"
              value={priceRange[1]}
              onChange={handlePriceChange}
              className="w-full"
            />
          </div>
        </FilterSection>

        {/* CATEGORIES */}
        <FilterSection
          title={"categories"}
          isVisible={visibleSection.categories}
          onToggle={() => toggleVisibility("categories")}
        >
          <div className={`flex flex-col gap-2`}>
            <div className={`flex items-center gap-3`}>
              <input
                type="checkbox"
                className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="jacket">JACKET</label>
            </div>
            <div className="flex gap-3 items-center ">
              <input
                type="checkbox"
                className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="jacket">SHORTS</label>
            </div>

            <div className="flex gap-3 items-center ">
              <input
                type="checkbox"
                className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="jacket">PANTS</label>
            </div>
            <div className="flex gap-3 items-center ">
              <input
                type="checkbox"
                className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="jacket">SHIRTS</label>
            </div>
          </div>
        </FilterSection>

        {/* SIZES */}
        <FilterSection
          title={"sizes"}
          isVisible={visibleSection.sizes}
          onToggle={() => toggleVisibility("sizes")}
        >
          <div className={`flex flex-col gap-2`}>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="jacket">LARGE</label>
            </div>
            <div className="flex gap-3 items-center ">
              <input
                type="checkbox"
                className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="jacket">SMALL</label>
            </div>

            <div className="flex gap-3 items-center ">
              <input
                type="checkbox"
                className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="jacket">XL</label>
            </div>
            <div className="flex gap-3 items-center ">
              <input
                type="checkbox"
                className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="jacket">XXL</label>
            </div>
          </div>
        </FilterSection>

        {/* COLORS */}

        <FilterSection
          title={"colors"}
          isVisible={visibleSection.colors}
          onToggle={() => toggleVisibility("colors")}
        >
          <div className={`flex flex-wrap gap-2`}>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="hidden" />
              <span className="size-[35px] rounded-[2.5px] bg-red-500 cursor-pointer"></span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="hidden" />
              <span className="size-[35px] rounded-[2.5px] bg-blue-500 cursor-pointer"></span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="hidden" />
              <span className="size-[35px] rounded-[2.5px] bg-green-500 cursor-pointer"></span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="hidden" />
              <span className="size-[35px] rounded-[2.5px] bg-black cursor-pointer"></span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="hidden" />
              <span className="size-[35px] rounded-[2.5px] bg-white cursor-pointer"></span>
            </label>
          </div>
        </FilterSection>

        <div>
          <button className="hover:opacity-95 uppercase justify-center items-center w-full border-black p-2 rounded-[5px] bg-primary text-card">
            APPLY FILTERS
          </button>
        </div>
      </div>
    </form>
  );
}
