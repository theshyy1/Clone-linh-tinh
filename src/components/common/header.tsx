import {
  mdiChevronDown,
  mdiArrowCollapseRight,
  mdiArrowCollapseLeft,
} from "@mdi/js";
import Icon from "@mdi/react";
import { useContext } from "react";
import { getTitleHeader } from "../../common/common";
import { ProjectContext } from "../../contexts/project/list-project-context";
import { AppContext } from "../../contexts/dashboard/dashboard-context";

export const Header = () => {
  const { titleHeader } = useContext(ProjectContext);
  const { setIsCollapsed, isCollapsed } = useContext(AppContext);
  return (
    <header className="bg-white border-b mx-auto flex h-24 items-center justify-between px-4">
      <div
        className={`absolute  ${isCollapsed ? "left-[12.5%]" : "left-[75px]"}  top-7 w-10 z-100 h-10 rounded-full border bg-white transition-all duration-500 `}
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        <span className="w-full h-full flex items-center justify-center">
          <Icon
            path={!isCollapsed ? mdiArrowCollapseRight : mdiArrowCollapseLeft}
            size={0.7}
            color="black"
          />
        </span>
      </div>
      <h3 className="text-2xl font-semibold">{getTitleHeader(titleHeader)}</h3>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search for anything"
          className="text-text-light rounded-full border-none py-3 pl-5 text-sm outline-none"
        />
        <div className="mx-2.5 h-12 w-12 rounded-full bg-white" />
        <article className="flex items-center space-x-1 rounded-full bg-[#00a6eb] px-2">
          <div className="pl-1 pr-3 text-white">
            <h2 className="text-sm">Alex meian</h2>
            <span className="text-white text-sm">Prodcut manager</span>
          </div>
          <span className="">
            <Icon path={mdiChevronDown} size={1} />
          </span>
        </article>
      </div>
    </header>
  );
};
