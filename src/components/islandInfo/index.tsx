import { HStack, Avatar, Box, Text, Center } from "@chakra-ui/react";
import useCountry from "../../hooks/useCountry";

const IslandInfo = () => {
  const { country } = useCountry();

  return (
    <Box
      flex={1}
      bg={"#ECBB79"}
      rounded={"2xl"}
      zIndex={1}
      position={"relative"}
      overflow="hidden"
    >
      <Box
        position={"absolute"}
        w={"75%"}
        h={"100%"}
        bg={"#51341E"}
        top={"-50%"}
        rounded={"3xl"}
        left={"12%"}
      ></Box>
      <HStack alignItems={"center"} height={"100%"} textColor={"white"}>
        <Center flex={1} flexDir={"column"}>
          <Avatar
            boxSize={"24"}
            src={
              country?.image ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHXTqNWWpVIb1go9ep2aihupiZBE98TKSrw&usqp=CAU"
            }
          />
          <Text fontSize={"2xl"}>{country?.name || "null"}</Text>
        </Center>{" "}
        <Center flex={1} flexDir={"column"}>
          <Avatar
            boxSize={"24"}
            src={
              country?.pirate?.image ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHXTqNWWpVIb1go9ep2aihupiZBE98TKSrw&usqp=CAU"
            }
          />
          <Text fontSize={"2xl"}>
            {country?.pirate?.name || "--no pirates--"}{" "}
          </Text>
        </Center>
      </HStack>
    </Box>
  );
};

export default IslandInfo;
