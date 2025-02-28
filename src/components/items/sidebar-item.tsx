import { JSX, useContext } from "react";
import { NavLink } from "react-router-dom";
import Popover from "../common/popover";
import { AppContext } from "../../contexts/dashboard/dashboard-context";

export interface ICategory {
  id: number;
  title: string;
  icon: JSX.Element;
  link: string;
}

export const SidebarItem = (props: ICategory) => {
  const { id, title, icon, link } = props;
  const { isCollapsed } = useContext(AppContext);

  return (
    <Popover
      renderProp={
        !isCollapsed && (
          <span className="relative rounded-full border border-none bg-white px-3 py-1 text-sm text-black shadow-md">
            {title}
          </span>
        )
      }
    >
      <NavLink
        to={link}
        key={id}
        end
        className={({ isActive }) =>
          isActive
            ? "flex items-center cursor-pointer rounded-full text-blue-600 py-3"
            : `flex items-center rounded-full py-3 transition-transform duration-100 hover:translate-y-[-0.04rem] hover:text-blue-600`
        }
      >
        <span className="px-4">{icon}</span>
        {isCollapsed && <span>{title}</span>}
      </NavLink>
    </Popover>
  );
};
