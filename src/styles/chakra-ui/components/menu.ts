import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  menuAnatomy.keys
);

const MenuTheme = defineMultiStyleConfig({
  baseStyle: {
    list: {
      borderRadius: "10px",
      boxShadow: "0 0 8px rgba(0,0,0,.12)",
      padding: "6px",
    },
    item: {
      fontSize: "13px",
      color: "#202020",
      borderRadius: "5px",
      px: "8px",
      _hover: {
        bg: "#f3f3f3",
      },
    },
    command: {
      fontSize: "12px",
      color: "#808080",
    },
    divider: {
      my: "4px",
    },
  },
});

export default MenuTheme;
