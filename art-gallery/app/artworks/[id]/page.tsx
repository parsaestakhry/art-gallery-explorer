"use client";

import { useEffect, useState, useContext } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ArtWorkType } from "@/types/types";
import { Bookmark } from "@phosphor-icons/react";
import { FavoritesContext } from "@/context/FavoritesContext";
import { toast, ToastContainer } from "react-toastify";
export default function Page() {
  // reading the query parameters
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // artworks state 
  const [artWork, setArtWork] = useState<ArtWorkType | null>();
  // iiif url state 
  const [IIIFURL, setIIIFURL] = useState<string | null>(null);
  // using the context
  const favoritesContext = useContext(FavoritesContext)
  
  
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
      setIIIFURL(data.config.iiif_url)
    };
    getArt();
  }, [pathname, searchParams]);

  const addToFavorites = () => {
    favoritesContext?.addArtWork(artWork!)
    toast.success("Added To Favorites!", {
      position:'bottom-right',
      theme:'dark'
    })
  }


  //console.log(favoritesContext?.artworks)


  return (
    <>
      <div className="bg-[#113f67]  ">
        <div className="sm:carousel sm:w-full hidden bg-black items-center ">
          <div id="item1" className="carousel-item mx-auto  ">
            <img
              src={`${IIIFURL}/${artWork?.image_id}/full/843,/0/default.jpg`}
              className="w-full h-[50vh] "
            />
          </div>
        </div>

        <div className="card lg:card-side  shadow-xl  rounded-none text-slate-50 font-sans  ">
          <figure>
            <img
              className=" object-fill w-full sm:hidden h-[50vh] "
              src={`${IIIFURL}/${artWork?.image_id}/full/843,/0/default.jpg`}
              alt="Album"
            />
          </figure>
          <div className="card-body text-lg font-mono   ">
            <h1 className="card-title sm:text-4xl text-xl ">
              Title : {artWork?.title}
            </h1>
            <hr />
            <p className="sm:text-3xl text-lg">
              {" "}
              Created By : {artWork?.artist_title ? artWork.artist_title : "no records"}
            </p>
            <ul className="mb-5 space-y-5 ">
              <li className="">Category : {artWork?.category_titles ? artWork.category_titles : "no records"}</li>

              <li className="">
                Classification :{" "}
                {artWork?.classification_title ? artWork.classification_title : "no records"}
              </li>

              <li className="">
                Department :{" "}
                {artWork?.department_title
                  ? artWork.department_title
                  : "no records"}
              </li>

              <li className="">
                Edition : {artWork?.edition ? artWork.edition : "no records"}
              </li>

              <li className="">
                Exhibition :{" "}
                {artWork?.exhibition_history
                  ? artWork.exhibition_history
                  : "no records"}
              </li>
              <li className="">Fiscal Year : {artWork?.fiscal_year ? artWork?.fiscal_year : "no records"}</li>
              <li className="">Place of Origin : {artWork?.place_of_origin ? artWork.place_of_origin : "no records" }</li>
            </ul>
            <div className="card-actions justify-end">
              <button onClick={() => addToFavorites()} className="btn btn-ghost text-xl">
                Add to favorites <Bookmark size={30} weight="bold" />{" "}
              </button>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
}
