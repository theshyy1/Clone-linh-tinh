import { SidebarProfile } from "./sidebar-profile";
import { TimelineProfile } from "./timeline-profile";

export const BodyProfileContainer = () => {
  return (
    <div className="w-full h-full mt-10">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <SidebarProfile />
        </div>
        <div className="col-span-8">
          <TimelineProfile />
        </div>
      </div>
    </div>
  );
};
