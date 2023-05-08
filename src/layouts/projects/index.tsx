import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  IconButton,
} from "@chakra-ui/react";
import { ArrowDownIcon, AddIcon, DotIcon } from "components/icon";
import styles from "./style.module.scss";

interface ProjectItem {
  name: string;
  path: string;
  leftElement: ReactNode;
  count: number;
}

const Projects = () => {
  const list: ProjectItem[] = [
    {
      name: "Home 🏡",
      path: "/app/project/2313962990",
      leftElement: <DotIcon color="#b8b8b8" />,
      count: 9,
    },
    {
      name: "Test",
      path: "/app/project/2313962991",
      leftElement: <DotIcon color="#14aaf5" />,
      count: 0,
    },
  ];

  return (
    <Accordion allowToggle defaultIndex={0} marginTop={4}>
      <AccordionItem>
        <NavLink
          to="/app/projects/active"
          className={({ isActive }) =>
            cx(styles.title, styles.link, isActive && styles.linkActive)
          }
        >
          <div className={styles.titleText}>Projects</div>
          <IconButton
            aria-label="Add project"
            icon={<AddIcon boxSize={5} />}
            variant="ghost"
            size="sm"
            color="#666"
          />
          <AccordionButton>
            <ArrowDownIcon boxSize={4} />
          </AccordionButton>
        </NavLink>
        <AccordionPanel>
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
                  {!!item.count && (
                    <span className={styles.count}>{item.count}</span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Projects;
