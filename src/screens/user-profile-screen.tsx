import { BodyProfileContainer } from "../containers/user-profile/body-profile-container";
import { HeadingProfileContainer } from "../containers/user-profile/heading-profile-container";

export const UserProfileScreen = () => {
  return (
    <div className="h-full w-full mx-auto px-[150px] overflow-y-auto">
      <HeadingProfileContainer />
      <BodyProfileContainer />
    </div>
  );
};
