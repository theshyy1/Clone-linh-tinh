import { AnalysisUserContainer } from "../containers/users/analyst-user-container";
import { FooterUserContainer } from "../containers/users/footer-user-container";
import { FormUserContainer } from "../containers/users/form-user-container";
import { HeadingUserContainer } from "../containers/users/heading-user-container";
import { ListUserContainer } from "../containers/users/list-user-container";
import { UserContextProvider } from "../contexts/users/users-context";

export const UserScreen = () => {
  return (
    <UserContextProvider>
      <div className="relative h-[800px] pb-[100px] overflow-auto">
        <FormUserContainer />
        <HeadingUserContainer />
        <AnalysisUserContainer />
        <ListUserContainer />
        <FooterUserContainer />
      </div>
    </UserContextProvider>
  );
};
