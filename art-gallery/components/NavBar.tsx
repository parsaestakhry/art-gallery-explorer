"use client"

// importing the color pallete svg 
import { Palette } from "@phosphor-icons/react";
import React from "react";

export const NavBar = () => {
  return (
    <div className="navbar bg-[#113f67]">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl text-slate-100">
          Art Explorer{" "}
          <span className="mt-1">
            {" "}
            <Palette size={27} weight="bold" />{" "}
          </span>{" "}
        </a>
        {/* artworks anchor link */}
        <a className="btn text-xl text-slate-100 bg-inherit btn-ghost border-none underline" href="/artworks">Artworks</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
