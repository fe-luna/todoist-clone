import React from "react";
import { IconButton, Button, Avatar } from "@chakra-ui/react";
import {
  AddIcon,
  HomeIcon,
  MenuIcon,
  NotificationIcon,
  ProductivityIcon,
  QuestionIcon,
  StarIcon,
} from "components/icon";
import Search from "components/search";
import styles from "./style.module.scss";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <IconButton aria-label="Open menu" icon={<MenuIcon />} />
      <IconButton aria-label="Go to home" icon={<HomeIcon />} />
      <div className={styles.search}>
        <Search />
      </div>
      <Button leftIcon={<StarIcon />} isActive>
        Upgrade to Pro
      </Button>
      <IconButton aria-label="Add task" icon={<AddIcon />} />
      <Button leftIcon={<ProductivityIcon />} isActive>
        0/5
      </Button>
      <IconButton
        aria-label="Open help & information"
        icon={<QuestionIcon />}
      />
      <IconButton aria-label="Open notifications" icon={<NotificationIcon />} />
      <Avatar name="Luna" />
    </div>
  );
}

export default Navbar;
