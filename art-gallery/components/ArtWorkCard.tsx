import { ArtWorkCardType, ArtWorkType } from "@/types/types";
import React from "react";

export const ArtWorkCard = ({
  image_id,
  artist_display,
  artist_title,
  artwork_type_title,
  title,
  date_display,
  iiif_url,
  image_url,
}: ArtWorkCardType) => {
  //console.log(image_url)

  return (
    <>
      <div
        onClick={() =>
          (
            document.getElementById("my_modal_1") as HTMLDialogElement
          ).showModal()
        }
      >
        <figure>
          <img
            className="object-cover h-96 border-2 rounded-md "
            src={image_url}
            alt="Album"
          />
        </figure>
        {/* <div className="card-body ">
      <h2 className="card-title">{title}</h2>
      <p>{artist_title}</p>
      <div className="font-mono">
        <ul className="flex flex-col space-y-10 ">
          <li>Date of Display : {date_display}</li>
          <li>Artist Display : {artist_display}</li>
          <li>Artwork type title : {artwork_type_title}</li>
        </ul>
      </div>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Look up</button>
      </div>
    </div> */}
      </div>
      <dialog id="my_modal_1" className="modal  ">
        <div className="modal-box bg-[#a2a8d3] text-slate-700 font-serif space-y-5 ">
          <h3 className="text-2xl ">Title : {title}</h3>
          <h2 className="text-lg ">Artist : {artist_title}</h2>
          <h2 className="text-lg ">Display : {artist_display}</h2>
          <h2 className="text-lg ">Artwork Type : {artwork_type_title}</h2>
          <h2 className="text-lg ">Date of display : {date_display}</h2>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
