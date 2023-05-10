import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import {
  FiltersIcon,
  InboxIcon,
  TodayIcon,
  UpcomingIcon,
} from "components/icon";
import { useStore } from "stores";
import styles from "./style.module.scss";

interface MenuItem {
  name: string;
  path: string;
  leftElement: ReactNode;
  count: number;
}

const Menu = () => {
  const userInfo = useStore((state) => state.userInfo);
  const list: MenuItem[] = [
    {
      name: "Inbox",
      path: `/app/project/${userInfo.inbox_project_id}`,
      leftElement: <InboxIcon />,
      count: 9,
    },
    {
      name: "Today",
      path: "/app/today",
      leftElement: <TodayIcon />,
      count: 0,
    },
    {
      name: "Upcoming",
      path: "/app/upcoming",
      leftElement: <UpcomingIcon />,
      count: 0,
    },
    {
      name: "Filters & Labels",
      path: "/app/filters-labels",
      leftElement: <FiltersIcon />,
      count: 0,
    },
  ];

  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item.name} className={styles.item}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              cx(styles.link, isActive && styles.linkActive)
            }
          >
            {item.leftElement}
            <span className={styles.name}>{item.name}</span>
            {!!item.count && <span className={styles.count}>{item.count}</span>}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
