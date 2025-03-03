import { mdiAccountStar, mdiDotsVertical, mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "../../components/common/button";
import { NavLink } from "react-router-dom";

export const NavigateProfileContainer = () => {
  return (
    <div className="flex items-center justify-between translate-y-[-30px] border-b pb-2 border-gray-300">
      <ul className="flex items-center space-x-10 text-center">
        <li>
          <NavLink
            to="/user-profile"
            end
            className={({ isActive }) =>
              isActive
                ? "pb-4 border-b-2 border-blue-600"
                : "hover:text-blue-600 pb-3"
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user-profile/teams"
            className={({ isActive }) =>
              isActive
                ? "pb-4 border-b-2 border-blue-600"
                : "hover:text-blue-600"
            }
          >
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user-profile/projects"
            className={({ isActive }) =>
              isActive
                ? "pb-4 border-b-2 border-blue-600"
                : "hover:text-blue-600 pb-3"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user-profile/connections"
            className={({ isActive }) =>
              isActive
                ? "pb-4 border-b-2 border-blue-600"
                : "hover:text-blue-600 pb-3"
            }
          >
            Connections
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center space-x-3">
        <Button
          className="border border-blue-600 text-blue-600 rounded flex-row-reverse"
          icon={<Icon path={mdiAccountStar} size={0.8} />}
        >
          <span>Connect</span>
        </Button>

        <Button
          className="border rounded text-gray-400"
          icon={<Icon path={mdiMenu} size={0.8} />}
        />
        <Button
          className="border rounded text-gray-400"
          icon={<Icon path={mdiDotsVertical} size={0.8} />}
        />
      </div>
    </div>
  );
};
