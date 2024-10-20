import {
  CaretCircleDoubleDown,
  CaretDown,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { SearchBox } from "./SearchBox";

export const SearchCollapse = () => {
  return (
    <div className="collapse bg-base-200 ">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium flex items-center text-slate-200 ">
        Search <CaretDown className="mt-1 ml-2" weight="bold" />
      </div>
      <div className="collapse-content">
        <p>hello</p>
      </div>
    </div>
  );
};
