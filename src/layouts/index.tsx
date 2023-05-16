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
  const fetchProjects = useStore((state) => state.fetchProjects);
  const fetchTodos = useStore((state) => state.fetchTodos);
  const getSidebarWidth = useStore((state) => state.getSidebarWidth);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const init = async () => {
      await Promise.all([fetchUserInfo(), fetchProjects(), fetchTodos()]).catch(
        (err) => {
          console.error(err);
          navigate("/auth/login");
        }
      );
      await getSidebarWidth().catch(() => {});
      setLoaded(true);
    };
    init();
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
