import {
  mdiAccountCheck,
  mdiAccountDetails,
  mdiIdentifier,
  mdiListStatus,
  mdiProgressTag,
  mdiClose,
} from "@mdi/js";
import Icon from "@mdi/react";
import { IProject } from "../../models/project-model";

interface IProps {
  projectPreviewed: IProject | null;
  onClose: () => void;
}
export const DetailProjectContiner = ({
  projectPreviewed,
  onClose,
}: IProps) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-background-light flex h-[400px] w-[750px] flex-col items-center rounded-lg shadow-md"
    >
      <div className="border-text-light relative w-full border-b text-center">
        <span className="block py-3 text-2xl text-black">Detail Project</span>

        <span
          onClick={onClose}
          className="absolute right-4 top-1 cursor-pointer p-3 hover:opacity-45"
        >
          <Icon path={mdiClose} size={1} />
        </span>
      </div>
      <div className="flex h-full w-full justify-start space-x-4 px-10 py-5">
        <div className="flex flex-col items-start space-y-10">
          <span className="text-text-light flex item-center space-x-2 px-3 text-base italic ">
            Id <Icon path={mdiIdentifier} size={1} />
          </span>
          <span className="text-text-light flex item-center space-x-2 px-3 text-[18px] italic">
            Name <Icon path={mdiAccountCheck} size={1} />
          </span>
          <span className="text-text-light flex item-center space-x-2 px-3 text-base italic">
            Manager <Icon path={mdiAccountDetails} size={1} />
          </span>
          <span className="text-text-light flex item-center space-x-2 px-3 text-base italic">
            Status
            <Icon path={mdiListStatus} size={1} />
          </span>
          <span className="text-text-light flex item-center space-x-2 px-3 text-base italic">
            Process <Icon path={mdiProgressTag} size={1} />
          </span>
        </div>
        <div className="flex flex-col justify-center">
          {projectPreviewed && (
            <>
              <span className="text-base block h-[60px] ">
                {projectPreviewed.id}
              </span>
              <span className="text-[18px] h-[60px]">
                {projectPreviewed.name}
              </span>
              <span className="text-base block h-[60px]">
                {projectPreviewed.manager}
              </span>
              <span className="text-base block h-[60px]">
                {projectPreviewed.status}
              </span>
              <span className="text-base block h-[60px]">
                {projectPreviewed.progress}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
