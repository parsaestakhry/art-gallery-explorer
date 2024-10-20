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
  // Load initial state from localStorage
  const [artworks, setArtWorks] = useState<ArtWorkType[]>(() => {
    if (typeof window !== "undefined") {
      const storedArtworks = localStorage.getItem("artworks");
      return storedArtworks ? JSON.parse(storedArtworks) : [];
    }
    return [];
  });

  // Save artworks to localStorage whenever the state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("artworks", JSON.stringify(artworks));
    }
  }, [artworks]);

  // add artwork function
  const addArtWork = (artwork: ArtWorkType) => {
    setArtWorks((prevArtWorks) => [...prevArtWorks, artwork]);
  };

  // remove artwork function
  const removeArtWork = (index: number) => {
    setArtWorks((prevArtWorks) => prevArtWorks.filter((_, i) => i !== index));
  };

  return (
    <FavoritesContext.Provider value={{ artworks, addArtWork, removeArtWork }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use the FavoritesContext
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
