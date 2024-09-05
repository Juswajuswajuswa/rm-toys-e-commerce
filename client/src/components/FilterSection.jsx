import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function FilterSection({title,children,isVisible,onToggle,}) {
  return (
    <div className={` flex-col gap-2 border-b-gray-400 border pb-5`}>
      <div className="flex items-start justify-between">
        <h1 className="text-xl mb-2 uppercase">{title}</h1>
        <button type="button" name="sort" onClick={onToggle}>
          {isVisible ? (
            <MdOutlineKeyboardArrowDown size={25} />
          ) : (
            <MdOutlineKeyboardArrowUp size={25} />
          )}
        </button>
      </div>

      {isVisible && <div className="flex flex-col gap-2">{children}</div>}
    </div>
  );
}
