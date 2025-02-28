import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { DashboardScreen } from "../screens/dashboard-screen";
import { NotFoundScreen } from "../screens/notfound-screen";
import { ProjectScreen } from "../screens/projects-screen";
import { UserScreen } from "../screens/user-screen";
import { UserProfileScreen } from "../screens/user-profile-screen";

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
        <Route path="user-profile" element={<UserProfileScreen />} />
      </Route>
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};
