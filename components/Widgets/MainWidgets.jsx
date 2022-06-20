import React from "react";

export function MainWidgets() {
  return (
    <>
      {/* left widget */}
      <div className=" relative flex flex-col overflow-hidden rounded-xl bg-radialBlack text-white ">
        <h1 className="bg-red-2000 z-10 flex-1 p-6 text-6xl font-extrabold capitalize">
          Sweet clothes for sweet you
        </h1>

        <img
          className="max-w[100x%] shrink-1 absolute -right-14 -bottom-16 float-right  inline-block  "
          src="assets/clothes2-1.png"
          alt=""
        />
        <div className="group absolute right-12 bottom-8 z-10 cursor-pointer overflow-hidden rounded-md border px-6 py-1 text-white  hover:text-black100">
          <button className="rlative  flex  items-center ">
            <span
              arie-hidden="true"
              className=" absolute -left-full -z-10 h-full w-full  bg-white  transition-all  duration-200 ease-in-slow group-hover:left-0"
            />
            show
          </button>
        </div>
      </div>

      <div className=" relative flex flex-col overflow-hidden rounded-xl bg-radialBlack text-white ">
        <h1 className="bg-red-2000 z-10 flex-1 p-6 text-6xl font-extrabold capitalize">
          electronics for everybody
        </h1>

        <img
          className="max-h[50x%] shrink-1 absolute -right-14 -bottom-16 float-right  inline-block  "
          src="assets/clothes2-1.png"
          alt=""
        />
        <div className="group absolute right-12 bottom-8 z-10 cursor-pointer overflow-hidden rounded-md border px-6 py-1 text-white  hover:text-black100">
          <button className="rlative  flex  items-center ">
            <span
              arie-hidden="true"
              className=" absolute -left-full -z-10 h-full w-full  bg-white  transition-all  duration-200 ease-in-slow group-hover:left-0"
            />
            show
          </button>
        </div>
      </div>

      {/* right widget */}
    </>
  );
}
