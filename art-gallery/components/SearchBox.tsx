import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";

export const SearchBox = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState("");

  const handleCheckboxChange = (value: string) => {
    if (selectedCheckbox === value) {
      setSelectedCheckbox(""); // Deselect if already selected
    } else {
      setSelectedCheckbox(value);
    }
  };

  //console.log(selectedCheckbox)

  return (
    <div className="flex bg-[#113f67] ">
      {/* search box */}
      <label className="input input-bordered bg-[#113f67] flex items-center gap-2 border-none w-full">
        <input
          type="text"
          className="grow bg-[#113f67] placeholder:text-slate-300"
          placeholder="Search In ..."
        />
      </label>
      {/* search button */}
      <button className="btn btn-ghost border-2">
        <MagnifyingGlass
          weight="bold"
          className="mt-2"
          color="#ffff"
          size={20}
        />
      </button>
      {/* filtering dropdown */}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 sm:text-nowrap btn-ghost text-slate-100 text-wrap"
        >
          Search filters ...
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-[#e7eaf6] rounded-box z-[1] w-52 p-2 shadow text-slate-800"
        >
          <div className="form-control mr-5">
            <label className="label cursor-pointer">
              <span className="label-text text-slate-900 mr-5">Artworks</span>
              <input
                name="checkbox"
                type="checkbox"
                className="checkbox"
                checked={selectedCheckbox === "artworks"}
                onChange={() => handleCheckboxChange("artworks")}
              />
            </label>
          </div>
          <div className="form-control mr-5">
            <label className="label cursor-pointer">
              <span className="label-text text-slate-900 mr-5">Artists</span>
              <input
                name="checkbox"
                type="checkbox"
                className="checkbox"
                checked={selectedCheckbox === "artists"}
                onChange={() => handleCheckboxChange("artists")}
              />
            </label>
          </div>
        </ul>
      </div>
    </div>
  );
};
