import { ArtWorkSearchType, ArtWorkType } from "@/types/types";
import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";

export const SearchBox = () => {
  // checkbox state
  const [selectedCheckbox, setSelectedCheckbox] = useState("");
  // input state
  const [inputValue, setInputValue] = useState("");

  // artwork state
  const [artWorks, setArtWorks] = useState<ArtWorkType[] | null>();
  // search result state
  const [searchResult, setResultState] = useState<ArtWorkSearchType[] | null>();

  // handling checkbox values
  const handleCheckboxChange = (value: string) => {
    if (selectedCheckbox === value) {
      setSelectedCheckbox(""); // Deselect if already selected
    } else {
      setSelectedCheckbox(value);
    }
  };

  // handling input box change
  const handleInputChange = async (e: any) => {
    setInputValue(e.target.value);
  };

  // handling search function
  const search = async () => {
    if (selectedCheckbox === "artworks") {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${inputValue}`
      );
      if (response.ok) {
        const data = await response.json();
        setResultState(data.data);
      }
    }
  };

  
  return (
    <div className="relative w-full bg-[#113f67] flex ">
      {/* search box */}
      <label className="input input-bordered bg-[#113f67] flex items-center gap-2 border-none w-full">
        <input
          onChange={(e) => handleInputChange(e)}
          type="text"
          className="grow bg-[#113f67] placeholder:text-slate-100"
          placeholder={`Search In ${selectedCheckbox.toUpperCase()}`}
        />
      </label>
      {/* search results if exists */}
      {searchResult && (
        <ul className="absolute top-full left-0 z-10 menu bg-inherit rounded-box w-full mt-2 shadow-lg">
          {searchResult.map((item, index) => (
            <li key={index} className="p-2">
              <a>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
      {/* search button */}
      <button onClick={search} className="btn btn-ghost border-2">
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
