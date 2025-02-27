import Icon from "@mdi/react";
import { mdiSwapVertical } from "@mdi/js";
import { IProject } from "../../models/project-model";

interface IProps {
  handleSortProject: (key: keyof IProject) => void;
}

export const HeadingListContainer = ({ handleSortProject }: IProps) => {
  return (
    <div className="bg-[#f8fafd] border flex w-full justify-around py-3 mt-6">
      <span className="cursor-pointer flex-grow font-bold">Name</span>
      <span className="cursor-pointer w-[15%] text-left font-bold">
        Project manager
      </span>
      <span
        className="cursor-pointer w-[15%] justify-center flex font-bold hover:opacity-55"
        onClick={() => handleSortProject("date")}
      >
        Due date {<Icon path={mdiSwapVertical} size={1} />}
      </span>

      <span
        className="cursor-pointer w-[15%] justify-center flex font-bold hover:opacity-55"
        onClick={() => handleSortProject("status")}
      >
        Status {<Icon path={mdiSwapVertical} size={1} />}
      </span>
      <span
        className="cursor-pointer flex w-[15%] justify-end font-bold hover:opacity-55"
        onClick={() => handleSortProject("progress")}
      >
        Progress {<Icon path={mdiSwapVertical} size={1} />}
      </span>
      <span className="cursor-pointer w-[15%] pl-12 text-center font-bold">
        Action
      </span>
    </div>
  );
};
