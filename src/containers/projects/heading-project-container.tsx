import { mdiSwapVertical } from "@mdi/js";
import Icon from "@mdi/react";
import { IProject } from "../../models/project-model";

interface IProps {
  handleSortProject: (key: keyof IProject) => void;
}

export const HeadingListContainer = ({ handleSortProject }: IProps) => {
  return (
    <div className="border-text-light flex w-full justify-around border-b-2 pb-2.5 pt-6">
      <p className="flex-grow font-bold">Name</p>
      <p className="w-[15%] text-left font-bold">Project manager</p>
      <p
        className="w-[15%] justify-center flex font-bold hover:opacity-55"
        onClick={() => handleSortProject("date")}
      >
        Due date {<Icon path={mdiSwapVertical} size={1} />}
      </p>

      <p
        className="w-[15%] justify-center flex font-bold hover:opacity-55"
        onClick={() => handleSortProject("status")}
      >
        Status {<Icon path={mdiSwapVertical} size={1} />}
      </p>
      <p
        className="flex w-[15%] justify-end font-bold  hover:opacity-55"
        onClick={() => handleSortProject("progress")}
      >
        Progress {<Icon path={mdiSwapVertical} size={1} />}
      </p>
      <p className="w-[15%] pl-12 text-center font-bold">Action</p>
    </div>
  );
};
