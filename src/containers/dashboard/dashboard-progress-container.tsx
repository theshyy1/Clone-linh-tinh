import { overallImage } from "../../assets/images";
import { overallProgress } from "../../assets/static-data/resource";
import { Dropdown } from "../../components/common/Dropdown";
import { ProgressItem } from "../../components/items/progress-dashboard-item";

export const DashboardProgressContainer = () => {
  return (
    <div className="bg-background-light h-[349px] rounded-2xl p-[18px] transition-transform hover:translate-y-[-0.05rem] hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Overall Progress</h3>
        <Dropdown label="All" />
      </div>
      <div className="flex items-center justify-center pb-6 pt-4">
        {overallImage}
      </div>
      <div className="flex items-center justify-between text-left">
        {overallProgress?.map((progress) => (
          <ProgressItem key={progress.id} {...progress} />
        ))}
      </div>
    </div>
  );
};
