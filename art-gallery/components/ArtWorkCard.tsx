import { ArtWorkCardType } from "@/types/types";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export const ArtWorkCard = ({
  image_id,
  artist_display,
  artist_title,
  artwork_type_title,
  title,
  date_display,
  iiif_url,
  image_url,
  id
}: ArtWorkCardType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  //console.log(image_url)
  //console.log(image_id)
  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
    (document.getElementById(`my_modal_${title}`) as HTMLDialogElement).showModal();
  };

  // Function to close modal
  const closeModal = () => {
    (document.getElementById(`my_modal_${title}`) as HTMLDialogElement).close();
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mx-5 my-5" >
        <figure>
          <img
            onClick={openModal}
            className="object-cover h-96 border-2 z-40 rounded-md sm:hover:scale-150 "
            src={image_url}
            alt={title}
          />
        </figure>
      </div>

      <dialog id={`my_modal_${title}`} className="modal">
        <div className="modal-box bg-[#a2a8d3] text-slate-700 font-serif space-y-5">
          <>
            <h3 className="text-2xl">Title: {title}</h3>
            <h2 className="text-lg">Artist: {artist_title}</h2>
            <h2 className="text-lg">Display: {artist_display}</h2>
            <h2 className="text-lg">Artwork Type: {artwork_type_title}</h2>
            <h2 className="text-lg">Date of display: {date_display}</h2>
          </>

          
          <div className="modal-action  ">
            <button
              className="btn btn-ghost text-slate-900 text-lg border-none "
              onClick={closeModal}
            >
              Close
            </button>
            <button
              className="btn  text-slate-100 text-lg border-none "
              onClick={() => router.push(`/artworks/${id}`)}
            >
              Learn More
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
