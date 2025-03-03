import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { ConnectionProfileContainer } from "../containers/user-profile/connections-profile-container";
import { HomeProfileContainer } from "../containers/user-profile/home-profile-container";
import { TeamProfileContainer } from "../containers/user-profile/teams-profile-container";
import { DashboardScreen } from "../screens/dashboard-screen";
import { NotFoundScreen } from "../screens/notfound-screen";
import { ProfileScreen } from "../screens/profile-screen";
import { ProjectScreen } from "../screens/projects-screen";
import { UserScreen } from "../screens/user-screen";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index={true}
          path=""
          element={
            <Suspense>
              <DashboardScreen />
            </Suspense>
          }
        />
        <Route
          path="projects"
          element={
            <Suspense>
              <ProjectScreen />
            </Suspense>
          }
        />
        <Route
          path="users"
          element={
            <Suspense>
              <UserScreen />
            </Suspense>
          }
        />
        <Route path="user-profile" element={<ProfileScreen />}>
          <Route index path="" element={<HomeProfileContainer />} />
          <Route path="teams" element={<TeamProfileContainer />} />
          <Route path="connections" element={<ConnectionProfileContainer />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};
