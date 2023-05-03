import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import styles from "./style.module.scss";

function Layout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
