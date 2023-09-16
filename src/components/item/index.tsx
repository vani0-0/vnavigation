import { GridItem } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CountryItem = (props: Props) => {
  return (
    <GridItem
      w="100%"
      h="100"
      bg="blue.500"
      overflow="hidden"
      position="relative"
      boxShadow="2px 0px 5px rgba(0, 0, 0, 0.2)"
      border={"1px solid black"}
    >
      {props.children}
    </GridItem>
  );
};

export default CountryItem;
