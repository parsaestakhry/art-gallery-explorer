"use client";

import { ArtWorkCard } from "@/components/ArtWorkCard";
import { ArtWorkType, PaginationType } from "@/types/types";
import { useEffect, useState } from "react";
import ArtWorkTypes from "@/json/artwork-types.json";
import AgentTypes from "@/json/agent-types.json";
import { CaretDown } from "@phosphor-icons/react";

export default function Page() {
  // page number state
  const [pageNumber, setPageNumber] = useState<number>(1);
  // artwork state
  const [artWorks, setArtWorks] = useState<ArtWorkType[] | null>([]);
  // pagination state
  const [pagination, setPagination] = useState<PaginationType | null>();
  // iiifurl state
  const [IIIFURL, setIIIFURL] = useState<string | null>(null);
  // artwork type filter
  const [artWorkTypes, setArtWorkTypes] = useState<string[] | null>([]);
  // agent types
  const [agentTypes, setAgentTypes] = useState<string[] | null>([]);
  // handling artwork types checkbox change
  const handleArtWorkTypeChange = (type: string) => {
    setArtWorkTypes((prevArtWorkTypes) => [...prevArtWorkTypes!, type]);
  };
  const handeAgentTypeChange=(type:string) => {
    setAgentTypes((prevAgentTypes) => [...prevAgentTypes!, type] )
  }

  //console.log(artWorkTypes)

  // fetching artworks based on the pagination
  const getArtWorks = async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks?page=${pageNumber}&limit=50 `,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    //console.log(data);
    setArtWorks(data.data);
    setPagination(data.pagination);
    // setting the iiif url
    setIIIFURL(data.config.iiif_url);
    // Filter artworks based on selected types
    const filteredArtWorks = data.data.filter((artwork: ArtWorkType) =>
      artWorkTypes!.length > 0
        ? artWorkTypes!.includes(artwork.artwork_type_title)
        : true
    );
    setArtWorks(filteredArtWorks);
  };

  // calling function using useEffect
  useEffect(() => {
    getArtWorks();
  }, [pageNumber, artWorkTypes]);
  //console.log(IIIFURL)

  return (
    <>
      <div className="bg-[#113f67] py-3 font-sans text-slate-100  min-h-screen text-center ">
        {/* filtering bar */}
        {/* <div className="flex justify-center">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-[#e7eaf6] btn-ghost border-none text-slate-700 text-xl hover:bg-inherit hover:text-slate-100 "
            >
              Artists
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-[#e7eaf6] rounded-box z-[1] w-52 p-2 shadow   "
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div> */}
        {/* artworks card  */}
        <h2 className="text-4xl font-serif ">
          Take a look at our unique collection
        </h2>
        {/* filtering bar */}
        <div className="my-10 flex justify-center">
          {/* artwork type filter  */}
          <div className="dropdown dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 rounded-3xl bg-slate-300 border-none text-slate-800 hover:bg-slate-400 text-lg "
            >
              Artwork Types
              <CaretDown className="mt-1" weight="bold" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow"
            >
              {ArtWorkTypes.data.map((type, index) => (
                <div key={index} className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text text-slate-100 text-md">
                      {type.title}
                    </span>
                    <input
                      onChange={() => handleArtWorkTypeChange(type.title)}
                      type="checkbox"
                      className="checkbox"
                    />
                  </label>
                </div>
              ))}
            </ul>
          </div>
          {/* agent types  */}
          {/* <div className="dropdown dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 rounded-3xl bg-slate-300 border-none text-slate-800 hover:bg-slate-400 text-lg "
            >
              Agent Types
              <CaretDown className="mt-1" weight="bold" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-64 p-2 shadow"
            >
              {AgentTypes.data.map((type, index) => (
                <div key={index} className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text text-slate-100 text-md">
                      {type.title}
                    </span>
                    <input
                      onChange={() => handeAgentTypeChange(type.title)}
                      type="checkbox"
                      className="checkbox"
                    />
                  </label>
                </div>
              ))}
            </ul>
          </div> */}
        </div>
        {/* artwork cards */}
        <div className="flex flex-wrap mx-10 my-10 justify-center ">
          {artWorks?.map((art, index) => (
            <div key={index} className="carousel-item ">
              {/* passing props to each card  */}
              <ArtWorkCard
                image_id={art.image_id}
                artist_display={art.artist_display}
                artist_title={art.artist_title}
                artwork_type_title={art.artwork_type_title}
                title={art.title}
                date_display={art.date_display}
                iiif_url={IIIFURL}
                image_url={`${IIIFURL}/${art.image_id}/full/843,/0/default.jpg`}
                id={art.id}
              />
            </div>
          ))}
        </div>
        {/* pagination component  */}
        <div className="join ">
          <button className="join-item btn bg-[#e7eaf6] border-none text-slate-900 hover:bg-slate-500 ">
            «
          </button>
          <button className="join-item btn bg-[#e7eaf6] border-none text-slate-900 hover:bg-slate-500 ">
            Page {pageNumber}
          </button>
          {pageNumber === pagination?.total_pages ? (
            ""
          ) : (
            <button
              onClick={() => setPageNumber(pageNumber + 1)}
              className="join-item btn bg-[#e7eaf6] border-none text-slate-900 hover:bg-slate-500 "
            >
              »
            </button>
          )}
        </div>
      </div>
    </>
  );
}
