"use client";

import { ArtWorkCard } from "@/components/ArtWorkCard";
import { ArtWorkType, PaginationType } from "@/types/types";
import { useEffect, useState } from "react";

export default function Page() {
  // page number state
  const [pageNumber, setPageNumber] = useState<number>(1);
  // artwork state
  const [artWorks, setArtWorks] = useState<ArtWorkType[] | null>([]);
  // pagination state
  const [pagination, setPagination] = useState<PaginationType | null>();
  // iiifurl state
  const [IIIFURL, setIIIFURL] = useState<string | null>(null);

  // fetching artworks based on the pagination
  const getArtWorks = async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks?page=2&limit=50 `,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
    setArtWorks(data.data);
    setPagination(data.pagination);
    // setting the iiif url
    setIIIFURL(data.config.iiif_url);
  };

  // calling function using useEffect
  useEffect(() => {
    getArtWorks();
  }, []);
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
        <span className="text-4xl font-serif ">Take a look at our unique collection</span>
        <div className="flex flex-wrap mx-10 my-10 justify-center ">
          {artWorks?.map((art, index) => (
            <div key={index} className="carousel-item">
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
      </div>
    </>
  );
}
