import { DashboardOverviewsContainer } from "../containers/dashboard/dashboard-overviews-container";
import { DashboardProgressContainer } from "../containers/dashboard/dashboard-progress-container";
import { DashboardSummaryContainer } from "../containers/dashboard/dashboard-summary-container";
import { DashboardTasksContainer } from "../containers/dashboard/dashboard-tasks-container";
import { DashboardWorkloadContainer } from "../containers/dashboard/dashboard-workload-container";

export const DashboardScreen = () => {
  return (
    <div className="bg-background-dark overflow-y-auto mx-auto px-4 flex h-full w-full flex-col">
      <DashboardOverviewsContainer />
      <div className="grid grid-cols-3 gap-4 md:grid-cols-6 xl:grid-cols-12">
        <div className="col-span-8 space-y-6 pt-8">
          <DashboardSummaryContainer />
          <DashboardTasksContainer />
        </div>
        <div className="col-span-4 space-y-6 pt-8">
          <DashboardProgressContainer />
          <DashboardWorkloadContainer />
        </div>
      </div>
    </div>
  );
};
