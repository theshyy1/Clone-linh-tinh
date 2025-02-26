import { useContext } from "react";
import { SingleUserItem } from "../../components/items/single-user-item";
import { UserContext } from "../../contexts/users/users-context";
import { HeadingListUser } from "./heading-list-user";
import { IUser } from "../../models/user-modal";

export const MainListUserContainer = () => {
  const { filteredUsers } = useContext(UserContext);
  return (
    <>
      <HeadingListUser />
      <div className="py-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user: IUser) => (
            <SingleUserItem key={user.id} user={user} />
          ))
        ) : (
          <div className="text-center">
            <img
              src="https://thumb.ac-illust.com/02/02274a31b8806dea6f1fd854391fd61c_t.jpeg"
              alt="No data to show"
              className="w-full object-contain size-[200px]"
            />
            <span className="text-gray-400">No data to show</span>
          </div>
        )}
      </div>
    </>
  );
};
