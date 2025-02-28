import { mdilAccount, mdilCheck } from "@mdi/light-js";
import Icon from "@mdi/react";

interface IProps {
  connecter: {
    id: number;
    name: string;
    quantityCon: number;
    isConnected: boolean;
  };
}

export const ConnectProfileItem = ({ connecter }: IProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center space-x-4 cursor-pointer">
        <img
          src="https://picsum.photos/40/40"
          alt=""
          className="block rounded-full object-contain"
        />
        <div className="flex flex-col space-y-1">
          <span className="text-black font-semibold">{connecter.name}</span>
          <span className="text-text-light text-sm">
            {connecter.quantityCon} connections
          </span>
        </div>
      </div>
      <span
        className={`cursor-pointer border h-7 w-7 flex ${connecter.isConnected ? "bg-blue-600" : "bg-white border-blue-600"}  justify-center items-center rounded-full`}
      >
        <Icon
          path={connecter.isConnected ? mdilCheck : mdilAccount}
          size={0.8}
          color={connecter.isConnected ? "white" : "blue"}
        />
      </span>
    </div>
  );
};
