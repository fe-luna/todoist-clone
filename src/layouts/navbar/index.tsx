import React from "react";
import { MenuIcon } from "components/icon";
import style from "./style.module.scss";

function Navbar() {
  return (
    <div className={style.navbar}>
      <MenuIcon />
    </div>
  );
}

export default Navbar;
