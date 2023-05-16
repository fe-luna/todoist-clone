import { extendTheme } from "@chakra-ui/react";
import Accordion from "./components/accordion";
import Avatar from "./components/avatar";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Form from "./components/form";
import FormLabel from "./components/form-label";
import Input from "./components/input";
import Link from "./components/link";
import styles from "./foundations/global-styles";
import colors from "./foundations/colors";
import radii from "./foundations/radius";

const todoistTheme = extendTheme({
  colors,
  styles,
  radii,
  components: {
    Accordion,
    Avatar,
    Button,
    Checkbox,
    Input,
    Form,
    FormLabel,
    Link,
  },
});

export { todoistTheme };
