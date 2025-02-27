import { overviews } from "../../assets/static-data/resource";
import { Dropdown } from "../../components/common/Dropdown";
import { OverviewItem } from "../../components/items/overview-dashboard-item";

export const DashboardOverviewsContainer = () => {
  return (
    <div className="border-text-light pt-7">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl">Overview</h3>
        <Dropdown label="Last 30 days" />
      </div>
      <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
        {overviews?.map((item) => (
          <OverviewItem key={item.id} overitem={item} />
        ))}
      </div>
    </div>
  );
};
