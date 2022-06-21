import React from "react";
import { Product } from "../Product/Product";

export default function ProductsSuggestions({ title, data }) {
  return (
    <div className="">
      <h4 className="mb-1 px-6 text-[32px] capitalize ">{title}</h4>
      <div className="flex px-6 space-x-6 overflow-x-auto p max-w-screen scrollBarHidden">
        {Array.from(Array(10)).map((ele) => (
          <Product />
        ))}
      </div>
    </div>
  );
}
