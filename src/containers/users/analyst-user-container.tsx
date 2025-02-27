import { useContext } from "react";
import { AnalysicUserItem } from "../../components/items/analysis-user-item";
import { UserContext } from "../../contexts/users/users-context";
import { IUser } from "../../models/user-modal";

export const AnalysisUserContainer = () => {
  const { allUsers, formModal } = useContext(UserContext);

  const calculatePercentage = (total: number, active: number) => {
    return ((total - active) / total) * 100;
  };
  const filterStatusUser = {
    active: (allUsers: IUser[]) =>
      allUsers.filter((user) => user.status === "Active"),
    pending: (allUsers: IUser[]) =>
      allUsers.filter((user) => user.status === "Pending"),
    suspended: (allUsers: IUser[]) =>
      allUsers.filter((user) => user.status === "Suspended"),
  };

  return (
    <>
      {!formModal && (
        <div className="py-10 px-8 w-full">
          <div className="grid grid-cols-12 gap-6 items-center">
            <AnalysicUserItem
              classname="col-span-3"
              analysisNumbers={{ total: allUsers.length, active: 22 }}
              percentage={Math.ceil(calculatePercentage(allUsers.length, 22))}
              duration={1500}
            >
              total users
            </AnalysicUserItem>

            <AnalysicUserItem
              classname="col-span-3"
              analysisNumbers={{
                total: allUsers.length,
                active: filterStatusUser.active(allUsers).length,
              }}
              percentage={Math.ceil(
                calculatePercentage(
                  allUsers.length,
                  filterStatusUser.active(allUsers).length
                )
              )}
              duration={1500}
            >
              active users
            </AnalysicUserItem>
            <AnalysicUserItem
              classname="col-span-3"
              analysisNumbers={{ total: 56, active: 48.7 }}
              sign={"%"}
              percentage={2.8}
              duration={3000}
            >
              new/returning
            </AnalysicUserItem>
            <AnalysicUserItem
              classname="col-span-3"
              analysisNumbers={{ total: 28, active: 28.6 }}
              sign={"%"}
              percentage={0}
              duration={3000}
            >
              Active members
            </AnalysicUserItem>
          </div>
        </div>
      )}
    </>
  );
};
