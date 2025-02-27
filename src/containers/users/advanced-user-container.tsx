import {
  mdiTrayArrowDown,
  mdiFilterCheckOutline,
  mdiMagnify,
  mdiDeleteOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "../../components/common/button";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/users/users-context";
import { removeAccents } from "../../common/common";
import { Input } from "../../components/common/input";
import { debounce } from "lodash";

export const AdvancedUserContainer = () => {
  const {
    allUsers,
    numberUsersFocused,
    deleteUsers,
    setFilteredUsers,
    setFilterModal,
  } = useContext(UserContext);
  const [searchValue, setSearchValue] = useState<string>("");

  const debounceSearch = debounce((value) => {
    const results = allUsers.filter((user) =>
      removeAccents(user.name.trim().toLowerCase()).includes(
        removeAccents(value.toLowerCase())
      )
    );
    setFilteredUsers(results);
  }, 1500);

  useEffect(() => {
    debounceSearch(searchValue);
    return () => debounceSearch.cancel();
  }, [searchValue, allUsers]);

  return (
    <div className="flex justify-between items-center px-4 py-6">
      <div className=" flex items-center border-background-dark ">
        <Icon path={mdiMagnify} size={1.3} color={`text-text-light`} />
        <Input
          placeholder="Search user"
          name="search-user"
          type="text"
          value={searchValue}
          clasnames="bg-transparent"
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
      <div className="flex items-center space-x-3">
        {numberUsersFocused.length > 0 && (
          <>
            <span className="text-text-light text-sm">
              {numberUsersFocused.length} Selected
            </span>
            <Button
              className="rounded-md border border-red-700 text-red-700 hover:bg-red-700 hover:text-white w-[100px] flex-row-reverse"
              icon={<Icon path={mdiDeleteOutline} size={0.8} />}
              onClick={deleteUsers}
            >
              Delete
            </Button>
          </>
        )}
        <Button
          className="rounded-md border border-background-dark hover:text-blue-700 w-[100px] flex-row-reverse"
          icon={<Icon path={mdiTrayArrowDown} size={0.8} />}
        >
          Export
        </Button>
        <Button
          className="rounded-md border border-background-dark hover:text-blue-700 w-[100px] flex-row-reverse"
          icon={<Icon path={mdiFilterCheckOutline} size={0.8} />}
          onClick={() => setFilterModal((prev) => !prev)}
        >
          Filter
        </Button>
      </div>
    </div>
  );
};
