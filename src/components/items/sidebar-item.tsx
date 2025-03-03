import { mdilChevronDown, mdilChevronUp } from "@mdi/light-js";
import Icon from "@mdi/react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ICategory } from "../../assets/static-data/resource";
import { AppContext } from "../../contexts/dashboard/dashboard-context";
import Popover from "../common/popover";
import { AnimateTransition } from "../common/transition";

interface IProps {
  setSelectedNavItem: React.Dispatch<React.SetStateAction<string | null>>;
  selectedNav: string | null;
  item: ICategory;
}

export const SidebarItem = ({
  item,
  setSelectedNavItem,
  selectedNav,
}: IProps) => {
  const { id, title, icon, childrens } = item;
  const { isCollapsed } = useContext(AppContext);
  const location = useLocation();

  const onHandleCollapsedSubNav = () => {
    if (selectedNav !== title) {
      setSelectedNavItem(title);
    } else {
      setSelectedNavItem(null);
    }
  };

  return (
    <Popover
      renderProp={
        isCollapsed &&
        childrens?.length && (
          <AnimateTransition>
            <ul className="flex flex-col bg-white text-black p-3 space-y-1 justify-center shadow-md overflow-hidden">
              {childrens?.map((nav) => (
                <Link
                  to={nav.childLink}
                  className={`py-2 px-3 text-sm text-gray-700 ${selectedNav === title ? "bg-gray-100" : ""} hover:bg-gray-100 rounded`}
                  key={nav.id}
                >
                  {nav.childName}
                </Link>
              ))}
            </ul>
          </AnimateTransition>
        )
      }
    >
      <>
        <div
          key={id}
          onClick={onHandleCollapsedSubNav}
          className="flex justify-between items-center rounded py-2.5 px-1.5 cursor-pointer hover:bg-gray-200 hover:text-blue-600 transition-all duration-500"
        >
          <div className={`flex justify-between items-center`}>
            {isCollapsed && (
              <span
                className={`w-1.5 h-1.5 mr-1 rounded-full block ${selectedNav === title ? "bg-blue-600" : "bg-gray-300"} `}
              />
            )}
            <span className="pr-4">{icon}</span>
            {!isCollapsed && <span>{title}</span>}
          </div>
          {!isCollapsed && (
            <span>
              {
                <Icon
                  path={selectedNav === title ? mdilChevronUp : mdilChevronDown}
                  size={0.8}
                />
              }
            </span>
          )}
        </div>
        {!isCollapsed && selectedNav === title && (
          <AnimateTransition>
            <ul className="flex w-full ml-3.5 px-2 flex-col space-y-1.5 justify-center border-l-2 border-gray-300 overflow-hidden">
              {childrens?.map((nav) => (
                <Link
                  to={nav.childLink}
                  className={`py-2 w-full px-2 text-gray-700 ${location.pathname === nav.childLink ? "bg-gray-100" : ""} hover:bg-gray-100 rounded`}
                  key={nav.id}
                >
                  {nav.childName}
                </Link>
              ))}
            </ul>
          </AnimateTransition>
        )}
      </>
    </Popover>
  );
};
