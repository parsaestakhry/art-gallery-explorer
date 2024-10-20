"use client";

// importing the color pallete svg
import { Palette } from "@phosphor-icons/react";
import React from "react";
import { ArtistsDropDown } from "./ArtistsDropDown";
import { SearchBox } from "./SearchBox";
import { Drawer } from "./Drawer";

export const NavBar = () => {
  return (
    <div>
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
            className="btn text-xl text-slate-100 bg-inherit btn-ghost border-none underline"
            href="/artworks"
          >
            Artworks
          </a>
          <ArtistsDropDown />
        </div>
        <div className="flex-none">
          {/* <Drawer /> */}
        </div>
      </div>
    </div>
  );
};
