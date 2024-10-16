export type ArtWorkType = {
  api_link: string;
  api_model: string;
  artist_display: string;
  artist_id: number;
  artist_ids: number[];
  artist_title: string;
  artist_titles: string[];
  artwork_type_id: number;
  artwork_type_title: string;
  category_ids: string[];
  category_titles: string[];
  classification_id: string;
  classification_ids: string[];
  classification_title: string;
  classification_titles:string[]
  color:ColorType
  colorfulness:number,
  credit_line:string,
  date_display:string,
  date_end:number
  date_start:number,
  department_id:string,
  department_title:string,
  edition:string,
  exhibition_history:string,
  fiscal_year:number
  id:number
  image_id:string,
  internal_department_id:number
  place_of_origin:string
  provenance_text:string
  publication_history:string
  title:string
};


export type ColorType = {
    h:number,
    l:number,
    percentage:number,
    population:number,
    s:number,

}

export type ArtWorkCardType = {
  image_id : string
  artist_display : string
  artist_title : string
  artwork_type_title : string
  title : string
  date_display : string
  iiif_url:string | null
  image_url:string
  id:number
};