"use client";

// importing the color pallete svg
import { Palette } from "@phosphor-icons/react";
import React from "react";
import { ArtistsDropDown } from "./ArtistsDropDown";
import { SearchBox } from "./SearchBox";
import { Drawer } from "./Drawer";
import { SearchCollapse } from "./SearchCollapse";

export const NavBar = () => {
  return (
    <div className="bg-base-200">
      <SearchBox />
      <div className="navbar bg-[#113f67] ">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl text-slate-100">
            Art Explorer{" "}
            <span className="mt-1">
              {" "}
              <Palette size={27} weight="bold" />{" "}
            </span>{" "}
          </a>
          {/* artworks anchor link */}
          <a
            className="md:btn md:text-xl md:text-slate-100 md:bg-inherit md:btn-ghost md:border-none md:underline  hidden  "
            href="/artworks"
          >
            Artworks
          </a>
          <ArtistsDropDown />
        </div>
        <div className="flex-none"><Drawer /></div>
      </div>
      <SearchCollapse />
    </div>
  );
};
