import { Box, IconButton } from "@chakra-ui/react";
import { BiSolidMap } from "react-icons/bi";
import React from "react";

type Props = {
  x: number;
  y: number;
  name: string;
  onClick: () => void;
};

const Location = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <Box position="absolute" top={props.y} left={props.x}>
      <IconButton
        ref={ref}
        aria-label={props.name}
        icon={<BiSolidMap />}
        bg="none"
        color="red"
        onClick={props.onClick}
        fontSize={'2xl'}
      />
    </Box>
  );
});

export default Location;
