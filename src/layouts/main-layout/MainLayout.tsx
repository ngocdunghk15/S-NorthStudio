import React from "react";
import { Outlet } from "react-router-dom";
import Header from "~/components/layouts-components/Header";
import Sidebar from "~/components/layouts-components/Sidebar";
import styles from "./MainLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const MainLayout = () => {
  return (
    <div className={cx("main-layout")}>
      <Sidebar />
      <div className={cx("home-container")}>
        <Header />
        <div className={cx("home-content")}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
