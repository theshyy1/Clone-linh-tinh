import {
  mdiArrowRightBottom,
  mdiDelete,
  mdiEyeCircleOutline,
  mdiLeadPencil,
} from "@mdi/js";
import Icon from "@mdi/react";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { statusStyles } from "../../common/styles";
import { DetailProjectContiner } from "../../containers/projects/detail-project-container";
import { ProjectContext } from "../../contexts/project/list-project-context";
import { IProject } from "../../models/project-model";
import { Button } from "../common/button";
interface IProps {
  sum: IProject;
}

export const SingleProjectItem = ({ sum }: IProps) => {
  const { detailPreview, setDetailPreview, deleteProject, handleEditStart } =
    useContext(ProjectContext);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isPreview, setPreview] = useState<boolean>(false);

  const MouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    handleMouseEnter(sum.id);
  };

  const handleMouseEnter = (id: number) => {
    setSelectedId(id);
  };
  const handleMouseLeave = () => setSelectedId(null);

  const MouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    handleMouseLeave();
  };

  const handleShowPreview = () => {
    setPreview(true);
    setDetailPreview(sum);
  };
  return (
    <div
      className={`relative flex items-center text-sm ${selectedId === sum.id ? "bg-background-dark rounded-md px-2 transition-all duration-500" : ""}`}
      onMouseEnter={MouseEnter}
      onMouseLeave={MouseLeave}
    >
      <AnimatePresence>
        {isPreview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div
              onClick={() => setPreview(false)}
              className="fixed inset-0 z-50 flex w-full items-center justify-center bg-black/50 transition-all duration-500"
            >
              <DetailProjectContiner
                onClose={() => setPreview(false)}
                projectPreviewed={detailPreview}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {selectedId === sum.id && <Icon path={mdiArrowRightBottom} size={1} />}

      <span className="flex-grow w-[180px]">
        {sum.name.length >= 50 ? `${sum.name.slice(0, 50)}...` : sum.name}
      </span>
      <span className="w-[15%] text-left">{sum.manager}</span>
      <span className="w-[15%] text-center">{sum.date}</span>
      <span
        className={`${statusStyles[sum.status]} w-[15%] rounded-full py-1 text-center text-xs`}
      >
        {sum.status}
      </span>
      <span className="flex w-[15%] items-center justify-end pr-5">
        <span className="relative flex border-spacing-1 items-center justify-center overflow-hidden rounded-full border-[#DFD7D3] text-xs">
          {sum.progress || "0%"}
        </span>
      </span>
      {selectedId === sum.id && (
        <span
          onClick={handleShowPreview}
          className="absolute right-[23%] top-2"
        >
          <Icon path={mdiEyeCircleOutline} size={1} />
        </span>
      )}
      <span className="flex w-[15%] items-center justify-end space-x-3 pr-5">
        <Button
          onClick={() => handleEditStart(sum)}
          className="fill-success bg-success/80 text-white rounded"
          icon={<Icon path={mdiLeadPencil} size={1} />}
        />
        <Button
          onClick={() => deleteProject(sum.id)}
          className="bg-error/80 text-white rounded"
          icon={<Icon path={mdiDelete} size={1} />}
        />
      </span>
    </div>
  );
};
