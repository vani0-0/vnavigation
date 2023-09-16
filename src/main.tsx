import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import CountryProvider from "./contexts/countryContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <CountryProvider>
          <App />
        </CountryProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
