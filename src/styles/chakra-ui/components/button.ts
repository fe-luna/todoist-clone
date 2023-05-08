import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const ButtonTheme = defineStyleConfig({
  baseStyle: {},
  sizes: {
    sm: {
      height: 7,
      minWidth: 7,
      fontSize: 12,
      px: 2,
      borderRadius: 3,
    },
    md: {
      height: 8,
      minWidth: 8,
      px: 3,
      fontSize: 13,
    },
    lg: {
      height: 12,
      minWidth: 12,
      fontSize: 18,
      borderRadius: 8,
    },
  },
  variants: {
    solid: (props) => {
      const { colorScheme } = props;
      if (colorScheme === "primary") {
        return {
          color: "white",
          bg: "primary.500",
        };
      }
      return {
        color: "#444444",
        bg: "#f5f5f5",
        _hover: {
          color: "#1a1a1a",
          bg: "#e5e5e5",
        },
      };
    },
    ghost: (props) => {
      const { colorScheme } = props;
      if (colorScheme === "alpha") {
        return {
          color: "white",
          bg: "transparent",
          _hover: {
            bg: "rgba(255, 255, 255, 0.2)",
          },
          _active: {
            bg: "rgba(255, 255, 255, 0.2)",
          },
        };
      }
      if (colorScheme === "primary") {
        return {
          bg: "transparent",
          _hover: {
            bg: "rgba(255, 255, 255, 0.2)",
          },
        };
      }
      return {
        color: "grey",
        bg: "transparent",
        _hover: {
          color: "#202020",
          bg: "#eeeeee",
        },
      };
    },
    outline: (props) => {
      const { colorScheme } = props;
      const style = defineStyle({
        bg: "transparent",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#dddddd",
        _hover: {
          bg: "#f3f3f3",
        },
      });
      if (colorScheme === "primary") {
        style.borderColor = "primary.500";
      }
      return style;
    },
  },
  defaultProps: {
    colorScheme: "default",
    variant: "solid",
    size: "md",
  },
});

export default ButtonTheme;
