import { CaretDown } from "@phosphor-icons/react";

export const ActionsCollapse = () => {
  return (
    <div>
      <div className="collapse bg-[#38598b] sm:hidden border-none ">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-sans text-slate-100 flex   items-center ">
          Actions <CaretDown className="mt-1 ml-2" weight="bold" />
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
