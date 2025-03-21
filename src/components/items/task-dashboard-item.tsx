import { taskStatusStyles } from "../../assets/static-data/resource";
import { ITask } from "../../models/dashboard-modal";

interface Props {
  task: ITask;
}

export const TaskItem = ({
  task: { id, isCompleted, title, status },
}: Props) => {
  return (
    <>
      <div key={id} className="relative flex items-center">
        <div className="flex items-center">
          {isCompleted ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="9" r="9" fill="#E65F2B" />
              <path d="M6 9L8 11L12 7" stroke="white" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                stroke="#060606"
                strokeOpacity="0.64"
              />
            </svg>
          )}
          <span className="mx-2 text-sm">{title}</span>
        </div>
        <span
          className={`${taskStatusStyles[status]} absolute right-24 rounded-full px-2 py-[5px] text-left text-xs`}
        >
          {status}
        </span>
      </div>
    </>
  );
};
