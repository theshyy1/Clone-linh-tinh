import { Outlet } from "react-router-dom";
import { Header } from "../common/header";
import { Sidebar } from "../common/sidebar";

export const MainLayout = () => {
  return (
    <div className="relative flex h-screen w-full items-center overflow-hidden">
      <Sidebar />
      <div className="h-full w-full">
        <Header />
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
