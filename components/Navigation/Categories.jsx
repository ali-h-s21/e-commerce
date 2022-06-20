import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
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
  const [showLeftArrow, setshowLeftArrow] = useState(false);
  const [showRigtArrow, setShowRigtArrow] = useState(true);
  const handeleScroll = (e) => {
    const element = e.target;
    // element.scrollWidth : the width of the element including the overflow contnent.
    // element.scrollLeft : the number of pixels that an element's content is scrolled from its left edge.

    if (element.scrollLeft === 0) setshowLeftArrow(false);
    else setshowLeftArrow(true);
    if (element.scrollWidth - element.scrollLeft === element.clientWidth)
      setShowRigtArrow(false);
    else setShowRigtArrow(true);
  };
  return (
    <div className="  self-center w-[80vw] relative  max-w-[1750px] text-md flex items-center justify-center ">
      <div className="text-white  snap-end relative z-10  left-0 capitalize whitespace-nowrap scroll  cursor-pointer bg-[#2680C9] px-4 py-2 hover:bg-opacity-90   flex justify-center ">
        <div className="flex items-center ">
          <div className="mr-2 ">
            <TbGridDots />
          </div>
          <h4> VIEW ALL</h4>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-hidden  relative flex items-center ">
        {/* left arrow */}
        {showLeftArrow && (
          <span className="absolute text-white  opacity-90 z-10  hover:opacity-100 hover:scale-110  cursor-pointer py-1 px-4 transition-all shadow-black left-0 text-[26px] ">
            <div className="shadow-md shadow-black  w-fit h-fit bg-black90 rounded-full">
              <BsFillArrowLeftCircleFill className="" />
            </div>
          </span>
        )}

        {/* list of categories */}
        <ul
          onScroll={handeleScroll}
          className="  w-full  flex   divide-[#3387CD] divide-x-[1px] overflow-x-auto scroll-smooth scrollBarHidden snap-x   "
        >
          {CATEGORIES.map((category, index) => (
            <li
              key={index}
              className="  text-white snap-start capitalize whitespace-nowrap scroll group cursor-pointer bg-secondary  px-4 py-2 hover:bg-opacity-90  relative flex justify-center "
            >
              <h4> {category}</h4>
              <span
                className="bg-white transition-all duration-200  w-0 h-1 group-hover:w-full bottom-0 absolute"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>

        {/* right arrow */}
        {showRigtArrow && (
          <span className="absolute text-white  opacity-[0.90] z-10  hover:opacity-100 hover:scale-110  cursor-pointer py-1 px-2 transition-all shadow-black right-2 text-[26px] ">
            <div className="shadow-md shadow-black  w-fit h-fit bg-black90 rounded-full">
              <BsFillArrowRightCircleFill className="" />
            </div>
          </span>
        )}
      </div>
    </div>
  );
}
