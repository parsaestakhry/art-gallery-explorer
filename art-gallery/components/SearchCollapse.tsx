import { ArtWorkType, ArtWorkSearchType } from "@/types/types";
import {
  CaretCircleDoubleDown,
  CaretDown,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { useState } from "react";
import { toast } from "react-toastify";

export const SearchCollapse = () => {
  // checkbox state
  const [selectedCheckbox, setSelectedCheckbox] = useState("");
  // input state
  const [inputValue, setInputValue] = useState("");

  // artwork state
  const [artWorks, setArtWorks] = useState<ArtWorkType[] | null>();
  // search result state
  const [searchResult, setResultState] = useState<ArtWorkSearchType[] | null>();
  // artist search result state
  const [artistsSearch, setArtistsSearch] = useState<
    ArtWorkSearchType[] | null
  >();

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
    if (selectedCheckbox === "") {
      toast.error("please select at least one field", {
        position: "bottom-right",
        theme: "dark",
      });
    }
    if (selectedCheckbox === "artworks") {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${inputValue}`
      );
      if (response.ok) {
        const data = await response.json();
        setResultState(data.data);
      }
    } else if (selectedCheckbox === "artists") {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artists/search?q=${inputValue}`
      );
      if (response.ok) {
        const data = await response.json();
        setArtistsSearch(data.data);
      }
    }
  };

  return (
    // search collapse
    <div className="collapse bg-base-200 sm:hidden ">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium flex items-center text-slate-200 ">
        Search <CaretDown className="mt-1 ml-2" weight="bold" />
      </div>
      {/* collapse content */}
      <div className="collapse-content">
        <div className="flex items-center  " >
          {/* search box */}
          <label className="input input-bordered bg-inherit flex items-center  border-2 w-full">
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              className="grow bg-[#113f67] placeholder:text-slate-300"
              placeholder={`Search In ${selectedCheckbox.toUpperCase()}`}
            />
          </label>
          {/* search button */}
          <button onClick={search} className="btn border-2">
            <MagnifyingGlass
              weight="bold"
              className=""
              color="#ffff"
              size={20}
            />
          </button>
        </div>
        
        {/* artworks checkbox  */}
        <div className="form-control mr-5">
          <label className="label cursor-pointer">
            <span className="label-text text-slate-100 mr-5">Artworks</span>
            <input
              name="checkbox"
              type="checkbox"
              className="checkbox"
              checked={selectedCheckbox === "artworks"}
              onChange={() => handleCheckboxChange("artworks")}
            />
          </label>
        </div>
        {/* artists checkbox  */}
        <div className="form-control mr-5">
          <label className="label cursor-pointer">
            <span className="label-text text-slate-100 mr-5">Artists</span>
            <input
              name="checkbox"
              type="checkbox"
              className="checkbox"
              checked={selectedCheckbox === "artists"}
              onChange={() => handleCheckboxChange("artists")}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
