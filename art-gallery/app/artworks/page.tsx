"use client";

import { ArtWorkType } from "@/types/types";
import { useEffect, useState } from "react";

export default function Page() {
  // page number state 
  const [pageNumber, setPageNumber] = useState<number>(1);
  // artwork state
  const [artWorks, setArtWorks] = useState<ArtWorkType[] | null>([]);
  // fetching artworks based on the pagination
  const getArtWorks = async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artists?page=${pageNumber}&limit=100 `,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
  };

  // calling function using useEffect
  useEffect(() => {
    getArtWorks();
  }, []);

  return (
    <>
      {/* filter navbar */}
      <div className="bg-[#38598b] py-3 flex justify-center text-2xl font-serif text-slate-50 min-h-screen ">
        hello
      </div>
      {/* artworks card */}
    </>
  );
}
