import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

function Layout() {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
