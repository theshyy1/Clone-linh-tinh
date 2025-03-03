import { mdilGridLarge, mdilLayers } from "@mdi/light-js";
import Icon from "@mdi/react";
import { useState } from "react";
import { groupTeams } from "../../assets/static-data/profile-user";
import { Button } from "../../components/common/button";
import Popover from "../../components/common/popover";
import { AnimateTransition } from "../../components/common/transition";
import { DetailTeamProfileItem } from "../../components/items/detail-teams-profile-item";
import { ITeam } from "../../models/profile-modal";
import { Footer } from "../../components/common/footer";

export const TeamProfileContainer = () => {
  const [isGrid, setGrid] = useState<"grid" | "flex">("grid");

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center py-6">
        <span className="font-semibold text-base">
          {groupTeams.length} teams
        </span>
        <div className="flex border rounded-lg bg-gray-300/50">
          <Popover
            placement="top"
            renderProp={
              <div className="relative border border-none bg-black/70 px-3 py-1 text-sm text-white shadow-md">
                Column view
              </div>
            }
          >
            <Button
              onClick={() => setGrid("grid")}
              className={`shadow-md rounded-lg ${isGrid === "grid" ? "bg-white" : "bg-transparent"} `}
              icon={<Icon path={mdilGridLarge} size={0.7} />}
            />
          </Popover>
          <Popover
            placement="top"
            renderProp={
              <div className="relative border border-none bg-black/70 px-3 py-1 text-sm text-white shadow-md">
                List view
              </div>
            }
          >
            <Button
              onClick={() => setGrid("flex")}
              className={`shadow-md rounded-lg ${isGrid === "flex" ? "bg-white" : "bg-transparent"}`}
              icon={<Icon path={mdilLayers} size={0.7} />}
            />
          </Popover>
        </div>
      </div>
      <AnimateTransition>
        <div
          className={`${isGrid === "grid" ? "grid grid-cols-12 gap-6" : "space-y-8"} pb-[100px]`}
        >
          {groupTeams.map((team: ITeam) => (
            <DetailTeamProfileItem grid={isGrid} key={team.id} team={team} />
          ))}
        </div>
      </AnimateTransition>
    </div>
  );
};
