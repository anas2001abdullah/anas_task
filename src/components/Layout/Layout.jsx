import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Layout = ({ user, onLogout }) => {
  return (
    <div>
      <SideBar user={user} onLogout={onLogout} />
      <Outlet />
    </div>
  );
};

export default Layout;
