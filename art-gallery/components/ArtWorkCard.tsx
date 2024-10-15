import { ArtWorkCardType, ArtWorkType } from '@/types/types';
import React from 'react'

export const ArtWorkCard = ({image_id,artist_display, artist_title, artwork_type_title, title,date_display, iiif_url, image_url } : ArtWorkCardType ) => {
  //console.log(image_url)
  
  return (
    <div className="">
      <figure >
        <img className="object-cover h-96" src={image_url} alt="Album" />
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
  );
}
