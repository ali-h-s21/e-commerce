import React from "react";

export function MainWidgets() {
  return (
    <>
      {/* left widget */}
      <div className="relative flex flex-col overflow-hidden text-white rounded-xl bg-radialBlack">
        <h1 className="z-10 flex-1 p-6 text-6xl font-extrabold capitalize bg-red-2000">
          Sweet clothes for sweet you
        </h1>

        <img
          className="absolute inline-block float-right max-w-full shrink-1 -right-14 -bottom-16 "
          src="assets/clothes2-1.png"
          alt=""
        />
        <div className="absolute z-10 px-6 py-1 overflow-hidden text-white border rounded-md cursor-pointer group right-12 bottom-8 hover:text-black100">
          <button className="flex items-center rlative ">
            <span
              arie-hidden="true"
              className="absolute w-full h-full transition-all duration-200 bg-white -left-full -z-10 ease-in-slow group-hover:left-0"
            />
            show
          </button>
        </div>
      </div>

      {/* right widget */}

      <div className="relative flex flex-col overflow-hidden text-white rounded-xl bg-radialBlack">
        <h1 className="z-10 flex-1 p-6 text-6xl font-extrabold capitalize bg-red-2000">
          electronics for everybody
        </h1>

        <img
          className="shrink-1 relative bottom-0 -right-24 float-right inline-block max-w-[90%] "
          src="assets/electronics.png"
          alt=""
        />
        <div className="absolute z-10 px-6 py-1 overflow-hidden text-white border rounded-md cursor-pointer group right-12 bottom-8 hover:text-black100">
          <button className="flex items-center rlative ">
            <span
              arie-hidden="true"
              className="absolute w-full h-full transition-all duration-200 bg-white -left-full -z-10 ease-in-slow group-hover:left-0"
            />
            show
          </button>
        </div>
      </div>
    </>
  );
}
