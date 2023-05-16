import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  Box,
  Flex,
} from "@chakra-ui/react";
import {
  ActivityIcon,
  BusinessIcon,
  DownloadIcon,
  IntegrationIcon,
  LogoutIcon,
  PrintIcon,
  SettingIcon,
  StarStrokeIcon,
  ThemeIcon,
} from "components/icon";
import { useStore } from "stores";

function NavbarMenu() {
  const userInfo = useStore((state) => state.userInfo);
  const logout = useStore((state) => state.logout);
  const avatar = `https://avatars.doist.com/?fullName=${
    userInfo.full_name
  }&email=${encodeURIComponent(userInfo.email)}&size=195&bg=ffffff`;
  const handleLogout = () => {
    logout().then(() => {
      window.location.href = "/";
    });
  };

  return (
    <Menu gutter={5}>
      <MenuButton>
        <Avatar src={avatar} marginLeft={3} />
      </MenuButton>
      <MenuList minWidth="278px">
        <Flex alignItems="center" paddingBottom="4px">
          <Avatar src={avatar} width="50px" height="50px" marginLeft={3} />
          <Box marginLeft="14px" fontSize="13px">
            <Box fontWeight="bold">{userInfo.full_name}</Box>
            <Box color="gray">{userInfo.email}</Box>
          </Box>
        </Flex>
        <MenuItem icon={<SettingIcon />} command="⌘T">
          Settings
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<ThemeIcon />} command="⌘N">
          Theme
        </MenuItem>
        <MenuItem icon={<ActivityIcon />} command="⌘⇧N">
          Activity Log
        </MenuItem>
        <MenuItem icon={<PrintIcon />} command="⌘O">
          Print
        </MenuItem>
        <MenuItem icon={<IntegrationIcon />} command="⌘O">
          Integrations
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<StarStrokeIcon />} command="⌘O">
          Upgrade to Pro
        </MenuItem>
        <MenuItem icon={<BusinessIcon />} command="⌘O">
          Upgrade to Business
        </MenuItem>
        <MenuItem icon={<DownloadIcon />} command="⌘O">
          Download apps
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<LogoutIcon />} command="⌘O" onClick={handleLogout}>
          Log out
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default NavbarMenu;
