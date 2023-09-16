import React from "react";
import { Country, countries } from "../data/countries";

type Props = { children: React.ReactNode };
type CountryContextProps = {
  country: Country;
  setCountry: React.Dispatch<React.SetStateAction<Country>>;
};
const reverseMountain = countries[0];
export const CountryContext = React.createContext<CountryContextProps>({
  country: reverseMountain,
  setCountry: () => {},
});

const CountryProvider = (props: Props) => {
  const [country, setCountry] = React.useState<Country>(reverseMountain);
  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
