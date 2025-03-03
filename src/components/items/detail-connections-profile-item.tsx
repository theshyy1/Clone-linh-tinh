import { mdiAccountRemoveOutline, mdiCity, mdiDotsVertical } from "@mdi/js";
import { mdilCheck } from "@mdi/light-js";
import Icon from "@mdi/react";
import { IConnection } from "../../containers/user-profile/connections-profile-container";
import { Button } from "../common/button";

interface IProps {
  connection: IConnection;
  grid: string;
}

export const DetailConnectionProfileItem = ({ connection, grid }: IProps) => {
  const { name, position, types, isConnected, connections } = connection;
  return (
    <>
      {grid === "grid" ? (
        <div className="rounded-xl border px-4 my-2 col-span-4">
          <div className="flex flex-col justify-between items-center space-y-3 py-8">
            <div className="relative">
              <img
                src="https://picsum.photos/80/80"
                alt=""
                className="object-contain rounded-full"
              />
              <span className="absolute bottom-3 right-0 w-3 h-3 rounded-full bg-[#00c9a7] block border-2 " />
            </div>
            <div className="flex items-center text-xl font-semibold space-x-3">
              <span>{name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <Icon path={mdiCity} size={0.8} />
              </span>
              <span>{position}</span>
            </div>
            <ul className="flex items-center space-x-2">
              {types.map((type, i) => (
                <li
                  key={i}
                  className="px-2 py-1 text-xs text-slate-400 bg-gray-400/40 rounded"
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t p-4 flex items-center justify-between">
            <span className="text-sm text-text-light">
              {connections} connections
            </span>
            <Button
              icon={
                <Icon
                  path={isConnected ? mdilCheck : mdiAccountRemoveOutline}
                  size={0.8}
                />
              }
              className={`${isConnected ? "bg-blue-600 text-white" : "bg-white border border-blue-600 text-blue-600"} p-4 rounded-lg flex-row-reverse`}
            >
              {isConnected ? "Connected" : "Connect"}
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-between items-center border rounded-xl p-4 shadow-sm">
          <div className="flex items-center space-x-3">
            <img
              src="https://picsum.photos/40/40"
              className="block rounded-full object-contain"
              alt=""
            />
            <div className="flex flex-col space-y-2.5">
              <span className="text-blue-600 font-semibold">{name}</span>
              <div className="flex items-center space-x-2">
                <span>
                  <Icon path={mdiCity} size={0.8} />
                </span>
                <span>{position}</span>
              </div>
            </div>
          </div>
          <ul className="flex items-center space-x-2">
            {types.map((type, i) => (
              <li
                key={i}
                className="px-2 py-1 text-xs text-slate-400 bg-gray-400/40 rounded"
              >
                {type}
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-10">
            <Button
              icon={
                <Icon
                  path={isConnected ? mdilCheck : mdiAccountRemoveOutline}
                  size={0.8}
                />
              }
              className={`${isConnected ? "bg-blue-600 text-white" : "bg-white border border-blue-600 text-blue-600"} p-4 rounded-lg flex-row-reverse`}
            >
              {isConnected ? "Connected" : "Connect"}
            </Button>
            <span>
              <Icon path={mdiDotsVertical} size={0.8} />
            </span>
          </div>
        </div>
      )}
    </>
  );
};
