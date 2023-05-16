import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys
);

const CheckBoxTheme = defineMultiStyleConfig({
  baseStyle: {
    control: {
      color: "gray",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "gray",
      borderRadius: "50%",
      _hover: {
        bg: "rgba(128, 128, 128, 0.2)",
      },
      _checked: {
        color: "white",
        bg: "gray",
        borderColor: "gray",
        _hover: {
          bg: "gray",
          borderColor: "gray",
        },
      },
      _after: {
        content: '""',
        width: "10px",
        height: "10px",
        background: "red",
      },
    },
  },
  sizes: {
    md: {
      control: {
        width: "18px",
        height: "18px",
      },
    },
  },
});

export default CheckBoxTheme;
