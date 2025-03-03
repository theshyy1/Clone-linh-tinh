import { mdiDotsVertical, mdiStar, mdiStarOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { ITeam } from "../../models/profile-modal";
interface IProps {
  team: ITeam;
  grid: string;
}

export const DetailTeamProfileItem = ({ team, grid }: IProps) => {
  const { nameTeams, description, industry, rated, members } = team;
  const handleWidth = (order: number) => {
    if (order <= rated) {
      return "100%";
    }
    if (order > rated && order - rated < 1) {
      return `${(rated - Math.floor(rated)) * 100}%`;
    }
    return "0%";
  };
  return (
    <>
      {grid === "grid" ? (
        <div className="rounded-xl border px-4 py-6 my-2 col-span-4">
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-semibold">{nameTeams}</span>
            <span>
              <Icon path={mdiDotsVertical} size={0.8} />
            </span>
          </div>
          <span className="block h-[84px] text-sm pt-5 pb-6">
            {description}
          </span>
          <div className="border-b py-5 flex justify-between">
            <span className="uppercase text-sm text-gray-400">industry:</span>
            <span className="text-sm text-blue-600 bg-blue-200 p-2 rounded-lg">
              {industry}
            </span>
          </div>
          <div className="border-b py-5 flex justify-between">
            <span className="uppercase text-sm text-gray-400">rated:</span>
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="relative">
                  <div
                    className="absolute top-0 left-0 overflow-hidden"
                    style={{ width: handleWidth(i + 1) }}
                  >
                    <Icon
                      path={mdiStar}
                      size={0.8}
                      style={{ color: "orange" }}
                    />
                  </div>
                  <Icon
                    path={mdiStarOutline}
                    size={0.8}
                    style={{ color: "gray" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="py-5 flex justify-between items-center">
            <span className="uppercase text-sm text-gray-400">members:</span>
            <div className="flex">
              {Array.from({ length: members }, (_, i) => (
                <span
                  key={i}
                  className="h-4 w-4 rounded-full block bg-red-400"
                ></span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-between items-center border rounded-xl p-4 shadow-sm">
          <div className="flex flex-col space-y-2.5">
            <span className="text-blue-600 font-semibold">{nameTeams}</span>
            <span className="text-sm text-blue-600 bg-blue-100 p-2 rounded-lg text-center">
              {industry}
            </span>
          </div>
          <span className="block h-[84px] text-base pt-5 pb-6 text-gray-400">
            {description}
          </span>
          <div className="flex items-center space-x-10">
            <div className="flex flex-col">
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i} className="relative">
                    <div
                      className="absolute top-0 left-0 overflow-hidden"
                      style={{ width: handleWidth(i + 1) }}
                    >
                      <Icon
                        path={mdiStar}
                        size={0.8}
                        style={{ color: "orange" }}
                      />
                    </div>
                    <Icon
                      path={mdiStarOutline}
                      size={0.8}
                      style={{ color: "gray" }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex space-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className="h-4 w-4 rounded-full block bg-red-400"
                  ></span>
                ))}
              </div>
            </div>
            <span>
              <Icon path={mdiDotsVertical} size={0.8} />
            </span>
          </div>
        </div>
      )}
    </>
  );
};
