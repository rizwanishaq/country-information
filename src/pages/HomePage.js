import React, { memo } from "react";
import { Container } from "react-bootstrap";
import CountryDetails from "../components/CountryDetails";
import CountryPicker from "../components/CountryPicker";

const HomePage = memo(() => {
  return (
    <>
      <Container>
        <CountryPicker />
        <CountryDetails />
      </Container>
    </>
  );
});

export default HomePage;
