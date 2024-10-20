"use client"

import { ArtWorkCard } from "@/components/ArtWorkCard";
import { FavoritesContext } from "@/context/FavoritesContext";
import { useContext } from "react";

export default function Page () {

    const favoritesContext = useContext(FavoritesContext)
    const iiif_url = "https://www.artic.edu/iiif/2";
    console.log(favoritesContext?.artworks)


    return (
        <div className="min-h-screen bg-[#113f67]  text-center ">
          <span className=" text-slate-50 text-4xl font-serif my-10 ">
            {" "}
            Your Favorites{" "}
          </span>
          {/* saved art cards  */}
          {favoritesContext?.artworks.map((art, index) => (
            <div key={index} className="carousel-item flex justify-center ">
              {/* passing props to each card  */}
              <ArtWorkCard
                image_id={art.image_id}
                artist_display={art.artist_display}
                artist_title={art.artist_title}
                artwork_type_title={art.artwork_type_title}
                title={art.title}
                date_display={art.date_display}
                iiif_url={iiif_url}
                image_url={`${iiif_url}/${art.image_id}/full/843,/0/default.jpg`}
                id={art.id}
              />
            </div>
          ))}
        </div>
    );
}