"use client";

import { ArtWorkType } from "@/types/types";
import { createContext, useContext, useEffect, useState } from "react";
// type of the context
interface FavoritesContextProps {
  artworks: ArtWorkType[];
  addArtWork: (artwork: ArtWorkType) => void;
  removeArtWork: (index: number) => void;
}

// creating the artwork context
export const FavoritesContext = createContext<
  FavoritesContextProps | undefined
>(undefined);

// creating the provider
export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // artworks state
  const [artworks, setArtWorks] = useState<ArtWorkType[]>([]);
  //   add artworks function
  const addArtWork = (artwork: ArtWorkType) => {
    useEffect(() => {
      // adding the new artwork to the previous artworks
      setArtWorks((prevArtWorks) => [...prevArtWorks, artwork]);
    }, []);
  };
  //   remove artwork function
  const removeArtWork = (index:number) => {
    // filtering the artwork from the other artworks 
    setArtWorks((prevArtWorks) => prevArtWorks.filter((_, i) => i !== index))
  }

  return (
    <FavoritesContext.Provider value={{artworks, addArtWork, removeArtWork}}>
        {children}
    </FavoritesContext.Provider>
  )
};
