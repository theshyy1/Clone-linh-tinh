import { mdiDotsVertical } from "@mdi/js";
import { mdilChevronRight } from "@mdi/light-js";
import Icon from "@mdi/react";
import { Link, useLocation } from "react-router-dom";
import {
  connectionsData,
  projectsData,
  teamsData,
} from "../../assets/static-data/profile-user";
import { CustomProfileComponent } from "../../components/customs/custom-profile-component";
import { ConnectProfileItem } from "../../components/items/connects-profile-item";
import { ProjectProfileItem } from "../../components/items/projects-profile-item";
import { TeamProfileItem } from "../../components/items/teams-profile-item";
import { ActivityTimelineProfileContainer } from "./activiy-timeline-profile-container";

export const TimelineProfile = () => {
  return (
    <div className="">
      <CustomProfileComponent
        title="Activity stream"
        icon={<Icon path={mdiDotsVertical} size={0.8} />}
      >
        <ActivityTimelineProfileContainer />
        <div className="border-t p-5 text-blue-600 hover:text-blue-700 cursor-pointer font-semibold block">
          View more
        </div>
      </CustomProfileComponent>
      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="col-span-6">
          <CustomProfileComponent title="Connections">
            <div className="overflow-y-auto space-y-3 mb-7">
              {connectionsData.map((user) => (
                <ConnectProfileItem key={user.id} connecter={user} />
              ))}
            </div>
            <Link
              to="/user-profile/connections"
              className="cursor-pointer flex justify-center items-center p-5 hover:text-blue-700 text-sm text-text-light border-t"
            >
              View all connections
              <Icon path={mdilChevronRight} size={1} />
            </Link>
          </CustomProfileComponent>
        </div>
        <div className="col-span-6">
          <CustomProfileComponent title="Teams">
            {teamsData.map((team) => (
              <TeamProfileItem key={team.id} team={team} />
            ))}
            <Link
              to="/user-profile/teams"
              className="cursor-pointer flex items-center justify-center p-5 hover:text-blue-700 text-sm text-text-light border-t"
            >
              View all teams
              <Icon path={mdilChevronRight} size={1} />
            </Link>
          </CustomProfileComponent>
        </div>
      </div>
      <CustomProfileComponent
        title="Projects"
        icon={<Icon path={mdiDotsVertical} size={0.8} />}
        classnames="mt-8"
      >
        <div className="bg-gray-300/50 text-gray-500/70 flex items-center justify-between uppercase text-xs h-12 px-4">
          <span className="w-[45%]">project</span>
          <span className="w-[40%]">progress</span>
          <span className="w-[15%] text-right">hours spent</span>
        </div>
        <ul className="space-y-3 py-4">
          {projectsData.map((project) => (
            <ProjectProfileItem key={project.id} project={project} />
          ))}
        </ul>
        <span className="cursor-pointer flex items-center justify-center p-5 hover:text-blue-700 text-sm text-text-light border-t">
          View all projects
          <Icon path={mdilChevronRight} size={1} />
        </span>
      </CustomProfileComponent>
    </div>
  );
};
