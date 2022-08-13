import React from "react";
import { Outlet } from "react-router-dom";
import Header from "~/components/layouts-components/Header";
import Sidebar from "~/components/layouts-components/Sidebar";
const MainLayout = () => {
  return (
    <div className={"main-layout"}>
      <Header />
      <div className={"home-container"}>
        <Sidebar />
        <div className="home-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
