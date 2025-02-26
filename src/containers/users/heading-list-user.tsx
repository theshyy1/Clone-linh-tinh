import Icon from "@mdi/react";
import { mdiSwapVertical } from "@mdi/js";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/users/users-context";
import { IUser } from "../../models/user-modal";

export const HeadingListUser = () => {
  const { allUsers, setAllUsers, setFilteredUsers } = useContext(UserContext);
  const [selectAll, setSelectAll] = useState(false);
  const [sortKey, setSortKey] = useState<keyof IUser | "location.country">(
    "location.country"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const onHandleChangeAll = () => {
    setSelectAll((prev) => !prev);
    setAllUsers((prev) =>
      prev.map((user) => ({ ...user, isFocus: !selectAll }))
    );
  };

  const sortProject = (key: keyof IUser | "location.country") => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const filteredValues = sortKey
    ? [...allUsers].sort((a, b) => {
        if (sortKey === "location.country") {
          const countryA = a.location.country || "";
          const countryB = b.location.country || "";
          if (countryA < countryB) return sortOrder === "asc" ? -1 : 1;
          if (countryA > countryB) return sortOrder === "asc" ? 1 : -1;
          return 0;
        }
        const valueA = a[sortKey as keyof IUser]!;
        const valueB = b[sortKey as keyof IUser]!;
        if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
        if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      })
    : allUsers;

  const onHandleSort = (key: keyof IUser | "location.country") => {
    sortProject(key);
    setAllUsers(filteredValues);
    setFilteredUsers(filteredValues);
  };

  return (
    <div className="w-full h-[60px] border flex justify-between items-center bg-[#f8fafd] text-text-light mt-4">
      <div className="flex flex-grow space-x-5">
        <input
          type="checkbox"
          className="ml-5"
          checked={selectAll}
          onChange={onHandleChangeAll}
        />
        <span
          className="flex cursor-pointer"
          onClick={() => onHandleSort("name")}
        >
          Name{<Icon path={mdiSwapVertical} size={0.7} />}
        </span>
      </div>
      <span
        className="flex uppercase cursor-pointer text-sm w-[15%]"
        onClick={() => onHandleSort("position")}
      >
        Position {<Icon path={mdiSwapVertical} size={0.7} />}
      </span>
      <span
        className="flex uppercase cursor-pointer text-sm w-[15%]"
        onClick={() => onHandleSort("location.country")}
      >
        country{<Icon path={mdiSwapVertical} size={0.7} />}
      </span>
      <span
        className="flex uppercase cursor-pointer text-sm w-[15%]"
        onClick={() => onHandleSort("status")}
      >
        status{<Icon path={mdiSwapVertical} size={0.7} />}
      </span>
      <span
        className="flex uppercase cursor-pointer text-sm w-[15%]"
        onClick={() => onHandleSort("portfolio")}
      >
        portfolio{<Icon path={mdiSwapVertical} size={0.7} />}
      </span>
      <span
        className="flex pl-4 uppercase cursor-pointer text-sm w-[15%]"
        onClick={() => onHandleSort("role")}
      >
        role{<Icon path={mdiSwapVertical} size={0.7} />}
      </span>
    </div>
  );
};
