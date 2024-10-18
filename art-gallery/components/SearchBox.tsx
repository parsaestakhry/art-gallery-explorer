import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";

export const SearchBox = () => {
  return (
    <div className="flex bg-[#113f67] ">
      {/* search box  */}
      <label className="input input-bordered bg-[#113f67] flex items-center gap-2 border-none w-full ">
        <input
          type="text"
          className="grow bg-[#113f67] placeholder:text-slate-300 "
          placeholder="Search In ... "
        />
      </label>
      {/* search button */}
      <button className="btn btn-ghost border-2">
        <MagnifyingGlass weight="bold" className="mt-2" color="#ffff"  size={20} />
      </button>
      {/* filtering dropdown */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1 text-nowrap btn-ghost text-slate-100">
          Search filters ...
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
