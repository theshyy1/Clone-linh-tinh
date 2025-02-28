import { mdiAccountStar, mdiDotsVertical, mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "../../components/common/button";

export const NavigateProfileContainer = () => {
  return (
    <div className="flex items-center justify-between pb-4">
      <ul className="flex items-center space-x-10">
        <li className="hover:text-blue-600 text-blue-600 font-semibold pb-3">
          <a href="">Profile</a>
        </li>
        <li className="hover:text-blue-600 hover:border-blue-600 pb-3">
          <a href="">Teams</a>
        </li>
        <li className="hover:text-blue-600 hover:border-blue-600 pb-3">
          <a href="">Projects</a>
        </li>
        <li className="hover:text-blue-600 hover:border-blue-600 pb-3">
          <a href="">Connections</a>
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
