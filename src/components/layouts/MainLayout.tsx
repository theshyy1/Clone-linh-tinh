import { Outlet } from "react-router-dom";
import { Header } from "../common/header";
import { Sidebar } from "../common/sidebar";
import { Footer } from "../common/footer";

export const MainLayout = () => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="w-full h-full overflow-y-auto">
        <Header />
        <div className="">
          <Outlet />
        </div>
        <div className="pt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};
