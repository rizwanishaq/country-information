import React, { createContext, useState, useEffect } from "react";

export const CountryContext = createContext();

const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("CA");

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(`https://restcountries.eu/rest/v2`);
      const data = await response.json();
      setCountries(data);
    };
    getCountries();
  }, []);

  return (
    <CountryContext.Provider value={{ country, setCountry, countries }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContextProvider;
