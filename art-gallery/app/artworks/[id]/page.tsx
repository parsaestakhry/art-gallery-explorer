"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ArtWorkType } from "@/types/types";

export default function Page() {
  // reading the query parameters
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [artWork, setArtWork] = useState<ArtWorkType | null>();

  //  reading the parameters using useEffect
  useEffect(() => {
    // assigning parameters
    const url = `${pathname}`;
    const art_id = url.replace("/artworks/", "");

    //console.log(art_id);
    // fetching the artwork data from the api
    const getArt = async () => {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/${art_id}`
      );
      //   assigning valyes
      const data = await response.json();
      //console.log(data);
      setArtWork(data.data);
    };
    getArt();
  }, [pathname, searchParams]);

  

  return (
    <>
      <div className="bg-[#38598b]">
        <div className="sm:carousel sm:w-full hidden ">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
            />
          </div>
        </div>
        
        <div className="card lg:card-side  shadow-xl min-h-screen rounded-none text-slate-50 font-serif ">
          <figure>
            <img
              className=" object-fill w-full sm:hidden"
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
