import {
  Box,
  Flex,
  Button,
  HStack,
  Grid,
  Divider,
  Text,
  Center,
  Image,
} from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Map from "./components/map";
import IslandInfo from "./components/islandInfo";
import useCountry from "./hooks/useCountry";
import { countries } from "./data/countries";
import CountryItem from "./components/item";
import React from "react";
import { wanted } from "./data/wanted";

type Location = {
  name: string;
  x: number;
  y: number;
};

const locations: Location[] = [
  { x: 25, y: 309, name: "REVERSE MOUNTAIN" },
  { x: 170, y: 239, name: "TWIN CAPE" },
  { x: 435, y: 179, name: "CACTUS ISLAND" },
  { x: 495, y: 309, name: "GOLDFISH EMPIRE" },
  { x: 675, y: 209, name: "LITTLE GARDEN" },
  { x: 699, y: 59, name: "KYUKA ISLAND" },
  { x: 869, y: 200, name: "DRUM ISLAND" },
  { x: 1000, y: 82, name: "BOIN ARCHIPELAGO" },
  { x: 1000, y: 282, name: "NANIMONAI ISLAND" },
  { x: 1200, y: 162, name: "SANDY ISLAND" },
  { x: 1305, y: 100, name: "VIRA" },
  { x: 1450, y: 124, name: "UKKARI HOT SPRING ISLAND" },
  { x: 1409, y: 310, name: "KARAKURI ISLAND" },
  { x: 1469, y: 220, name: "JAYA" },
  { x: 1624, y: 130, name: "SKYPIEA" },
];

function App() {
  const { country, setCountry } = useCountry();
  const [current, setCurrent] = React.useState("establishment");
  const countryWanted = wanted.filter((w) => w.name !== country.name);

  const changeLocation = (name: string) => {
    const selectedCountry = countries.find((c) => c.name === name);
    if (selectedCountry) setCountry(selectedCountry);
  };

  // const displayInformations = () => {
  //   return current === "wanted" ? (
  //     <>
  //       {countryWanted.map((c) => (
  //         <div key={c.id}>
  //           <Image objectFit="contain" position="absolute" src={c.image} />
  //           <Box
  //             position="absolute"
  //             bottom={0}
  //             left={0}
  //             right={0}
  //             bg="#ECBB79"
  //             textColor="white"
  //             textAlign="center"
  //           >
  //             <Text fontSize="small">{c.name}</Text>
  //             <Text fontSize="small">{c.bounty}</Text>
  //           </Box>
  //         </div>
  //       ))}
  //     </>
  //   ) : null;
  // };

  // Usage
  // <CountryItem>{displayInformations()}</CountryItem>;

  return (
    <Box h="100vh" display="flex" flexDirection="column" bg={"#D9D9D9"}>
      <Navbar />
      <Flex flex={1} flexDirection="row" p={5}>
        <Box flex={1} rounded={"2xl"} margin={4} overflow={"auto"}>
          <Map locations={locations} setLocation={changeLocation} />
        </Box>
        <Box flex={1} margin={4} as={Flex} direction={"column"}>
          <IslandInfo />
          <Box flex={1.75} bg={"white"} mt={-3}>
            <Box mt={5}>
              <HStack
                justifyContent={"space-around"}
                alignItems={"center"}
                px={5}
              >
                <Button
                  color={"white"}
                  rounded={"full"}
                  bg={"#51341E"}
                  _hover={{ bg: "rgba(81, 52, 30, 0.8)" }}
                  flex={1}
                  onClick={() => setCurrent("establishment")}
                >
                  Establishments
                </Button>
                <Button
                  color={"white"}
                  rounded={"full"}
                  bg={"#51341E"}
                  _hover={{ bg: "rgba(81, 52, 30, 0.8)" }}
                  flex={1}
                  onClick={() => setCurrent("threats")}
                >
                  Threats
                </Button>
                <Button
                  color={"white"}
                  rounded={"full"}
                  bg={"#51341E"}
                  _hover={{ bg: "rgba(81, 52, 30, 0.8)" }}
                  flex={1}
                  onClick={() => setCurrent("wanted")}
                >
                  Wanted
                </Button>
              </HStack>
              <Divider mt={2} />
              {/* <Grid
                flex={1}
                templateColumns={"repeat(4, 1fr)"}
                gap={5}
                maxH={"300px"}
                overflowY={"auto"}
                px={10}
              >
                <CountryItem>{displayInformations}</CountryItem>
              </Grid> */}
              <Center>
                <Text> NO KNOWN INFORMATION</Text>
              </Center>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
