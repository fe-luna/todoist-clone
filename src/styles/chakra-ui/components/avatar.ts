import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  avatarAnatomy.keys
);

const AvatarTheme = defineMultiStyleConfig({
  baseStyle: {},
  sizes: {
    md: {
      container: {
        width: 7,
        height: 7,
      },
    },
  },
  variants: {},
  defaultProps: {},
});

export default AvatarTheme;
