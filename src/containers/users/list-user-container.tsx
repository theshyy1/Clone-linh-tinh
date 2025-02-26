import { useContext } from "react";
import { AdvancedUserContainer } from "./advanced-user-container";
import { FilterUserContainer } from "./filter-user-container";
import { MainListUserContainer } from "./main-list-user-container";
import { PaginationUserContainer } from "./pagination-user-container";
import { UserContext } from "../../contexts/users/users-context";

export const ListUserContainer = () => {
  const { formModal } = useContext(UserContext);
  return (
    <>
      {!formModal && (
        <div className="py-6 px-8 w-full ">
          <div className="relative border rounded-xl h-full border-text-dark">
            <AdvancedUserContainer />
            <FilterUserContainer />
            <MainListUserContainer />
            <PaginationUserContainer />
          </div>
        </div>
      )}
    </>
  );
};
