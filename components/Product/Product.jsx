import React from "react";
import { BsCartPlus } from "react-icons/bs";

export function Product() {
  return (
    <div className="flex flex-col w-56 rounded-lg shrink-0 bg-gray50">
      <div className="w-full rounded-tl-lg rounded-tr-lg h-52 ">
        <img
          className="object-cover max-w-full"
          src="assets/image-not-found.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col flex-1 p-4 ">
        <div className="flex-1 font-bold ">
          <h5 className="mt-2 text-lg leading-6 line-clamp-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          </h5>
          <p className="mt-2 text-sm leading-snug text-black80 line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            sapiente quidem, sequi consectetur reiciendis ipsum deleniti. Facere
            reprehenderit ullam ut aperiam magnam at, consectetur vel debitis.
          </p>
        </div>
        <div className="py-2 font-bold text-black90">
          <p>0000.00</p>
        </div>

        <div className="mt-1 ">
          <button className="flex items-center justify-center w-full px-6 py-1 mx-auto space-x-2 text-lg text-white rounded-md bg-secondary">
            <p> Add To Cart</p> <BsCartPlus className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
