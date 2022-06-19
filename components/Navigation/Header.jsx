import { BsCart3, BsGlobe, BsSearch } from "react-icons/bs";

export function Header() {
  return (
    <nav className=" bg-white sticky top-0 z-20 border-b px-6 py-2 items-center flex justify-between  ">
      <div className="">LOGO</div>

      <div className=" flex justify-around items-center   w-3/4  ">
        <form className="w-3/6 flex">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 py-1 px-4 bg-gray50   text-base outline-none  rounded-tl-[4px] rounded-bl-[4px] border border-gray100 focus:border-primary  "
          />
          <button className="w-10  bg-secondary rounded-tr-[4px] rounded-br-[4px] flex items-center justify-center ">
            <BsSearch className="text-xl text-gray50" />
          </button>
        </form>

        <div className=" mr-7 flex space-x-16 items-center justify-center">
          <div className=" iconBtn ">
            <BsCart3 />
          </div>
          <div className=" iconBtn ">
            <BsGlobe />
          </div>

          <div className="px-4 py-1 border cursor-pointer rounded-md text-white bg-primary hover:bg-opacity-80 transition-colors duration-200">
            Sign in
          </div>
        </div>
      </div>
    </nav>
  );
}
