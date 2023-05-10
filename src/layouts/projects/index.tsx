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
import { useStore } from "stores";

interface ProjectItem {
  name: string;
  path: string;
  leftElement: ReactNode;
  count: number;
}

const Projects = () => {
  const projects = useStore((state) => state.projects);
  const list: ProjectItem[] = projects.map((item) => ({
    name: item.name,
    path: `/app/project/${item.id}`,
    // TODO color
    leftElement: <DotIcon color="#b8b8b8" />,
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
