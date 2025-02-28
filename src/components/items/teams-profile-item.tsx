import { mdiAccountMultipleOutline } from "@mdi/js";
import Icon from "@mdi/react";

interface IProps {
  team: {
    id: number;
    nameTeams: string;
    quanityTeams: number;
  };
}

export const TeamProfileItem = ({ team }: IProps) => {
  return (
    <div className="px-4 py-2">
      <div className="flex items-center space-x-4 cursor-pointer">
        <Icon path={mdiAccountMultipleOutline} size={0.8} />
        <div className="flex flex-col space-y-1">
          <span className="text-black font-semibold">#{team.nameTeams}</span>
          <span className="text-text-light text-sm">
            {team.quanityTeams} connections
          </span>
        </div>
      </div>
    </div>
  );
};
