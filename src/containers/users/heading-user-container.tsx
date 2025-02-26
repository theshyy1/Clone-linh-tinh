import { mdiAccountPlus } from "@mdi/js";
import Icon from "@mdi/react";
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
            <span className="text-2xl font-bold">Users</span>
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
