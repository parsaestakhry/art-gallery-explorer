import { Hamburger, List } from "@phosphor-icons/react";

export const Drawer = () => {
  return (
    <div>
      <div className="drawer drawer-end sm:hidden ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content z-50 ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost text-slate-100 z-50 "
          >
            <List size={30} />
          </label>
        </div>
        <div className="drawer-side z-50  min-h-screen">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu  min-h-full w-80 p-4 space-y-5 text-slate-100 text-xl bg-[#113f67] underline ">
            {/* Sidebar content here */}
            <li>
              <a href="/artworks" >
                Artworks
              </a>
            </li>
            <li>
              <a href="/favorites">Favorites</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
