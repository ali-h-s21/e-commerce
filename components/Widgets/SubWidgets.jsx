import React from "react";
import {
  BsTags,
  BsTagFill,
  BsStarFill,
  BsStar,
  BsFillClockFill,
  BsClock,
  BsClockFill,
} from "react-icons/bs";

export function SubWidgets() {
  return (
    <div className="flex flex-col justify-between text-gray50 ">
      <div className="flex h-32 w-full  cursor-pointer flex-col justify-between rounded-lg bg-radialBlack p-4 text-[26px]">
        <div>
          <BsTagFill className="text-4xl" />
        </div>
        <div>
          <h3 className=" font-semibold">Today's Deals</h3>
        </div>
      </div>

      <div className="flex h-32 w-full  flex-col justify-between rounded-lg bg-radialBlack p-4 text-[26px]">
        <div>
          <BsClockFill className="text-4xl" />
        </div>
        <div>
          <h3 className=" font-semibold">New Arrivals</h3>
        </div>
      </div>

      <div className="flex h-32 w-full  flex-col justify-between rounded-lg bg-radialBlack p-4 text-[26px]">
        <div>
          <BsStarFill className="text-4xl" />
        </div>
        <div>
          <h3 className=" font-semibold">Best Sellers</h3>
        </div>
      </div>
    </div>
  );
}
