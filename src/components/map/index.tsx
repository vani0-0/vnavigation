import React from "react";
import halfworldmap from "../../assets/halfworldmap.png";
import Location from "../location";
import { Box } from "@chakra-ui/react";

type Props = {
  locations: { x: number; y: number; name: string }[];
  setLocation: (name: string) => void;
};

const Map = (props: Props) => {
  const isSelected = (name: string) => {
    props.setLocation(name);
  };
  const buttonRef = React.useRef(null);

  return (
    <Box
      backgroundImage={`url(${halfworldmap})`}
      backgroundSize="cover"
      backgroundPosition="center"
      position={"relative"}
      w={"1690px"}
      h={"500px"}
    >
      {props.locations.map((location, index) => (
        <Location
          key={index}
          ref={buttonRef}
          x={location.x}
          y={location.y}
          name={location.name}
          onClick={() => isSelected(location.name)}
        />
      ))}
    </Box>
  );
};

export default Map;
