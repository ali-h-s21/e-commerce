import { BsArrowRightShort } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
const CATEGORIES = [
  "phones",
  "electronics",
  "gaming",
  "appliances",
  "office",
  "fashion",
  "beauty",
  "fitness",
  "books",
  "kids",
  "pets",
  "arts & crafts",
  "Garden & Outdoor",
];
export function Categories() {
  return (
    <div className="  self-center w-[90vw]  max-w-[1750px] text-lg flex items-center">
      <div className="text-white  snap-end sticky z-10  left-0 capitalize whitespace-nowrap scroll  cursor-pointer bg-[#2680C9] px-4 py-2 hover:bg-opacity-90   flex justify-center ">
        <div className="flex items-center ">
          <div className="mr-2">
            <TbGridDots />
          </div>
          <h4> VIEW ALL</h4>
        </div>
      </div>
      <ul className="  w-full relative flex divide-[#3387CD] divide-x-[1px] overflow-auto scroll-smooth scrollBarHidden snap-x ">
        {CATEGORIES.map((category, index) => (
          <li
            key={index}
            className="text-white snap-start 	 capitalize whitespace-nowrap scroll group cursor-pointer bg-secondary  px-4 py-2 hover:bg-opacity-90  relative flex justify-center "
          >
            <h4> {category}</h4>
            <span
              className="bg-white transition-all duration-200  w-0 h-1 group-hover:w-full bottom-0 absolute"
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
