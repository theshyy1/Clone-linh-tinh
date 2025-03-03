import { Outlet } from "react-router-dom";
import { HeadingProfileContainer } from "../containers/user-profile/heading-profile-container";

export const ProfileScreen = () => {
  return (
    <div className="h-full w-full mx-auto px-[150px]">
      <HeadingProfileContainer />
      <Outlet />
    </div>
  );
};
