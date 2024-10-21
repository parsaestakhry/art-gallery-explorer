"use client";

import { useEffect, useState, useContext } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ArtWorkType } from "@/types/types";
import { Bookmark } from "@phosphor-icons/react";
import { FavoritesContext } from "@/context/FavoritesContext";
import { toast, ToastContainer } from "react-toastify";
import { ArtWorkCard } from "@/components/ArtWorkCard";
export default function Page() {
  // reading the query parameters
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // artworks state
  const [artWork, setArtWork] = useState<ArtWorkType | null>();
  // iiif url state
  const [IIIFURL, setIIIFURL] = useState<string | null>(null);
  // using the context
  const favoritesContext = useContext(FavoritesContext);
  // artwork state
  const [artWorks, setArtWorks] = useState<ArtWorkType[] | null>([]);
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
      setIIIFURL(data.config.iiif_url);
    };
    const viewMore = async () => {
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
      setIIIFURL(data.config.iiif_url);
    };
    getArt();
    viewMore();
  }, [pathname, searchParams]);

  const addToFavorites = () => {
    favoritesContext?.addArtWork(artWork!);
    toast.success("Added To Favorites!", {
      position: "bottom-right",
      theme: "dark",
    });
  };

  // getting from the same artist
  
  //console.log(favoritesContext?.artworks)

  return (
    <>
      <div className="bg-[#113f67]  ">
        <div className="sm:carousel sm:w-full hidden bg-black items-center ">
          <div id="item1" className="carousel-item mx-auto  ">
            <img
              src={`${IIIFURL}/${artWork?.image_id}/full/843,/0/default.jpg`}
              className="w-full h-full transform transition-transform duration-500 group-hover:scale-125"
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
              Created By :{" "}
              {artWork?.artist_title ? artWork.artist_title : "no records"}
            </p>
            <ul className="mb-5 space-y-5 ">
              <li className="">
                Category :{" "}
                {artWork?.category_titles
                  ? artWork.category_titles
                  : "no records"}
              </li>

              <li className="">
                Classification :{" "}
                {artWork?.classification_title
                  ? artWork.classification_title
                  : "no records"}
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
              <li className="">
                Fiscal Year :{" "}
                {artWork?.fiscal_year ? artWork?.fiscal_year : "no records"}
              </li>
              <li className="">
                Place of Origin :{" "}
                {artWork?.place_of_origin
                  ? artWork.place_of_origin
                  : "no records"}
              </li>
            </ul>
            <div className="card-actions justify-end">
              <button
                onClick={() => addToFavorites()}
                className="btn btn-ghost text-xl"
              >
                Add to favorites <Bookmark size={30} weight="bold" />{" "}
              </button>
            </div>
          </div>
        </div>
        {/* similar art carousel */}
                  <h2 className="text-center my-10 text-4xl font-serif text-slate-100" >View More!</h2>
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
        <ToastContainer />
      </div>
    </>
  );
}
