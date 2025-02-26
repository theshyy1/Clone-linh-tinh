import { TaskItem } from "../../components/items/task-dashboard-item";
import { ITask } from "../../models/dashboard-modal";

interface Props {
  todayTasks: ITask[];
}
export const Tasklist = ({ todayTasks }: Props) => {
  return (
    <div className="h-[195px] space-y-3 overflow-scroll pt-1">
      {todayTasks.map((task: ITask) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
