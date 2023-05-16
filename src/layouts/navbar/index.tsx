import React from "react";
import {
  IconButton,
  Button,
  ButtonProps,
  Flex,
  Spacer,
  HStack,
} from "@chakra-ui/react";
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
import NavbarMenu from "./menu";
import styles from "./style.module.scss";

function Navbar() {
  const btnProps: ButtonProps = { colorScheme: "alpha", variant: "ghost" };
  return (
    <Flex className={styles.navbar} alignItems="center">
      <HStack spacing="4px">
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
      </HStack>
      <Spacer className={styles.search} marginLeft={1.5}>
        <Search />
      </Spacer>
      <Button
        leftIcon={<StarIcon />}
        size="sm"
        isActive
        iconSpacing={1}
        marginRight={3}
        paddingLeft={0.5}
        borderRadius={5}
        {...btnProps}
      >
        Upgrade to Pro
      </Button>
      <HStack spacing="5px">
        <IconButton aria-label="Add task" icon={<AddIcon />} {...btnProps} />
        <Button
          leftIcon={<ProductivityIcon />}
          px={1.5}
          fontWeight={400}
          iconSpacing={1.5}
          borderRadius={3}
          {...btnProps}
        >
          0/5
        </Button>
        <IconButton
          aria-label="Open help & information"
          icon={<QuestionIcon />}
          borderRadius={3}
          {...btnProps}
        />
        <IconButton
          aria-label="Open notifications"
          icon={<NotificationIcon />}
          borderRadius={3}
          {...btnProps}
        />
      </HStack>
      <NavbarMenu />
    </Flex>
  );
}

export default Navbar;
