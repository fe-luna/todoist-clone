import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    border: 0,
  },
  button: {
    width: 7,
    height: 7,
    px: 0,
    color: "#666",
    justifyContent: "center",
    bg: "transparent",
    transform: "rotate(90deg)",
    _hover: {
      bg: "transparent",
    },
    _expanded: {
      transform: "rotate(0deg)",
    },
  },
  panel: {
    px: 0,
    py: 0,
  },
});

const accordionTheme = defineMultiStyleConfig({ baseStyle });

export default accordionTheme;
