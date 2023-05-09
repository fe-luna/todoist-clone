import { formAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const FormControlTheme = defineMultiStyleConfig({
  baseStyle: {
    container: {
      border: "1px solid #eee",
      borderRadius: 10,
      padding: "6px 8px 4px",
      _focusWithin: {
        borderColor: "#999",
      },
    },
  },
});

export default FormControlTheme;
