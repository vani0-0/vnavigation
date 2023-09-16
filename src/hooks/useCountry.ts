import React from "react";
import { CountryContext } from "../contexts/countryContext";

const useCountry = () => {
  return React.useContext(CountryContext);
};

export default useCountry;
