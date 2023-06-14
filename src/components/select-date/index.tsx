import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { CloseIcon, CalendarIcon } from "components/icon";

interface Props {
  value?: number;
  onChange: (value: number) => void;
}

const SelectDate = (props: Props) => {
  // TODO calendar component
  return (
    <Button
      variant="outline"
      size="sm"
      leftIcon={<CalendarIcon color="#058527" boxSize={4} />}
      rightIcon={
        <Box _hover={{ background: "#e5e5e5", borderRadius: 2 }}>
          <CloseIcon boxSize={4} />
        </Box>
      }
      iconSpacing="4px"
      isActive={!!props.value}
    >
      <Box color="#058527">Today</Box>
    </Button>
  );
};

export default SelectDate;
