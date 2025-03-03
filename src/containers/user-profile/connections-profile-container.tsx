import { mdilGridLarge, mdilLayers } from "@mdi/light-js";
import Icon from "@mdi/react";
import { useState } from "react";
import { Button } from "../../components/common/button";
import Popover from "../../components/common/popover";
import { DetailConnectionProfileItem } from "../../components/items/detail-connections-profile-item";
import { AnimateTransition } from "../../components/common/transition";
import { Footer } from "../../components/common/footer";
export interface IConnection {
  id: number;
  name: string;
  position: string;
  types: string[];
  isConnected: boolean;
  connections: number;
}

export const groupConnections = [
  {
    id: 1,
    name: "Rachel Doe",
    position: " Design",
    types: ["UI/UX", "Sketch", "Figma"],
    isConnected: true,
    connections: 24,
  },
  {
    id: 2,
    name: "Isabella Finley",
    position: "FrontApp",
    types: ["Human resources", "Support"],
    isConnected: true,
    connections: 24,
  },
  {
    id: 3,
    name: "David Harrison",
    position: " Unassigned",
    types: ["Marketing"],
    isConnected: false,
    connections: 24,
  },
  {
    id: 4,
    name: "Bob Dean",
    position: "Sales",
    types: ["Sales ", "Legal"],
    isConnected: false,
    connections: 24,
  },
  {
    id: 5,
    name: "Amanda Harvey",
    position: " Atlassian ",
    types: ["Human resources", "Support"],
    isConnected: true,
    connections: 24,
  },
  {
    id: 6,
    name: "Finch Hoot",
    position: "Dev",
    types: ["JS ", "Vue.js", "HTML5 "],
    isConnected: true,
    connections: 24,
  },
];

export const ConnectionProfileContainer = () => {
  const [isGrid, setGrid] = useState<"grid" | "flex">("grid");

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center py-6">
        <span className="font-semibold text-base">
          {groupConnections.length} connections
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
          {groupConnections.map((connection, index) => (
            <DetailConnectionProfileItem
              key={index}
              grid={isGrid}
              connection={connection}
            />
          ))}
        </div>
      </AnimateTransition>
    </div>
  );
};
