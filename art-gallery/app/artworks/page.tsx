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
      <div className="bg-[#113f67] py-3 flex justify-center text-2xl font-serif text-slate-50 min-h-screen ">
        {/* artworks card  */}
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
