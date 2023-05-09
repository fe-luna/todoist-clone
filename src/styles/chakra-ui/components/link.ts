import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const LinkTheme = defineStyleConfig({
  baseStyle: {
    fontSize: 13,
    lineHeight: 1.1,
    color: "#202020",
    textDecoration: "underline",
  },
});

export default LinkTheme;
