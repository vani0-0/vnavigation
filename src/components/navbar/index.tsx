import {
  Avatar,
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { AiFillCompass } from "react-icons/ai";
const Navbar = () => {
  return (
    <Box w={"full"}>
      <Flex
        bg={"#51341E"}
        h={"14"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={"12"}
      >
        <Flex textColor={"white"}>
          <Icon as={AiFillCompass} boxSize={"12"} />
          <Heading cursor={"pointer"}>V-NAVIGATOR</Heading>
        </Flex>
        <HStack>
          <IconButton aria-label="icon" rounded={"full"} />
          <IconButton aria-label="icon" rounded={"full"} />
          <Avatar />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
