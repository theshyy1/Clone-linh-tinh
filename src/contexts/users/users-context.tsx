import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { IUser } from "../../models/user-modal";
import { users } from "../../assets/static-data/users";
interface UserContextInterface {
  allUsers: IUser[];
  filteredUsers: IUser[];
  setAllUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  setFilteredUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  numberUsersFocused: IUser[];
  onHandleChangeCheck: (id: number) => void;
  deleteUsers: () => void;
  filterModal: boolean;
  setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  formModal: boolean;
  setFormModal: React.Dispatch<React.SetStateAction<boolean>>;
  addUser: (user: IUser) => void;
}

const initialState = {
  allUsers: users,
  filteredUsers: [],
  numberUsersFocused: [],
  setAllUsers: () => null,
  setFilteredUsers: () => null,
  onHandleChangeCheck: () => null,
  deleteUsers: () => null,
  filterModal: false,
  setFilterModal: () => null,
  formModal: false,
  setFormModal: () => null,
  addUser: () => null,
};

export const UserContext = createContext<UserContextInterface>(initialState);
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [allUsers, setAllUsers] = useState<IUser[]>(initialState.allUsers);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([...allUsers]);
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [formModal, setFormModal] = useState<boolean>(false);
  const addUser = (user: IUser) => {
    setAllUsers((prev) => [user, ...prev]);
    setFilteredUsers((prev) => [user, ...prev]);
  };

  const onHandleChangeCheck = (id: number) => {
    setAllUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isFocus: !user.isFocus } : user
      )
    );
    setFilteredUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isFocus: !user.isFocus } : user
      )
    );
  };
  const numberUsersFocused = allUsers.filter((user) => user.isFocus === true);

  const deleteUsers = () =>
    setAllUsers((prev) => prev.filter((user) => user.isFocus !== true));

  const value = useMemo(
    () => ({
      allUsers,
      numberUsersFocused,
      filteredUsers,
      filterModal,
      formModal,
      setFilteredUsers,
      setAllUsers,
      onHandleChangeCheck,
      deleteUsers,
      setFilterModal,
      setFormModal,
      addUser,
    }),
    [allUsers, filteredUsers, filterModal, formModal]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
