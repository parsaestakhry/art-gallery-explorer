import { ArtistType } from "@/types/types";
import { CaretDown, CaretRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export const ArtistsDropDown = () => {
  const [artistNames, setArtistNames] = useState<ArtistType[] | null>();
  const getTopPicks = async () => {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artists?limit=10",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setArtistNames(data.data)
    //console.log(data);
  };

  useEffect(() => {
    getTopPicks();
  }, []);

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  console.log(artistNames)

  return (
    <div className="sm:flex hidden">
      <div className="dropdown dropdown-hover">
        <a
         href="/artists"
          tabIndex={0}
          role="button"
          className="btn m-1 btn-ghost text-xl text-slate-100"
        >
          Artists <CaretRight className="-ml-1 mt-1" weight="bold" />
        </a>

        <ul className=" dropdown-content dropdown menu xl:menu-horizontal text-slate-100  bg-[#38598b] rounded-box lg:min-w-max z-40 ">
          <li>
            <span>Search Based on alphabet</span>
            <ul className="flex flex-wrap gap-2 max-w-xs overflow-auto">
              {alphabet.map((char, index) => (
                <li key={index}>
                  <a href="">{char}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <span>Top Picks</span>
            <ul>
              {artistNames?.map((object,index) => (
                <li key={index}>
                  <a>{object.title}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
