import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";

export const SearchBox = () => {
  return (
    <div className="flex bg-[#113f67] ">
      <label className="input input-bordered bg-[#113f67] flex items-center gap-2 border-none w-full ">
        <input
          type="text"
          className="grow bg-[#113f67] placeholder:text-slate-300 "
          placeholder="Search In ... "
        />
        
      </label>
      <button className="btn btn-ghost border-2">
        <MagnifyingGlass weight="bold" size={20} />
      </button>
      
    </div>
  );
};
