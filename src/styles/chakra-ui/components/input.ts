import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const variantContained = definePartsStyle((props) => {
  const { colorScheme } = props;
  if (colorScheme === "alpha") {
    const fieldActive = defineStyle({
      bg: "white",
      color: "#444",
      _placeholder: {
        color: "#808080",
      },
    });
    const elementActive = defineStyle({
      color: "#808080",
    });
    return {
      field: {
        outline: 0,
        color: "white",
        border: "0px solid",
        bg: "rgba(255, 255, 255, 0.2)",
        paddingLeft: 34,
        _placeholder: {
          color: "white",
          opacity: 1,
        },
        _groupHover: fieldActive,
        _focus: fieldActive,
      },
      element: {
        bg: "transparent",
        color: "white",
        paddingLeft: 1,
        _groupHover: elementActive,
        _groupFocusWithin: elementActive,
      },
    };
  }
  return {};
});

const variantUnstyled = definePartsStyle({
  field: {
    px: 0,
    height: 6,
    fontSize: 16,
    fontWeight: 600,
    _placeholder: {
      color: "#757575",
      fontWeight: 400,
      opacity: 1,
    },
  },
});

const sizes = {
  sm: defineStyle({
    height: 7,
    borderRadius: 3,
    fontSize: 13,
  }),
};

const InputTheme = defineMultiStyleConfig({
  baseStyle: {},
  sizes: {
    sm: definePartsStyle({
      field: sizes.sm,
      addon: sizes.sm,
    }),
  },
  variants: {
    contained: variantContained,
    unstyled: variantUnstyled,
  },
  defaultProps: {},
});

export default InputTheme;
