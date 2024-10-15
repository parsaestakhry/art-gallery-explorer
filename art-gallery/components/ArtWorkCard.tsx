import { ArtWorkCardType, ArtWorkType } from '@/types/types';
import React from 'react'

export const ArtWorkCard = ({image_id,artist_display, artist_title, artwork_type_title, title,date_display, iiif_url } : ArtWorkCardType ) => {
  return (
    <div className="card  lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{artist_title}</p>
        <div className='font-mono' >
          <ul className='flex flex-col space-y-10 '>
              <li>
                Date of Display : {date_display}
              </li>
              <li>
                Artist Display : {artist_display}
              </li>
              <li>
                Artwork type title : {artwork_type_title}
              </li>
          </ul>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Look up</button>
        </div>
      </div>
    </div>
  );
}
