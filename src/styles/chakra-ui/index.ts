import { extendTheme } from "@chakra-ui/react";
import Button from "./components/button";
import Input from "./components/input";
import styles from "./foundations/global-styles";
import colors from "./foundations/colors";
import radii from "./foundations/radius";

const todoistTheme = extendTheme({
  colors,
  styles,
  radii,
  components: {
    Button,
    Input,
  },
});

export { todoistTheme };
