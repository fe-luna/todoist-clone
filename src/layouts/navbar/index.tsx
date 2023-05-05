import React from "react";
import { IconButton, Button, Avatar, ButtonProps } from "@chakra-ui/react";
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
  const btnProps: ButtonProps = { colorScheme: "alpha", variant: "ghost" };
  return (
    <div className={styles.navbar}>
      <IconButton
        aria-label="Open menu"
        icon={<MenuIcon />}
        size="sm"
        {...btnProps}
      />
      <IconButton
        aria-label="Go to home"
        icon={<HomeIcon />}
        size="sm"
        {...btnProps}
      />
      <div className={styles.search}>
        <Search />
      </div>
      <Button leftIcon={<StarIcon />} size="sm" px={2} isActive {...btnProps}>
        Upgrade to Pro
      </Button>
      <IconButton aria-label="Add task" icon={<AddIcon />} {...btnProps} />
      <Button leftIcon={<ProductivityIcon />} {...btnProps} px={1}>
        0/5
      </Button>
      <IconButton
        aria-label="Open help & information"
        icon={<QuestionIcon />}
        {...btnProps}
      />
      <IconButton
        aria-label="Open notifications"
        icon={<NotificationIcon />}
        {...btnProps}
      />
      <Avatar name="Luna" size="sm" />
    </div>
  );
}

export default Navbar;
