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
import AddProject from "components/add-project";
import { useStore } from "stores";
import { PROJECT_MENU_COLOR } from "consts";
import styles from "./style.module.scss";

interface ProjectItem {
  name: string;
  path: string;
  leftElement: ReactNode;
  count: number;
}

const Projects = () => {
  const projects = useStore((state) => state.getProjectsExceptInbox());
  const list: ProjectItem[] = projects.map((item) => ({
    name: item.name,
    path: `/app/project/${item.id}`,
    leftElement: (
      <DotIcon color={PROJECT_MENU_COLOR[item.color?.toUpperCase()]} />
    ),
    count: 0,
  }));

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
          <AddProject>
            <IconButton
              aria-label="Add project"
              icon={<AddIcon boxSize={5} />}
              variant="ghost"
              size="sm"
              color="#666"
            />
          </AddProject>
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
