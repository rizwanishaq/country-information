import React from "react";
import HomePage from "./pages/HomePage";
import CountryContextProvider from "./contexts/CountryContext";
function App() {
  return (
    <>
      <CountryContextProvider>
        <HomePage />;
      </CountryContextProvider>
    </>
  );
}

export default App;
