import { BsCart3, BsGlobe, BsSearch } from "react-icons/bs";

export function Header() {
  return (
    <nav className=" sticky top-0 z-20 flex items-center justify-between border-b bg-white px-6 py-2  ">
      <div className="">LOGO</div>

      <div className=" flex w-3/4 items-center justify-around  ">
        <form className="flex w-3/6">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 rounded-tl-[4px] rounded-bl-[4px] border border-gray100 bg-gray50  py-1 px-4 text-base outline-none focus:border-primary  "
          />
          <button className="flex  w-10 items-center justify-center rounded-tr-[4px] rounded-br-[4px] bg-secondary ">
            <BsSearch className="text-xl text-gray50" />
          </button>
        </form>

        <div className=" mr-7 flex items-center justify-center space-x-16">
          <div className=" iconBtn ">
            <BsCart3 />
          </div>
          <div className=" iconBtn ">
            <BsGlobe />
          </div>

          <div className="cursor-pointer rounded-md border bg-primary px-4 py-1 text-white transition-colors duration-200 hover:bg-opacity-80">
            Sign in
          </div>
        </div>
      </div>
    </nav>
  );
}
