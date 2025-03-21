import { Dropdown } from "../../components/common/Dropdown";

export const DashboardWorkloadContainer = () => {
  return (
    <div className="bg-gray-300/50 h-[400px] rounded-2xl p-[18px] transition-transform hover:translate-y-[-0.05rem] hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Projects Workload</h3>
        <Dropdown label="Last 3 months" />
      </div>
    </div>
  );
};
