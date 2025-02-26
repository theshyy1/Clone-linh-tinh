import { mdiLeadPencil } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "../../components/common/button";
import { IUser } from "../../models/user-modal";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/users/users-context";
interface IProp {
  user: IUser;
}

export const SingleUserItem = ({ user }: IProp) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { onHandleChangeCheck } = useContext(UserContext);
  const styleForStatus = (status: IUser["status"]) => {
    let styleString = "";
    switch (status) {
      case "Active":
        return (styleString = "bg-green-600");
      case "Pending":
        return (styleString = "bg-yellow-600");
      default:
        return (styleString = "bg-red-600");
    }
  };

  return (
    <div
      onMouseEnter={() => setSelectedId(user.id)}
      onMouseLeave={() => setSelectedId(null)}
      className="relative w-full flex justify-between items-center text-text-light py-4"
    >
      <div className="flex flex-grow justify-start items-center space-x-4">
        <div className="p-4">
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={user.isFocus}
            onChange={() => onHandleChangeCheck(user.id)}
          />
        </div>
        <img
          src={user.avatar}
          className="rounded-full object-contain"
          alt="Avatar user"
        />
        <div className="flex flex-col">
          <Link
            to={`/users/${user.name}`}
            className={`text-base font-bold text-black ${selectedId === user.id && "text-blue-600"}`}
          >
            {user.name}
          </Link>
          <span className="text-sm">{user.email}</span>
        </div>
      </div>
      <div className="flex w-[15%] flex-col">
        <span className="text-base font-bold text-black">{user.position}</span>
        <span className="text-sm">{user.department}</span>
      </div>
      <span className="flex w-[15%]">{user?.location?.country}</span>
      <span className="flex space-x-2 items-center w-[15%]">
        <span
          className={`h-2 w-2 rounded-full block ${styleForStatus(user.status)}`}
        />
        <span>{user.status}</span>
      </span>
      <div className="flex items-center space-x-2 w-[15%]">
        <span className="text-sm">{user.portfolio}%</span>
        <div className="w-full h-1 bg-text-light relative">
          <div
            className={`absolute h-1 top-0 left-0 bg-blue-600`}
            style={{ width: `${user.portfolio}%` }}
          />
        </div>
      </div>
      <span className="pl-4 flex w-[15%] text-sm">{user.role}</span>
      <span className="absolute top-4 right-4">
        <Button
          className="rounded flex-row-reverse border border-background-dark w-[80px] pr-2"
          icon={<Icon path={mdiLeadPencil} size={0.7} />}
        >
          Edit
        </Button>
      </span>
    </div>
  );
};
