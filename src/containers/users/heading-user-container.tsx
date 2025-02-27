import Icon from "@mdi/react";
import { mdiAccountPlus } from "@mdi/js";
import { Button } from "../../components/common/button";
import { useContext } from "react";
import { UserContext } from "../../contexts/users/users-context";

export const HeadingUserContainer = () => {
  const { formModal, setFormModal } = useContext(UserContext);
  return (
    <>
      {!formModal && (
        <div className="w-full h-[100px] px-8">
          <div className="h-full border-b border-background-dark flex justify-between items-center ">
            <div className="flex flex-col">
              <span className="text-text-light">
                Screen / Users / <strong>Overview</strong>
              </span>
              <span className="text-2xl font-bold">Users</span>
            </div>
            <Button
              onClick={() => setFormModal(true)}
              className="rounded bg-blue-600 text-white flex-row-reverse"
              icon={<Icon path={mdiAccountPlus} size={1} />}
            >
              Add User
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
