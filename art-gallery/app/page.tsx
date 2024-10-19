"use client";

import Image from "next/image";
import image from "@/public/images/marishka-tsiklauri-xIkqIhBPlV4-unsplash.jpg";
import { useEffect, useState } from "react";
import { ArtWorkType } from "@/types/types";
import { ArtWorkCard } from "@/components/ArtWorkCard";
import { Info } from "@phosphor-icons/react";

export default function Home() {
  // artwork state
  const [artWorks, setArtWorks] = useState<ArtWorkType[] | null>([]);
  // iiifurl state 
  const [IIIFURL, setIIIFURL] = useState<string|null>(null)
  // fetching the artworks
  const getArtWorks = async () => {
    // using the fetch api
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks?page=2&limit=10",
      {
        method: "GET",
      }
    );

    // passing it to a data variable
    const data = await response.json();
    // logging the response
    //console.log(data);
    // setting the data in the state
    setArtWorks(data.data);
    // setting the iiif url
    setIIIFURL(data.config.iiif_url)
  };

  // using useEffect to call the function
  useEffect(() => {
    getArtWorks();
  }, []);

  //console.log(IIIFURL);
  return (
    <div className="bg-[#113f67] min-h-screen ">
      {/* home page hero  */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${image.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-slate-200 ">
              Welcome to the show!
            </h1>
            <p className="mb-5 text-xl font-semibold text-slate-300 ">
              Visit the unique collection of our artworks powered by the
              institue of chicago's api.
              {/* <h3 className="mt-2 text-lg">
                Click on the button to learn more !
              </h3> */}
            </p>
            <button className="btn bg-[#caccd5] border-none text-slate-700 ">
              Learn more
            </button>
          </div>
        </div>
      </div>
      {/* carousel heading */}
      <div className="flex justify-center my-5  text-4xl font-serif text-slate-100" >
        <h2 className="sm:text-nowrap text-wrap text-center  " >A view of our unique collection </h2>
        <div className="dropdown dropdown-end flex ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-ghost text-info"
          >
            <Info size={28} />
          </div>
          <div
            tabIndex={0}
            className="card compact dropdown-content bg-base-100 rounded-box z-[1] w-64 shadow"
          >
            <div tabIndex={0} className="card-body">
              <h2 className="card-title">You needed more info?</h2>
              <p>Just tap on each image!</p>
            </div>
          </div>
        </div>
      </div>

      {/* carousel  */}
      <div className="carousel carousel-center bg-inherit rounded-box max-w-screen space-x-4 py-10 px-10 flex ">
        {/* mapping through artworks array */}
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
  );
}
