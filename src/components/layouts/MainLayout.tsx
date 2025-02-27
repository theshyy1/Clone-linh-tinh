import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "../common/header";
import { Sidebar } from "../common/sidebar";

export const MainLayout = () => {
  return (
    <div className="relative flex h-screen w-full items-center">
      <Sidebar />

      <div className="h-full w-full overflow-hidden">
        <Header />
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        theme="colored"
      />
    </div>
  );
};
