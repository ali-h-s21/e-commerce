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
    <div className="  text-md relative flex  w-[80vw] max-w-[1750px] items-center justify-center self-center ">
      <div className="scroll  relative left-0 z-10  flex cursor-pointer snap-end justify-center  whitespace-nowrap bg-[#2680C9] px-4 py-2 capitalize   text-white hover:bg-opacity-90 ">
        <div className="flex items-center ">
          <div className="mr-2 ">
            <TbGridDots />
          </div>
          <h4> VIEW ALL</h4>
        </div>
      </div>

      <div className="relative flex  items-center overflow-x-auto overflow-y-hidden ">
        {/* left arrow */}
        {showLeftArrow && (
          <span className="absolute left-0  z-10 cursor-pointer  py-1 px-4  text-[26px] text-white opacity-90 shadow-black transition-all hover:scale-110 hover:opacity-100 ">
            <div className=" rounded-full bg-black90 shadow-md shadow-black">
              <BsFillArrowLeftCircleFill className="" />
            </div>
          </span>
        )}

        {/* list of categories */}
        <ul
          onScroll={handeleScroll}
          className="  scrollBarHidden  flex   w-full snap-x divide-x-[1px] divide-[#3387CD] overflow-x-auto scroll-smooth   "
        >
          {CATEGORIES.map((category, index) => (
            <li
              key={index}
              className="  scroll group relative flex cursor-pointer snap-start justify-center whitespace-nowrap  bg-secondary px-4 py-2  capitalize text-white hover:bg-opacity-90 "
            >
              <h4> {category}</h4>
              <span
                className="absolute bottom-0 h-1  w-0 bg-white transition-all duration-200 group-hover:w-full"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>

        {/* right arrow */}
        {showRigtArrow && (
          <span className="absolute right-2  z-10 cursor-pointer  py-1 px-2  text-[26px] text-white opacity-[0.90] shadow-black transition-all hover:scale-110 hover:opacity-100 ">
            <div className="  rounded-full bg-black90 shadow-md shadow-black">
              <BsFillArrowRightCircleFill className="" />
            </div>
          </span>
        )}
      </div>
    </div>
  );
}
