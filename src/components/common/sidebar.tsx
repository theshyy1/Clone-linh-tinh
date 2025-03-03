import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { logoApp } from "../../assets/images";
import { ICategory, categories } from "../../assets/static-data/resource";
import { AppContext } from "../../contexts/dashboard/dashboard-context";
import { SidebarItem } from "../items/sidebar-item";
import Popover from "./popover";

export const Sidebar = () => {
  const { isCollapsed } = useContext(AppContext);
  const [selectedNavItem, setSelectedNavItem] = useState<string | null>(null);
  return (
    <aside
      className={`relative h-full ${!isCollapsed ? "w-[15%]" : "flex w-[6%]"} flex-col items-center truncate bg-white text-black border-r transition-all duration-500`}
    >
      <Popover
        renderProp={
          isCollapsed && (
            <div className="border-gray-200 relative z-[7] rounded-md border bg-white px-3 py-1 text-black shadow-sm">
              Promage Home
            </div>
          )
        }
      >
        <Link to="/" className="flex items-center pb-4 px-4 pt-8">
          <span className="">{logoApp}</span>
          {!isCollapsed && (
            <span className="pl-2 text-2xl font-bold text-black">Promage</span>
          )}
        </Link>
      </Popover>

      <Popover
        renderProp={
          isCollapsed && (
            <div className="relative rounded-full border border-none bg-white px-3 py-1 text-sm text-black shadow-md">
              Create New
            </div>
          )
        }
      >
        <button
          className={`${!isCollapsed && "w-full"} mb-[60px] mt-[78px] px-4 flex cursor-pointer items-center rounded-full bg-gray-300 text-black hover:opacity-85`}
        >
          <Icon path={mdiPlus} size={1} />
          {!isCollapsed && (
            <span className="whitespace-normal py-3 text-left text-sm">
              Create new project
            </span>
          )}
        </button>
      </Popover>
      <div className="overflow-y-auto overflow-x-hidden px-4 border-b">
        <div className="h-[500px]">
          <ul className="space-y-4">
            {categories &&
              categories?.map((item: ICategory) => {
                return (
                  <SidebarItem
                    key={item.id}
                    item={item}
                    setSelectedNavItem={setSelectedNavItem}
                    selectedNav={selectedNavItem}
                  />
                );
              })}
          </ul>
        </div>
      </div>
      {/* <span className="absolute bottom-4 left-4 pt-8">{question}</span> */}
    </aside>
  );
};
