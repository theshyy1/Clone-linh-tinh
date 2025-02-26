import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import { useContext } from "react";
import { getTitleHeader } from "../../common/common";
import { ProjectContext } from "../../contexts/project/list-project-context";

export const Header = () => {
  const { titleHeader } = useContext(ProjectContext);
  console.log("titleHeader", titleHeader);
  return (
    <header className="bg-background-dark mx-auto flex h-24 items-center justify-between px-4">
      <h3 className="text-2xl font-semibold">{getTitleHeader(titleHeader)}</h3>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search for anything"
          className="text-text-light rounded-full border-none py-3 pl-5 text-sm outline-none"
        />
        <div className="mx-2.5 h-12 w-12 rounded-full bg-white" />
        <article className="flex items-center space-x-1 rounded-full bg-white px-2">
          <div className="pl-1 pr-3">
            <h2 className="text-sm">Alex meian</h2>
            <span className="text-text-light text-sm">Prodcut manager</span>
          </div>
          <span className="">
            <Icon path={mdiChevronDown} size={1} />
          </span>
        </article>
      </div>
    </header>
  );
};
