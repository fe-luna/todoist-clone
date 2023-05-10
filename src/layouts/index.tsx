import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useStore } from "stores";
import LoadingScreen from "components/loading-screen";
import Menu from "./menu";
import Navbar from "./navbar";
import Projects from "./projects";
import Sidebar from "./sidebar";
import styles from "./style.module.scss";

function Layout() {
  const navigate = useNavigate();
  const fetchUserInfo = useStore((state) => state.fetchUserInfo);
  const getSidebarWidth = useStore((state) => state.getSidebarWidth);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Promise.all([
      fetchUserInfo().catch((err) => {
        navigate("/auth/login");
        return Promise.reject(err);
      }),
      getSidebarWidth().catch(() => {}),
    ]).then(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.main}>
        <Sidebar>
          <Menu />
          <Projects />
        </Sidebar>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
