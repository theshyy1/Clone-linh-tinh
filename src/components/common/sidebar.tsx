import { JSX, useContext } from "react";
import { Link } from "react-router-dom";
import { logoApp, question } from "../../assets/images";
import { AppContext } from "../../contexts/dashboard/dashboard-context";
import { SidebarItem } from "../items/sidebar-item";
import Popover from "./popover";
import { categories } from "../../assets/static-data/resource";
import Icon from "@mdi/react";
import { mdiArrowCollapse, mdiPlus } from "@mdi/js";

export interface ICategory {
  id: number;
  title: string;
  icon: JSX.Element;
  link: string;
}
export const Sidebar = () => {
  const { isCollapsed, setIsCollapsed } = useContext(AppContext);
  const handleCollapsed = () => setIsCollapsed((prev) => !prev);
  return (
    <aside
      className={`relative h-full ${isCollapsed ? "w-[260px] pl-[30px] pr-[46px]" : "flex w-[100px] flex-col items-center"} truncate bg-black text-white transition-all duration-500`}
    >
      <Popover
        renderProp={
          !isCollapsed && (
            <div className="border-gray-200 relative z-[7] rounded-md border bg-white px-3 py-1 text-black shadow-sm">
              Promage Home
            </div>
          )
        }
      >
        <Link to="/" className="flex items-center pb-4 pt-8">
          <span className="">{logoApp}</span>
          {isCollapsed && (
            <span className="pl-2 text-2xl font-bold text-white">Promage</span>
          )}
        </Link>
      </Popover>
      <div className="flex w-full justify-center" onClick={handleCollapsed}>
        <Icon path={mdiArrowCollapse} size={1} color="white" />
      </div>
      <Popover
        renderProp={
          !isCollapsed && (
            <div className="border-gray-200 relative z-[7] rounded-md border bg-white px-3 py-1 text-black shadow-sm">
              Create New
            </div>
          )
        }
      >
        <button
          className={`${isCollapsed && "w-full"} mb-[60px] mt-[78px] flex cursor-pointer items-center rounded-full bg-white px-2 py-1 text-black hover:opacity-85`}
        >
          <Icon path={mdiPlus} size={1} />
          {isCollapsed && (
            <span className="ml-[10px] whitespace-normal pr-4 text-left text-sm">
              Create new project
            </span>
          )}
        </button>
      </Popover>
      <div className="h-[470px] overflow-y-auto overflow-x-hidden">
        <ul className="space-y-2.5">
          {categories &&
            categories?.map((item: ICategory) => {
              return <SidebarItem key={item.id} {...item} />;
            })}
        </ul>
      </div>
      <span className="absolute bottom-4 left-4 pt-8">{question}</span>
    </aside>
  );
};
